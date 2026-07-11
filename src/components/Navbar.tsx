"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, resumeHref } from "@/data/content";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();

    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm transition-transform duration-200 pt-[env(safe-area-inset-top)]"
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-[1280px] mx-auto">
        <a
          className="text-headline-md font-headline-md text-primary tracking-tight"
          href="#"
        >
          TEA PEJOVSKA
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.href === activeHref ? (
              <a
                key={link.href}
                className="font-label-md text-label-md text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full hover:opacity-80 transition-opacity"
                href={link.href}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary hover:opacity-80 transition-colors transition-opacity"
                href={link.href}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          href={resumeHref}
          download
        >
          Download CV
        </a>
        <button
          ref={toggleButtonRef}
          type="button"
          className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-full bg-surface border-t border-outline-variant rounded-b-card ambient-shadow px-margin-mobile py-6 flex flex-col gap-1"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center min-h-[44px] px-3 rounded-lg font-label-md text-label-md transition-colors ${
                link.href === activeHref
                  ? "text-primary bg-primary-container/10"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center min-h-[44px] bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
