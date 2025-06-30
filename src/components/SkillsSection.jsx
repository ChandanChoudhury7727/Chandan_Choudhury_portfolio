import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaBrain,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const skills = [
  {
  name: "Java",
  icon: (
    <div className="flex items-center gap-2">
      <img
        src="/projects/infosys_springboard_logo.png"
        alt="AI: Transformative Learning"
        className="w-[80px] h-[40px]"
      />
      <a
        href="https://drive.google.com/file/d/1BF53wNmeFkq4rxu8RJ3mDSAcCote32C7/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 p-1 rounded-full hover:bg-primary/20 transition"
        title="View Certificate"
      >
        <FiExternalLink className="w-5 h-5 text-primary" />
      </a>
    </div>
  ),
  category: "certifications",
},
//{ name: "Java", icon: <FaJava size={30} />, category: "all" },


  // Frontend
  { name: "HTML/CSS", icon: <FaHtml5 size={30} />, category: "frontend" },
  { name: "JavaScript", icon: <FaJsSquare size={30} />, category: "frontend" },
  { name: "React", icon: <FaReact size={30} />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={30} />, category: "frontend" },

  // Backend
  // { name: "Node.js", icon: <FaNodeJs size={30} />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb size={30} />, category: "backend" },
  { name: "MySQL", icon: <SiMysql size={30} />, category: "backend" },


  // Tools
  { name: "Git/GitHub", icon: <FaGitAlt size={30} />, category: "tools" },
  { name: "Docker", icon: <FaDocker size={30} />, category: "tools" },
  { name: "VS Code", icon: <img src="/projects/vscode.png" alt="VS Code" className="w-[30px] h-[30px]" />, category: "tools" },
  
  // Certifications
  //{ name: "MERN", icon: <img src="public\projects\MERN-logo.png" alt="VS Code" className="w-[80px] h-[30px]" />, category: "certifications" },
  {
  name: "MERN",
  icon: (
    <div className="flex items-center gap-2">
      <img
        src="/projects/Edunet-Foundation-logo.png"
        alt="MERN Certificate"
        className="w-[70px] h-[30px]"
      />
      <a
        href="https://drive.google.com/file/d/1OWR6S_CuJYNsQL2VrlHuyqnSXIUXkwhb/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 p-1 rounded-full hover:bg-primary/20 transition"
        title="View Certificate"
      >
        <FiExternalLink className="w-5 h-5 text-primary" />
      </a>
    </div>
  ),
  category: "certifications",
},
{
  name: "Web Dev",
  icon: (
    <div className="flex items-center gap-2">
      <img
        src="/projects/Udemy.png"
        alt="Web Dev Certificate"
        className="w-[30px] h-[30px]"
      />
      <a
        href="https://drive.google.com/file/d/1Q1DSHNWhER-FQ8ZH_nI5Y2HXqZyLZaa6/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 p-1 rounded-full hover:bg-primary/20 transition"
        title="View Certificate"
      >
        <FiExternalLink className="w-5 h-5 text-primary" />
      </a>
    </div>
  ),
  category: "certifications",
},
{
  name: "AI",
  icon: (
    <div className="flex items-center gap-2">
      <img
        src="/projects/Edunet-Foundation-logo.png"
        alt="AI: Transformative Learning"
        className="w-[70px] h-[30px]"
      />
      <a
        href="https://drive.google.com/file/d/1tYlh7U6-9syfHbcvDSDrXbxIeCTCvhSI/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 p-1 rounded-full hover:bg-primary/20 transition"
        title="View Certificate"
      >
        <FiExternalLink className="w-5 h-5 text-primary" />
      </a>
    </div>
  ),
  category: "certifications",
},
 { name: "ML Fundamuntals", icon: <FaBrain size={30} />, category: "all" },



];

const categories = ["all", "frontend", "backend", "tools", "certifications"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center gap-2">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: "100%" }}
                />
              </div>
              {/* Removed percentage display */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
