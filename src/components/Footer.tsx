import { email, socialLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-secondary-container rounded-t-xl mt-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto transition-all duration-300 ease-in-out">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-headline-md font-headline-md text-on-secondary-container mb-4">
            TEA PEJOVSKA
          </div>
          <p className="font-body-md text-body-md text-on-secondary-container max-w-[24rem]">
            © {new Date().getFullYear()} Tea Pejovska. Built with focus on
            accessibility and user experience.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...(link.label === "Resume" ? { download: true } : {})}
            >
              {link.label}
            </a>
          ))}
          <span className="font-body-md text-body-md text-on-secondary-container">
            {email}
          </span>
        </div>
      </div>
    </footer>
  );
}
