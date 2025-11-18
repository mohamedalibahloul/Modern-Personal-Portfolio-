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

translater.JPG;
const projects = [
  {
    id: 1,
    title: "Modern Personal Portfolio",
    description:
      "A modern portfolio website built with animations, responsive UI and smooth UX.",
    images: [portfolio1, portfolio2],
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/mohamedalibahloul/Modern-Personal-Portfolio-",
  },
  {
    id: 2,
    title: "Flutter Quiz App",
    description:
      "An interactive quiz application built with Flutter, featuring animations & scoring.",
    images: [quiz1, quiz2, quiz3],
    tags: ["Flutter", "Dart", "Animations"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/flutter-quiz-app",
  },
  {
    id: 3,
    title: "Doctor Appointment Booking System",
    description:
      "Full MERN stack appointment booking platform with roles for admin, doctor & patients.",
    images: [docteur1, docteur2, docteur3, docteur4, docteur5], // replace with real images later
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/mohamedalibahloul/Doctor-Appointment-Booking-System-",
  },
  {
    id: 4,
    title: "Text-To-Image Generator",
    description:
      "AI SaaS app that generates images from text prompts using ClipDrop API.",
    images: [generateur1, generateur2, generateur3, generateur4], // replace with real images later
    tags: ["MERN", "AI", "ClipDrop"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/Text-To-Image-Generateur",
  },
  {
    id: 5,
    title: "Universal Translator App",
    description:
      "AI-powered app that translates JSON i18n files automatically.",
    images: [translater], // replace with real images later
    tags: ["Angular", "Symfony", "PostgreSQL", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/mohamedalibahloul/universal-translator-app",
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
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* IMAGE SLIDER */}
              <div
                className="h-48 overflow-hidden relative group"
                onMouseEnter={(e) => {
                  const inner = e.currentTarget.querySelector(".slider-inner");

                  const totalImages = Number(inner.dataset.total);

                  // CONSTANT SPEED (super smooth)
                  const duration = 25000; // 12 seconds total, change as you like

                  inner.style.transition = `transform ${duration}ms linear`;
                  inner.style.transform = `translateX(-${totalImages * 100}%)`;
                }}
                onMouseLeave={(e) => {
                  const inner = e.currentTarget.querySelector(".slider-inner");

                  inner.style.transition = "none";
                  inner.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="slider-inner flex h-full"
                  style={{
                    width: `${(project.images.length + 1) * 100}%`, // duplicate makes loop seamless
                  }}
                  data-total={project.images.length}
                >
                  {/* All images */}
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  ))}

                  {/* Duplicate first image */}
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
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
            href="https://github.com/mohamedalibahloul"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
