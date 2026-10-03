import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // QA & Test Automation
  { name: "Playwright", level: 90, category: "qa" },
  { name: "Selenium", level: 85, category: "qa" },
  { name: "Appium", level: 80, category: "qa" },
  { name: "Pytest", level: 85, category: "qa" },
  { name: "Supertest", level: 85, category: "qa" },
  { name: "Jest", level: 80, category: "qa" },
  { name: "Cucumber (BDD)", level: 85, category: "qa" },
  { name: "n8n Workflow Automation", level: 90, category: "qa" },

  // Languages
  { name: "JavaScript (ES6+)", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "PHP", level: 75, category: "languages" },
  { name: "C#", level: 70, category: "languages" },

  // Frameworks & Development
  { name: "React.js", level: 85, category: "development" },
  { name: "Angular", level: 80, category: "development" },
  { name: "Node.js", level: 80, category: "development" },
  { name: "Express.js", level: 80, category: "development" },
  { name: "Symfony 7", level: 75, category: "development" },
  { name: ".NET Core", level: 70, category: "development" },

  // Databases & Cloud
  { name: "MySQL", level: 80, category: "databases & cloud" },
  { name: "PostgreSQL", level: 80, category: "databases & cloud" },
  { name: "MongoDB", level: 75, category: "databases & cloud" },
  { name: "AWS", level: 75, category: "databases & cloud" },
  { name: "Google Cloud", level: 70, category: "databases & cloud" },
  { name: "Azure", level: 70, category: "databases & cloud" },
  { name: "Oracle Cloud", level: 65, category: "databases & cloud" },

  // Tools & DevOps
  { name: "Git & GitHub", level: 90, category: "tools & devops" },
  { name: "GitHub Actions (CI/CD)", level: 85, category: "tools & devops" },
  { name: "Docker", level: 80, category: "tools & devops" },
  { name: "VS Code / Visual Studio", level: 90, category: "tools & devops" },
];

const categories = [
  "all",
  "qa",
  "languages",
  "development",
  "databases & cloud",
  "tools & devops",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
