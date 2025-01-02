import React, { useState } from "react";
import ramroImage from '../../assets/ramro1.png';
import ramroImage1 from '../../assets/ramro2.png';
import ramroImage2 from '../../assets/ramro3.png';
import ramroImage3 from '../../assets/ramro4.png';
import o1dd1 from '../../assets/o1dd1.png';
import o1dd2 from '../../assets/o1dd2.png';
import o1dd3 from '../../assets/o1dd3.jpg';
import o1dd4 from '../../assets/o1dd4.jpg';
import o1dd5 from '../../assets/o1dd5.jpg';
import o1dd6 from '../../assets/o1dd6.jpg';

interface Project {
  name: string;
  description: string;
  link: string;
  images: string[]; 
}

const Projects: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: "RamroDesigns",
      description:
        "A React web app built for user interactivity and dynamic content.",
      link: "https://ramrodesigns.com/beta/",
      images: [ramroImage, ramroImage1, ramroImage2, ramroImage3], 
    },
    {
      name: "Only 1Dollar Design Website",
      description:
        "A UI/UX redesign of an existing application with modern standards.",
      link: "https://only1dollardesign.com/",
      images: [o1dd1, o1dd2],
    },
    {
      name: "Only 1Dollar Design Mobile App",
      description:
        "An E-commerce platform built with a focus on seamless user experience.",
      link: "https://apps.apple.com/sb/app/only1dollardesign/id6478212180",
      images: [o1dd5,o1dd3, o1dd4,o1dd6],
    },
    {
      name: "GoldSage",
      description:
        "An E-commerce platform built with a focus on seamless user experience.",
      link: "https://example.com",
      images: ["https://via.placeholder.com/600x400", "https://via.placeholder.com/600x400"],
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
                } group-hover:text-gray-600`}
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
            className={`bg-white p-8 rounded-lg shadow-lg w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 max-w-4xl transform transition-all duration-300 ease-in-out scale-95 group-hover:scale-100 overflow-auto ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()} 
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
              aria-label="Close modal"
            >
              &times;
            </button>

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
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto">
              {selectedProject?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedProject?.name} image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              ))}
            </div>

            <a
              href={selectedProject?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-all duration-300"
            >
              Visit Site
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
