import React from "react";

const skills = [
  { name: "Photoshop", level: "90%" },
  { name: "HTML5", level: "85%" },
  { name: "Wordpress", level: "60%" },
  { name: "jQuery", level: "75%" },
  { name: "CSS3", level: "80%" },
  { name: "PHP", level: "68%" },
];

const SkillsSection = () => {
  return (
    <section className=" text-white py-6">
      <div className="max-w-screen-2xl mx-auto md:px-[140px] px-4 text-center">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-medium">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-[10px]">
                <div
                  className="bg-blue-500 h-[10px] rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
