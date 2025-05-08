import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import EducationFields from "../inputs/EducationFields";
import { BiPlusCircle } from "react-icons/bi";

const EducationSection: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const handleAddEducation = () => {
    append({
        institutionName: "",
        degree: "",
        startDate: "",
        endDate: "",
        gpa: "",
    });
  };

  return (
    <section className="mt-8 border-b border-gray-300 pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {fields.map((field, index) => (
            <EducationFields 
                key={field.id}
                index={index}
                onRemove={() => remove(index)}
            />
        ))}
        <button
            type="button"
            onClick={handleAddEducation}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-blue-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/10 cursor-pointer h-10 px-4 py-2"
        >
            <BiPlusCircle className="mr-1" />
            Add Education
        </button>
    </section>
  );
};

export default EducationSection;
