import Reveal from "@/components/Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            Selected Work
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A collection of projects focused on accessibility, user
            experience, and technical problem solving.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 100}
              className="bg-surface-container-lowest rounded-card overflow-hidden ambient-shadow ambient-shadow-hover group flex flex-col h-full"
            >
              <div
                className={`h-64 overflow-hidden flex items-center justify-center ${project.coverBg}`}
              >
                {project.motif === "waveform" ? (
                  <span
                    className={`material-symbols-outlined ${project.coverFg} text-[180px]! group-hover:scale-105 transition-transform duration-500`}
                  >
                    graphic_eq
                  </span>
                ) : (
                  <span
                    className={`font-headline-xl ${project.coverFg} font-bold text-[140px] leading-none group-hover:scale-105 transition-transform duration-500`}
                  >
                    Aa
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={
                        tagIndex === 0
                          ? "px-3 py-1 bg-primary-container/20 text-on-primary-container font-label-sm text-label-sm rounded-full"
                          : "px-3 py-1 bg-tertiary-container/20 text-on-tertiary-container font-label-sm text-label-sm rounded-full"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-3">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center text-primary font-label-md text-label-md group-hover:underline underline-offset-4"
                  href={project.href}
                  {...(project.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Read Case Study
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
