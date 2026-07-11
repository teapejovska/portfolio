import HeroBackground from "@/components/HeroBackground";
import MountReveal from "@/components/MountReveal";
import { resumeHref } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden"
      id="home"
    >
      <HeroBackground />
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter py-section-gap">
        <div className="md:col-span-8 flex flex-col items-start">
          <MountReveal>
            <span className="font-label-md text-label-md text-primary mb-4 tracking-widest uppercase">
              Frontend Developer &amp; CS Student
            </span>
          </MountReveal>
          <MountReveal delay={120}>
            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background mb-6 leading-tight">
              Crafting Digital Experiences with{" "}
              <span className="text-primary italic">Code &amp; Heart.</span>
            </h1>
          </MountReveal>
          <MountReveal delay={240}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
              I bridge the gap between robust engineering and accessible
              design. Specializing in React, Java, and Spring Boot to build
              systems that are as thoughtful as they are functional.
            </p>
          </MountReveal>
          <MountReveal delay={360}>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-primary/90 transition-all ambient-shadow-hover"
                href={resumeHref}
                download
              >
                Download CV
                <span className="material-symbols-outlined ml-2 text-[18px]!">
                  download
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center border-2 border-outline text-on-surface-variant font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-surface-variant transition-all"
                href="#projects"
              >
                View Work
              </a>
            </div>
          </MountReveal>
        </div>
      </div>
    </section>
  );
}
