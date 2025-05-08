import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import BasicInfoSection from "./sections/BasicInfoSection"
import WorkExperienceSection from "./sections/WorkExperienceSection"
import SkillsSection from "./sections/SkillsSection"
import EducationSection from "./sections/EducationSection"
import CertificationsSection from "./sections/CertificationsSection"
import ResumePreview from "./ResumePreview"

const ResumeBuilder: React.FC = () => {
  const methods = useForm();
  const [showPreview, setShowPreview] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const watchedData = methods.watch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-4 space-y-4">

        <BasicInfoSection />
        <WorkExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
        </div>
      </form>

      {showPreview && (
        <div className="mt-8 border rounded-md overflow-hidden" style={{ height: "90vh" }}>
          <ResumePreview data={methods.getValues()} />
        </div>
      )}
    </FormProvider>
  );
};

export default ResumeBuilder;