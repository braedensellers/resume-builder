import React, { useEffect, useState } from "react"
import TextInput from "../inputs/TextInput"
import TextareaInput from "../inputs/TextareaInput"
import { IoClose } from "react-icons/io5"
import { useFormContext } from "react-hook-form"

const BasicInfoSection: React.FC = () => {
  const [linkInput, setLinkInput] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const { setValue } = useFormContext();
  useEffect(() => {
    setValue("links", links);
  }, [links, setValue]);

  const handleAddLink = () => {
    const trimmed = linkInput.trim();
    if (trimmed && !links.includes(trimmed)) {
      setLinks([...links, trimmed]);
      setLinkInput("");
    }
  };
  
  const handleRemoveLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-300 pb-6">
      <TextInput name="fullName" label="Full Name" />
      <TextInput name="email" label="Email" />
      <TextInput name="phone" label="Phone Number" />
      <TextInput name="location" label="Location" />
      <div className="md:col-span-2">
        <TextareaInput name="summary" label="Summary" />
      </div>

      <div className="mt-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">Links (e.g. Linkedin, Portfolio, GitHub, etc.)</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddLink();
              }
            }}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={handleAddLink}
            className="px-3 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
          >
            Add Link
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {links.map((link, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
            >
              {link}
              <IoClose
                onClick={() => handleRemoveLink(index)}
                className="cursor-pointer"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;