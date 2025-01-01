import React, { useState } from "react";

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

const Projects: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: "Project One",
      description:
        "A React web app built for user interactivity and dynamic content.",
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      name: "Project Two",
      description:
        "A Node.js API with RESTful services and JWT authentication.",
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      name: "Project Three",
      description:
        "A UI/UX redesign of an existing application with modern standards.",
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
    {
      name: "Project Four",
      description:
        "An E-commerce platform built with a focus on seamless user experience.",
      link: "https://example.com",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      className={`py-16 ${
        isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-700" : "bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
      }`}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Projects
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative border p-6 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
            } hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
            onClick={() => openModal(project)}
            role="button"
            aria-label={`View details for ${project.name}`}
          >
            <div className="mb-4">
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } group-hover:text-indigo-600`}
              >
                {project.name}
              </h3>
              <p
                className={`text-lg mt-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                } group-hover:text-gray-300`}
              >
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
              aria-label={`Visit ${project.name} site`}
            >
              View Project
            </a>
            <div
              className={`absolute inset-0 bg-indigo-200 opacity-0 group-hover:opacity-25 rounded-xl transition-all duration-300 ${
                isDarkMode ? "bg-indigo-700" : "bg-indigo-200"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-all duration-300"
          onClick={closeModal} 
          aria-hidden="true"
        >
          <div
            className={`bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full h-full md:h-auto transform transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 overflow-auto ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()} 
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
          >
            <h3
              id="modalTitle"
              className="text-3xl font-semibold mb-4"
            >
              {selectedProject?.name}
            </h3>
            <p
              id="modalDescription"
              className="text-lg mb-4"
            >
              {selectedProject?.description}
            </p>

            {/* Image Section */}
            <div className="mb-6">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.name}
                className="w-full h-auto rounded-lg shadow-xl mb-6"
              />
            </div>

            <a
              href={selectedProject?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Visit Site
            </a>

            <button
              onClick={closeModal}
              className="mt-4 text-red-600 hover:text-red-800 font-medium transition-all duration-300"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
