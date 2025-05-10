import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const SkillsSection: React.FC = () => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const { setValue } = useFormContext();

  useEffect(() => {
    setValue("skills", skills);
  }, [skills, setValue]);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  } 

  return (
    <div className="my-4 border-b border-gray-300 pb-4">
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
        >
          Add Skill
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {skill}
            <IoClose
              onClick={() => removeSkill(skill)}
              className="cursor-pointer"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
