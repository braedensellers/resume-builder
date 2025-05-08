import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import CertificationFields from "../inputs/CertificationFields";
import { BiPlusCircle } from "react-icons/bi";

const CertificationsSection: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  const handleAddCertification = () => {
    append({
        title: "",
        description: "",
    });
  };

  return (
    <section className="mt-8 border-b border-gray-300 pb-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Certification</h2>
        {fields.map((field, index) => (
            <CertificationFields 
                key={field.id}
                index={index}
                onRemove={() => remove(index)}
            />
        ))}
        <button
            type="button"
            onClick={handleAddCertification}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-blue-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/10 cursor-pointer h-10 px-4 py-2"
        >
            <BiPlusCircle className="mr-1" />
            Add Certification
        </button>
    </section>
  );
};

export default CertificationsSection;
