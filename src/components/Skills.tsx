import Reveal from "@/components/Reveal";
import { backendSkills, toolSkills, webSkills } from "@/data/content";

export default function Skills() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background"
      id="skills"
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
            Technical Arsenal
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Building a versatile foundation across the stack to deliver
            complete solutions.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          <Reveal className="md:col-span-2 bg-secondary-container/30 rounded-card p-8 ambient-shadow flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <span className="material-symbols-outlined text-primary text-[32px]! mr-4">
                web
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Web Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {webSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg ambient-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="bg-primary-container/10 border border-primary-container/20 rounded-card p-8 ambient-shadow flex flex-col justify-center"
          >
            <div className="flex items-center mb-6">
              <span className="material-symbols-outlined text-primary text-[32px]! mr-4">
                dns
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Backend Core
              </h3>
            </div>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
              {backendSkills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="material-symbols-outlined text-primary mr-2 text-[20px]!">
                    check_circle
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={200}
            className="md:col-span-3 bg-tertiary-fixed-dim/20 rounded-card p-8 ambient-shadow flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center w-full md:w-auto">
              <span className="material-symbols-outlined text-tertiary text-[32px]! mr-4">
                build
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Tools &amp; Databases
              </h3>
            </div>
            <div className="flex flex-wrap justify-start md:justify-end gap-3 w-full md:w-auto">
              {toolSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg ambient-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
