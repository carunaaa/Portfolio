import React from "react";
import bg from "../../assets/IMG_0308.png";

interface AboutProps {
  isDarkMode: boolean; 
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section
      className={`h-screen flex flex-col sm:flex-row justify-center items-center text-center px-6 py-16 mt-14
        ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
            : "bg-gradient-to-r from-indigo-500 to-purple-600"
        }`}
    >
      {/* Text Section */}
      <div className="text-content w-full sm:w-1/2 mb-8 sm:mb-0 text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide leading-tight">
          Hi! I'm Karuna
        </h2>
        <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto opacity-90">
          Web Developer | Problem Solver | UI/UX
        </p>
        <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto text-opacity-80">
          Currently learning Python for Data Science.
        </p>

        <a
          href="../../assets/CV - KARUNA.pdf"
          download
          className="inline-block mt-6 px-8 py-2 bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Download CV
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
        <img
          src={bg}
          alt="Karuna"
          className="w-[30rem] sm:w-[20rem] md:w-[35rem] h-auto object-cover rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
        />
      </div>
    </section>
  );
};

export default About;
