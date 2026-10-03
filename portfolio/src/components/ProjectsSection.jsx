import { ArrowRight, ExternalLink, Github } from "lucide-react";
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
    images: [portfolio1, portfolio2],
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/mohamedalibahloul/Modern-Personal-Portfolio-",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are my core software engineering and QA automation projects,
          highlighting automated testing, AI workflow automation, and full-stack
          solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between"
            >
              <div>
                {/* IMAGE SLIDER */}
                <div
                  className="h-48 overflow-hidden relative group"
                  onMouseEnter={(e) => {
                    const inner =
                      e.currentTarget.querySelector(".slider-inner");
                    if (!inner) return;

                    const totalImages = Number(inner.dataset.total);
                    const duration = 25000;

                    inner.style.transition = `transform ${duration}ms linear`;
                    inner.style.transform = `translateX(-${totalImages * 100}%)`;
                  }}
                  onMouseLeave={(e) => {
                    const inner =
                      e.currentTarget.querySelector(".slider-inner");
                    if (!inner) return;

                    inner.style.transition = "none";
                    inner.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="slider-inner flex h-full"
                    style={{
                      width: `${(project.images.length + 1) * 100}%`,
                    }}
                    data-total={project.images.length}
                  >
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ))}

                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
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
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
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
    </section>
  );
};
