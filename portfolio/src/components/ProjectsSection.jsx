import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import portfolio1 from "@/assets/projects/portfolio1.JPG";
import portfolio2 from "@/assets/projects/portfolio2.JPG";
import quiz1 from "@/assets/projects/quiz1.png";
import quiz2 from "@/assets/projects/quiz2.png";
import quiz3 from "@/assets/projects/quiz3.png";
import docteur1 from "@/assets/projects/docteur1.JPG";
import docteur2 from "@/assets/projects/docteur2.JPG";
import docteur3 from "@/assets/projects/docteur3.JPG";
import docteur4 from "@/assets/projects/docteur4.JPG";
import docteur5 from "@/assets/projects/docteur5.JPG";
import generateur1 from "@/assets/projects/generateur1.JPG";
import generateur2 from "@/assets/projects/generateur2.JPG";
import generateur3 from "@/assets/projects/generateur3.JPG";
import generateur4 from "@/assets/projects/generateur4.JPG";
import translater from "@/assets/projects/translater.JPG";

const projects = [
  {
    id: 1,
    title: "SaaS E-Health QA Automation Platform",
    description:
      "End-to-end multi-layer automated testing ecosystem (Web, Mobile, API) featuring GitHub Actions CI/CD, n8n AI report workflows, and a Flask/Docker server.",
    fullDescription:
      "Designed and implemented a comprehensive multi-tier QA automation strategy for a SaaS e-health platform. Covered frontend (Playwright), mobile (Appium), and API (Supertest) test suites mapped to RBAC, tenant isolation, and authentication workflows. Integrated AI-powered reporting pipelines with n8n and Groq API to convert execution logs into human-readable bug reports, alongside a Flask/Docker server for automated HTML report distribution.",
    images: [translater],
    tags: [
      "Playwright",
      "Pytest",
      "Appium",
      "Supertest",
      "n8n",
      "Groq AI",
      "Docker",
      "React",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/qa_pura",
  },
  {
    id: 2,
    title: "QA Vision – AI-Powered QA Insights Dashboard",
    description:
      "Interactive QA dashboard that parses test outputs (Playwright, Pytest, Jest) into visual charts and uses AI to generate failure root-cause analysis and fix suggestions.",
    fullDescription:
      "QA Vision turns raw test logs and CLI outputs into actionable engineering metrics. Converts Playwright, Jest, and Pytest outputs into interactive charts (Pass/Fail ratios, suite durations, category breakdowns), leveraging AI to parse error stacks and DOM locators for instant root-cause bug explanations.",
    images: [translater],
    tags: ["React", "AI Integration", "Playwright", "Jest", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul",
  },
  {
    id: 3,
    title: "Universal Translator App",
    description:
      "AI-powered web application that automates JSON i18n file translation and project management workflows.",
    fullDescription:
      "A software engineering web application built with Angular and Symfony 7 that automates JSON i18n file translations using AI translation APIs, speeding up localization delivery across multi-language projects.",
    images: [translater],
    tags: ["Angular", "Symfony 7", "PostgreSQL", "AI API"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/universal-translator-app",
  },
  {
    id: 4,
    title: "Doctor Appointment Booking System",
    description:
      "Full MERN stack medical booking platform with role-based features for patients, doctors, and administrators including online payments.",
    fullDescription:
      "Full-stack medical platform featuring centralized appointment management, dynamic schedules for doctors, patient portal, online payment integration, and administrator system metrics.",
    images: [docteur1, docteur2, docteur3, docteur4, docteur5],
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/mohamedalibahloul/Doctor-Appointment-Booking-System-",
  },
  {
    id: 5,
    title: "AI Text-To-Image Generator",
    description:
      "SaaS AI app generating high-quality images from text prompts using the ClipDrop API with user auth and secure storage.",
    fullDescription:
      "Full-stack SaaS application built with React and Node.js that interfaces with the ClipDrop API to generate custom images in real time based on user text prompts.",
    images: [generateur1, generateur2, generateur3, generateur4],
    tags: ["React", "Node.js", "Express", "ClipDrop AI", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/Text-To-Image-Generateur",
  },
  {
    id: 6,
    title: "Flutter Quiz App",
    description:
      "Interactive cross-platform mobile quiz app with custom animations and dynamic score tracking.",
    fullDescription:
      "Mobile quiz application engineered in Flutter and Dart, featuring customized screen animations, dynamic scoring, and smooth state management.",
    images: [quiz1, quiz2, quiz3],
    tags: ["Flutter", "Dart", "Mobile Animations"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/flutter-quiz-app",
  },
  {
    id: 7,
    title: "Modern Personal Portfolio",
    description:
      "Responsive developer portfolio showcasing projects, interactive skill visualizations, and contact integrations.",
    fullDescription:
      "Modern portfolio site created with React, Tailwind CSS, and Framer Motion to showcase software engineering experience, automated testing suites, and personal projects.",
    images: [portfolio1, portfolio2],
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/mohamedalibahloul/Modern-Personal-Portfolio-",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my core software engineering and QA automation projects.
          Click on any project card to view detailed specifications and
          screenshots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div>
                {/* IMAGE PREVIEW */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
                    Click to inspect
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* FOOTER LINKS */}
              <div className="p-6 pt-0 flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <span className="text-xs text-primary font-medium">
                  View Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mohamedalibahloul"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-card border border-border rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* TITLE & TAGS */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 pr-10">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE GALLERY SLIDER */}
            <div className="relative rounded-lg overflow-hidden bg-black/40 h-64 md:h-80 flex items-center justify-center group">
              <img
                src={selectedProject.images[activeImageIndex]}
                alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />

              {/* CONTROLS */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 p-2 rounded-full bg-black/50 text-white hover:bg-primary transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* INDICATORS */}
                  <div className="absolute bottom-3 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          activeImageIndex === idx
                            ? "w-6 bg-primary"
                            : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground">
                Overview & Architecture
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
            </div>

            {/* ACTION LINKS */}
            <div className="pt-4 border-t border-border flex flex-wrap gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="cosmic-button flex items-center gap-2 text-sm"
              >
                <Github size={18} /> View Repository
              </a>
              {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
