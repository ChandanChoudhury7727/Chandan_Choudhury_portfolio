import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Trip Planner",
    description: "Smart trip planner with Gemini AI and Firebase for personalized itineraries and live travel tips.",
    image: "/projects/project1.png",
    tags: ["React", "Firebase", "Gemini AI", "Google Places API"],
    demoUrl: "https://ai-trip-planner-web-tau.vercel.app/",
    githubUrl: "https://github.com/ChandanChoudhury7727/ai-trip-planner-web.git",
  },
  {
    id: 2,
    title: "Data Analytics",
    description:
      "Explored Olist’s e-commerce data with ML-powered visual analytics in Streamlit and Jupyter notebook.",
    image: "/projects/project2.png",
    tags: ["Python", "Streamlit", "Machine Learning"],
    demoUrl: "https://github.com/ChandanChoudhury7727/Data-Analytics-Brazilian-Ecommerce.git",
    githubUrl: "https://github.com/ChandanChoudhury7727/Data-Analytics-Brazilian-Ecommerce.git",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "Turns long URLs into short, trackable links with custom analytics for user engagement insights.",
    image: "/projects/project3.png",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL"],
    demoUrl: "https://github.com/ChandanChoudhury7727/Concisea_-Bitly-Clone-.git",
    githubUrl: "https://github.com/ChandanChoudhury7727/Concisea_-Bitly-Clone-.git",
  },
  {
    id: 4,
    title: "Crowd Funding Web App",
    description:
      "A crowdfunding platform for donations and manage contributions through an admin dashboard.",
    image: "/projects/project4.png",
    tags: ["React", "MongoDB Atlas", "Express.js ", "Tailwind CSS"],
    demoUrl: "https://github.com/ChandanChoudhury7727/CrowdFundingProject-FinalSubmission.git",
    githubUrl: "https://github.com/ChandanChoudhury7727/CrowdFundingProject-FinalSubmission.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ChandanChoudhury7727"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
