import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export const sections = [
  {
    key: "about",
    label: "About",
    title: "About Me",
    Component: AboutSection,
  },
  {
    key: "projects",
    label: "Projects",
    title: "Projects and Skills",
    Component: ProjectsSection,
  },
  {
    key: "contact",
    label: "Contact",
    title: "Contact",
    Component: ContactSection,
  },
];