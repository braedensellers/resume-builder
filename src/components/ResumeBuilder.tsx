import React, { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import BasicInfoSection from "./sections/BasicInfoSection"
import WorkExperienceSection from "./sections/WorkExperienceSection"
import SkillsSection from "./sections/SkillsSection"
import EducationSection from "./sections/EducationSection"
import CertificationsSection from "./sections/CertificationsSection"
import ResumePreview from "./ResumePreview"
import { PDFDownloadLink } from "@react-pdf/renderer"
import ResumeDocument from "./ResumeDocument"

const ResumeBuilder: React.FC = () => {
  const methods = useForm()
  const [showPreview, setShowPreview] = useState(false)
  const [font, setFont] = useState("Arial")

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <FormProvider {...methods}>
        <form>
          <BasicInfoSection />
          <WorkExperienceSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 bg-gray-700 text-white rounded-md cursor-pointer"
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>

            {showPreview && (
              <>
                <select
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  className="border px-2 py-1 rounded cursor-pointer"
                >
                  <option value="Arial">Arial</option>
                  <option value="Calibri">Calibri</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
                <PDFDownloadLink
                  document={<ResumeDocument data={methods.getValues()} fontFamily={font} />}
                  fileName="resume.pdf"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                >
                  {({ loading }) => (loading ? "Preparing PDF..." : "Download as PDF")}
                </PDFDownloadLink>
              </>
            )}
          </div>
        </form>

        {showPreview && (
          <div className="mt-8 border rounded-md overflow-hidden" style={{ height: "90vh" }}>
            <ResumePreview data={methods.getValues()} fontFamily={font} />
          </div>
        )}
      </FormProvider>
    </div>
  )
}

export default ResumeBuilder