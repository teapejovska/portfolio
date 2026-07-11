export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  coverBg: string;
  coverFg: string;
  motif: "waveform" | "typography";
};

export const projects: Project[] = [
  {
    title: "Macedonian TTS Evaluation | Vezilka AI",
    description:
      "Played a key role in evaluating and refining text-to-speech AI models for the Macedonian language, ensuring natural prosody and accurate pronunciation.",
    tags: ["AI Evaluation", "Python"],
    href: "https://vezilka.ai/",
    coverBg: "bg-primary-container",
    coverFg: "text-on-primary-container",
    motif: "waveform",
  },
  {
    title: "Dyslexia Accessibility Project",
    description:
      "A dedicated initiative focusing on improving digital accessibility and user comprehension for individuals with dyslexia through specialized typography and layout tools.",
    tags: ["Accessibility", "React"],
    href: "#",
    coverBg: "bg-secondary",
    coverFg: "text-on-secondary",
    motif: "typography",
  },
];

export const webSkills: string[] = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Responsive Design",
];

export const backendSkills: string[] = ["Java & Spring Boot", ".NET Framework", "Python"];

export const toolSkills: string[] = [
  "Git & GitHub",
  "SQL (PostgreSQL/MySQL)",
  "Figma",
  "RESTful APIs",
];

export const coursework: string[] = [
  "Software Engineering",
  "Data Structures",
  "Algorithms",
  "Web Design",
];

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const resumeHref = "/resume.pdf";

export const socialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tea-pejovska-06088a35b/" },
  { label: "GitHub", href: "https://github.com/teapejovska/" },
  { label: "Resume", href: resumeHref },
];

export const email = "teapejovskaa1@gmail.com";
