import Image from "next/image";
import type {
  ProfileCardItem,
  ProfileGalleryItem,
  ProfileLinkItem,
  ProfileLinkKind,
  ProfileSection,
  ProfileTimelineItem,
} from "@/data/members";

const linkKindLabels: Record<ProfileLinkKind, string> = {
  link: "Link",
  document: "Documento",
  video: "Vídeo",
  image: "Imagem",
  certificate: "Certificado",
};

function isHttp(href: string) {
  return /^https?:\/\//.test(href);
}

function Tags({ items }: { items?: string[] }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tópicos">
      {items.map((item) => (
        <li
          key={item}
          className="border border-line px-2 py-1 text-xs text-ash"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function MoreLink({ href, label }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      {...(isHttp(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-kin underline decoration-kin/40 underline-offset-4 hover:text-kin-soft"
    >
      {label ?? "Saiba mais"}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function TimelineItem({ item }: { item: ProfileTimelineItem }) {
  return (
    <li className="relative pb-8 last:pb-0">
      <span
        className="absolute -left-[1.72rem] top-1.5 h-2.5 w-2.5 rotate-45 border border-kin bg-obsidian"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-lg font-semibold text-bone">
          {item.title}
        </h3>
        {item.period && (
          <p className="text-xs uppercase tracking-widest text-kin">
            {item.period}
          </p>
        )}
      </div>
      {item.subtitle && <p className="mt-1 text-sm text-ash">{item.subtitle}</p>}
      {item.description && (
        <p className="mt-2 text-sm leading-6 text-ash">{item.description}</p>
      )}
      <Tags items={item.tags} />
      {item.href && <MoreLink href={item.href} label={item.linkLabel} />}
    </li>
  );
}

function CardItem({ item }: { item: ProfileCardItem }) {
  return (
    <li className="flex h-full flex-col border border-line bg-charcoal p-5">
      {item.meta && (
        <p className="text-xs uppercase tracking-widest text-ash">{item.meta}</p>
      )}
      <h3 className="mt-2 font-display text-lg font-semibold text-bone">
        {item.title}
      </h3>
      {item.description && (
        <p className="mt-2 flex-1 text-sm leading-6 text-ash">
          {item.description}
        </p>
      )}
      <Tags items={item.tags} />
      {item.href && <MoreLink href={item.href} label={item.linkLabel} />}
    </li>
  );
}

function LinkRow({ item }: { item: ProfileLinkItem }) {
  const label = linkKindLabels[item.kind ?? "link"];

  return (
    <li>
      <a
        href={item.href}
        {...(isHttp(item.href)
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-start justify-between gap-4 py-4"
      >
        <span>
          <span className="text-xs uppercase tracking-widest text-ash">
            {label}
          </span>
          <span className="mt-1 block text-base font-semibold text-bone group-hover:text-kin-soft">
            {item.label}
          </span>
          {item.description && (
            <span className="mt-1 block text-sm text-ash">
              {item.description}
            </span>
          )}
        </span>
        <span className="mt-1 text-kin" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}

function GalleryItem({ item }: { item: ProfileGalleryItem }) {
  const media = (
    <figure className="group overflow-hidden border border-line bg-charcoal">
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.src.startsWith("/") ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          // Imagens externas ficam como <img> para não exigir configuração de
          // domínios remotos no next.config. Prefira assets locais em produção.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </div>
      {item.caption && (
        <figcaption className="p-4 text-sm text-ash">{item.caption}</figcaption>
      )}
    </figure>
  );

  if (!item.href) return media;

  return (
    <a
      href={item.href}
      {...(isHttp(item.href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="block"
    >
      {media}
    </a>
  );
}

function SectionBody({ section }: { section: ProfileSection }) {
  if (section.kind === "text") {
    return (
      <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-ash">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.id}-text-${index}`}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (section.kind === "timeline") {
    return (
      <ol className="mt-6 border-l border-kin/35 pl-6">
        {section.items.map((item, index) => (
          <TimelineItem key={`${section.id}-timeline-${index}`} item={item} />
        ))}
      </ol>
    );
  }

  if (section.kind === "cards") {
    return (
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {section.items.map((item, index) => (
          <CardItem key={`${section.id}-card-${index}`} item={item} />
        ))}
      </ul>
    );
  }

  if (section.kind === "links") {
    return (
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {section.items.map((item, index) => (
          <LinkRow key={`${section.id}-link-${index}`} item={item} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {section.items.map((item, index) => (
        <li key={`${section.id}-gallery-${index}`}>
          <GalleryItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export function ProfileSections({ sections }: { sections?: ProfileSection[] }) {
  if (!sections?.length) return null;

  return (
    <div className="mt-14 space-y-14">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-12"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-kin" aria-hidden="true" />
            <h2
              id={`${section.id}-title`}
              className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl"
            >
              {section.title}
            </h2>
          </div>
          {section.description && (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ash">
              {section.description}
            </p>
          )}
          <SectionBody section={section} />
        </section>
      ))}
    </div>
  );
}
