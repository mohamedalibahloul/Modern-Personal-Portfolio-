import { ExternalLink, Award } from "lucide-react";
import ccnaImg from "@/assets/CCNAITN.png";
import IBM from "@/assets/IBM.jpeg";
import awsCloudLea from "@/assets/awsCloudLea.png";
import CCNASRWE1 from "@/assets/CCNASRWE1.png";
import ciscoIA from "@/assets/ciscoIA.png";
import devopsE from "@/assets/devopsE.png";
import kuner from "@/assets/kuner.png";
import microsoftazure from "@/assets/microsoftazure.png";
import oracle from "@/assets/oracle.png";
const certifications = [
  {
    id: 1,
    title: "CCNA: Introduction to Networks",
    issuer: "CISCO NETWORKING ACADEMY",
    image: ccnaImg,
    link: "https://www.credly.com/badges/8eb2639b-837e-4344-9476-ae6c0c3b239d",
  },
  {
    id: 2,
    title: "Developing Front-End Apps",
    issuer: "Meta / Coursera",
    image: IBM,
    link: "https://www.coursera.org/account/accomplishments/verify/0UDE0WSPG0QT",
  },
  {
    id: 3,
    title: "Cloud Foundations",
    issuer: "AWS ACADEMY",
    image: awsCloudLea,
    link: "https://www.credly.com/earner/earned/badge/956b5263-353d-4e25-89f8-acd1e6387b44",
  },
  {
    id: 4,
    title: "CCNA: SWITCHING,ROUTING & WIRELESS ESSENTIALS",
    issuer: "CISCO NETWORKING ACADEMY",
    image: CCNASRWE1,
    link: "https://www.credly.com/earner/earned/badge/8c5be49f-362c-4751-99c7-630a4e322dce",
  },
  {
    id: 5,
    title: "INTRODUCTION TO MODERN AI",
    issuer: "CISCO NETWORKING ACADEMY",
    image: ciscoIA,
    link: "https://www.credly.com/earner/earned/badge/53ffe171-11c8-47f9-9de5-c126e3d754cb",
  },
  {
    id: 6,
    title: "DevOps ESSENTIALS",
    issuer: "Google Cloud",
    image: devopsE,
  },
  {
    id: 7,
    title: "MANAGE KUBERNETES IN GOOGLE CLOUD",
    issuer: "Google Cloud",
    image: kuner,
    link: "https://www.credly.com/earner/earned/badge/dd2e0d36-fda8-467b-9f9c-cc6cfe13d4d4",
  },
  {
    id: 8,
    title: "Azure Fundamentals",
    issuer: "Microsoft Certified",
    image: microsoftazure,
    link: "https://www.credly.com/earner/earned/badge/0a4abf3e-564b-45b8-972f-138e0dbf57a3",
  },
  {
    id: 9,
    title: "Oracle Cloud Infrastructure AI",
    issuer: "Oracle",
    image: oracle,
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3F43F9AA981032BDA612A9B9D273BA78BE807DC06631D0FDB0C792C5A72818F1",
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
