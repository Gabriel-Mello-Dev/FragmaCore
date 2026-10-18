import { Contact } from "@/components/sections/Contact";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Differentials />
      </Reveal>
      <Reveal>
        <Method />
      </Reveal>
      <Reveal>
        <Team />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
