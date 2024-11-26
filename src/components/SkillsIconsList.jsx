import React from 'react';

const SkillIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 m-2 rounded-lg hover:scale-110 transition-transform duration-300 group">
      <img 
        src={icon} 
        alt={name} 
        className="w-20 h-20 object-contain mb-2 group-hover:rotate-12 transition-transform"
      />
      <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </span>
    </div>
  );
};

const SkillsIconsList = ({ technologies }) => {
  return (
    <div className="flex flex-wrap justify-center items-center p-4 rounded-4xl">
      {technologies.map((technology, index) => (
        <SkillIcon 
          key={technology.name} 
          icon={technology.icon} 
          name={technology.name} 
        />
      ))}
    </div>
  );
};

export default SkillsIconsList;