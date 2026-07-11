import Reveal from "@/components/Reveal";
import { coursework } from "@/data/content";

export default function Education() {
  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="education"
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-6">
            Education &amp; Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Currently pursuing a degree in Computer Science at FINKI (Ss.
            Cyril and Methodius University). My academic journey has been
            driven by a passion for understanding the core principles of
            software engineering while exploring creative frontend
            solutions.
          </p>
        </Reveal>
        <Reveal delay={200} className="max-w-3xl mx-auto space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div className="w-0.5 h-full bg-outline-variant mt-4"></div>
            </div>
            <div className="pb-6 text-left">
              <h4 className="font-headline-md text-headline-md text-on-background">
                FINKI
              </h4>
              <p className="font-label-md text-label-md text-primary mb-2">
                Computer Science &amp; Engineering
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Focusing on solid architectural patterns, algorithms, and
                modern web technologies.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
            </div>
            <div className="text-left">
              <h4 className="font-headline-md text-headline-md text-on-background">
                Key Coursework
              </h4>
              <div className="flex flex-wrap gap-2 mt-3">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-md"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
