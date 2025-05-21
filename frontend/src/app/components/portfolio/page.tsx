"use client";
import { useState } from "react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: "web",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      techStack: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20",
      icon: "🌐",
      hoverShadow: "hover:shadow-cyan-500/20",
      textColor: "text-cyan-400",
      hoverTextColor: "hover:text-cyan-300",
      tagColor: "bg-cyan-500/20 text-cyan-300",
    },
    {
      id: 2,
      category: "ai",
      title: "AI Image Generator",
      description: "Deep learning model for generating artistic images",
      techStack: ["Python", "TensorFlow", "Flask"],
      demoLink: "#",
      githubLink: "#",
      gradient: "bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20",
      icon: "🤖",
      hoverShadow: "hover:shadow-fuchsia-500/20",
      textColor: "text-fuchsia-400",
      hoverTextColor: "hover:text-fuchsia-300",
      tagColor: "bg-fuchsia-500/20 text-fuchsia-300",
    },
    {
      id: 3,
      category: "opensource",
      title: "Open Source CLI",
      description: "Command-line tool for project scaffolding",
      techStack: ["Node.js", "TypeScript", "CLI"],
      demoLink: "#",
      githubLink: "#",
      gradient: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
      icon: "📦",
      hoverShadow: "hover:shadow-purple-500/20",
      textColor: "text-purple-400",
      hoverTextColor: "hover:text-purple-300",
      tagColor: "bg-purple-500/20 text-purple-300",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI Projects" },
    { id: "opensource", label: "Open Source" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 font-serif">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-item ${
                project.category
              } animate__animated animate__fadeInUp ${
                project.id === 2
                  ? "animate__delay-1s"
                  : project.id === 3
                  ? "animate__delay-2s"
                  : ""
              }`}
            >
              <div
                className={`bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg group transition-all duration-300 border border-white/20 ${project.hoverShadow}`}
              >
                <div className={`relative h-48 ${project.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cyan-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${project.tagColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.demoLink}
                      className={`flex items-center ${project.textColor} ${project.hoverTextColor}`}
                    >
                      <span>{project.id === 3 ? "NPM" : "Live Demo"}</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      className={`flex items-center ${project.textColor} ${project.hoverTextColor}`}
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
