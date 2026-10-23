# Perfis do time

Cada integrante é dono do próprio arquivo:

```
src/members/<slug>/profile.ts
```

O perfil é conteúdo versionado, sem banco de dados, painel exposto ou credenciais. Para adicionar, editar, reordenar ou remover conteúdos, altere o array `sections` do seu arquivo e abra um pull request.

## Regras rápidas

- `id` de cada seção: minúsculas, números e hífens. Precisa ser único no perfil.
- `visao-geral`, `projetos` e `contato` são reservados.
- A ordem do array `sections` é a ordem exibida na página.
- Imagens locais devem ficar em `public/images/members/<slug>/`.
- Links externos abrem em nova aba; documentos e vídeos podem ser referenciados por URL.
- O build valida os IDs e impede seções duplicadas ou reservadas.

## Tipos disponíveis

### Texto

```ts
{
  id: "sobre-minha-pesquisa",
  title: "Sobre minha pesquisa",
  kind: "text",
  description: "Uma introdução curta.",
  paragraphs: [
    "Primeiro parágrafo.",
    "Segundo parágrafo.",
  ],
}
```

### Linha do tempo

Ideal para experiências, formações, certificados e marcos.

```ts
{
  id: "formacao",
  title: "Formação e certificados",
  kind: "timeline",
  items: [
    {
      title: "Nome do curso ou experiência",
      subtitle: "Instituição ou empresa",
      period: "2024 — 2025",
      description: "O que foi feito e o que foi aprendido.",
      tags: ["Next.js", "TypeScript"],
      href: "https://exemplo.com/certificado",
      linkLabel: "Ver certificado",
    },
  ],
}
```

### Cards

Ideal para habilidades, frentes de atuação, projetos e publicações.

```ts
{
  id: "publicacoes",
  title: "Publicações",
  kind: "cards",
  items: [
    {
      title: "Título do artigo",
      meta: "Revista ou evento · 2025",
      description: "Resumo curto do trabalho.",
      tags: ["Pesquisa", "IA"],
      href: "https://exemplo.com/artigo",
      linkLabel: "Ler publicação",
    },
  ],
}
```

### Links e documentos

Ideal para currículo, certificados, vídeos, imagens e materiais externos.

```ts
{
  id: "materiais",
  title: "Materiais",
  kind: "links",
  items: [
    {
      label: "Currículo em PDF",
      href: "https://exemplo.com/cv.pdf",
      description: "Versão atualizada.",
      kind: "document",
    },
    {
      label: "Apresentação em vídeo",
      href: "https://exemplo.com/video",
      kind: "video",
    },
  ],
}
```

Tipos de link: `link`, `document`, `video`, `image`, `certificate`.

### Galeria

```ts
{
  id: "bastidores",
  title: "Bastidores",
  kind: "gallery",
  items: [
    {
      src: "/images/members/seu-slug/foto.jpg",
      alt: "Descrição objetiva da imagem",
      caption: "Legenda opcional.",
    },
  ],
}
```

## Estrutura totalmente livre

Se um conteúdo não couber nos blocos acima, crie um componente em `src/members/<slug>/sections/` e passe-o em `extra` na `Page.tsx` do integrante. O layout continua responsável por cabeçalho, navegação, projetos e contato.
