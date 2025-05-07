import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import BasicInfoSection from "./sections/BasicInfoSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";

const ResumeBuilder: React.FC = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-4">
        <BasicInfoSection />
        <WorkExperienceSection />
        <button type="submit" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default ResumeBuilder;