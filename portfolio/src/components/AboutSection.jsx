import { CheckCircle2, Cpu, Code2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              QA Automation Engineer & Full-Stack Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I hold a National Engineering Diploma in Computer Engineering from
              E.P.I Sousse. I specialize in designing end-to-end automated
              testing strategies across Web, Mobile, and API applications using
              Playwright, Pytest, Appium, Selenium, and Supertest.
            </p>

            <p className="text-muted-foreground">
              With a strong background in software engineering, I combine
              full-stack development with DevOps, CI/CD automation pipelines,
              and AI-powered test reporting (n8n, Groq API, Ollama) to deliver
              highly resilient software and optimize delivery workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* Download CV Button */}
              <a
                href="/QaAutomationcv.pdf"
                download="QaAutomationcv.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    QA & Test Automation
                  </h4>
                  <p className="text-muted-foreground">
                    End-to-end testing across Web, Mobile, & APIs using
                    Playwright, Selenium, Appium, Pytest, & Supertest.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    CI/CD & AI-Powered QA
                  </h4>
                  <p className="text-muted-foreground">
                    Integrating automated quality checks into GitHub Actions
                    pipelines with n8n and AI log analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Developing scalable backend and frontend solutions using
                    React, Node.js, Angular, Symfony, and .NET[cite: 1].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
