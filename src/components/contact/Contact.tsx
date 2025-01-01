import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl font-light mb-8">
          I'd love to hear from you! Feel free to reach out via email or connect
          on social media.
        </p>

        {/* Social Links */}
        <div className="space-x-6 flex justify-center items-center mb-8">
          <a
            href="mailto:your.email@example.com"
            className="text-white text-lg font-medium  py-2 px-4 rounded-lg"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-medium  py-2 px-4 rounded-lg"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-medium  py-2 px-4 rounded-lg"
          >
            GitHub
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} Karuna. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
