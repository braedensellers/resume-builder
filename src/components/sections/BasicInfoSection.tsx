import React from "react";
import TextInput from "../inputs/TextInput";
import TextareaInput from "../inputs/TextareaInput";

const BasicInfoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-300 pb-6">
      <TextInput name="fullName" label="Full Name" />
      <TextInput name="email" label="Email" />
      <TextInput name="phone" label="Phone Number" />
      <TextInput name="location" label="Location" />
      <div className="md:col-span-2">
        <TextareaInput name="summary" label="Summary" />
      </div>
    </div>
  );
};

export default BasicInfoSection;