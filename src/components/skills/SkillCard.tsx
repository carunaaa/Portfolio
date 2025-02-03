import React from "react";

interface SkillCardProps {
  skillName: string;
  level: number;
  isDarkMode: boolean;
  imageUrl: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skillName,
  level,
  isDarkMode,
  imageUrl,
}) => {
  return (
    <div
      className={`p-6 bg-white rounded-lg shadow-lg text-center ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="w-full h-24 sm:h-40 lg:h-24 mb-4">
        <img
          src={imageUrl}
          alt={skillName}
          className="w-full h-full object-contain mx-auto" 
        />
      </div>
      <h3
        className={`text-xl font-semibold ${
          isDarkMode ? "text-gray-800" : "text-gray-800"
        }`}
      >
        {skillName}
      </h3>
      <div className="mt-2">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-full bg-indigo-500 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
