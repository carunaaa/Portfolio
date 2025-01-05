import React from "react";
import SkillCard from "./SkillCard";
import htmlLogo from "../../assets/html-5.png"; 
import css from "../../assets/css.png"; 
import js from "../../assets/javascript.png"; 
import ts from "../../assets/typescript.png"; 
import tailwind from "../../assets/tailwind.png"; 
import react from "../../assets/react.png"; 
import flutter from "../../assets/flutter.png"; 
import bootstrap from "../../assets/bootstrap.png"; 
import illustrator from "../../assets/illustrator.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import python from "../../assets/python.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";


const Skills: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } py-16`}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
        Skills
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 max-w-7xl">
        {/* Skill Cards */}
        <SkillCard
          skillName="HTML"
          level={95}
          isDarkMode={isDarkMode}
          imageUrl={htmlLogo}
        />
        <SkillCard
          skillName="CSS"
          level={90}
          isDarkMode={isDarkMode}
          imageUrl={css}
        />
         <SkillCard
          skillName="JavaScript"
          level={80}
          isDarkMode={isDarkMode}
          imageUrl={js}
        />
         <SkillCard
          skillName="TypeScript"
          level={70}
          isDarkMode={isDarkMode}
          imageUrl={ts}
        />
        <SkillCard
          skillName="Tailwind"
          level={90}
          isDarkMode={isDarkMode}
          imageUrl={tailwind}
        />
         <SkillCard
          skillName="Bootstrap"
          level={90}
          isDarkMode={isDarkMode}
          imageUrl={bootstrap}
        />
         <SkillCard
          skillName="React"
          level={75}
          isDarkMode={isDarkMode}
          imageUrl={react}
        />
         <SkillCard
          skillName="Flutter"
          level={70}
          isDarkMode={isDarkMode}
          imageUrl={flutter}
        />
        <SkillCard
          skillName="Illustrator"
          level={70}
          isDarkMode={isDarkMode}
          imageUrl={illustrator}
        />
          <SkillCard
          skillName="Figma"
          level={70}
          isDarkMode={isDarkMode}
          imageUrl={figma}
        />
          <SkillCard
          skillName="Git"
          level={68}
          isDarkMode={isDarkMode}
          imageUrl={git}
        />
         <SkillCard
          skillName="Python"
          level={55}
          isDarkMode={isDarkMode}
          imageUrl={python}
        />
        <SkillCard
          skillName="MongoDB"
          level={90}
          isDarkMode={isDarkMode}
          imageUrl={mongodb}
        />
        <SkillCard
          skillName="MySql"
          level={85}
          isDarkMode={isDarkMode}
          imageUrl={mysql}
        />
      </div>
    </div>
  );
};

export default Skills;
