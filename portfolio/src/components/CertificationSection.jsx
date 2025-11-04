import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "DevOps Essentials",
    issuer: "Google Cloud Skill Boost",
    image: "/certs/devops.png", // add image in public/certs/
    link: "https://www.skills.google/course_templates/717",
  },
  {
    id: 2,
    title: "Developing Front-End Apps",
    issuer: "Meta / Coursera",
    image: "/certs/frontend.png",
    link: "https://www.coursera.org/account/accomplishments/verify/0UDE0WSPG0QT",
  },
  {
    id: 3,
    title: "Credly Certified Courses",
    issuer: "Credly",
    image: "/certs/credly.png",
    link: "https://www.credly.com/users/mohamed-bahloul.6a811f56",
  },
  {
    id: 4,
    title: "LinkedIn Learning Certifications",
    issuer: "LinkedIn",
    image: "/certs/linkedin.png",
    link: "https://www.linkedin.com/in/mohamed-ali-bahloul-0843b2262/details/certifications/",
  },
];

export const CertificationSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Certifications <span className="text-primary"> & Badges</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my verified certifications across cloud, DevOps,
          front-end, and software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center bg-secondary/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground mb-2 inline-block">
                  {cert.issuer}
                </span>

                <h3 className="text-lg font-semibold mt-1">{cert.title}</h3>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                  >
                    View Credential <ExternalLink size={16} />
                  </a>
                  <Award className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.credly.com/users/mohamed-bahloul.6a811f56"
          >
            View All Certifications <Award size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
