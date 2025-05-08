import { useFieldArray, useFormContext } from "react-hook-form";
import { BiPlusCircle } from "react-icons/bi";
import WorkExperienceFields from "../inputs/WorkExperienceFields";

const WorkExperienceSection: React.FC = () => {
  const { control, watch, setValue } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workExperience',
  });

  const handleAddExperience = () => {
    append({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false,
      location: '',
      bulletPoints: [''],
    });
  };

  return (
    <section className="mt-8 border-b border-gray-300 pb-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

      {fields.map((field, index) => (
        <WorkExperienceFields
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
          onAddBullet={() => {
            const currentBullets = watch(`workExperience.${index}.bulletPoints`) || [];
            setValue(`workExperience.${index}.bulletPoints`, [...currentBullets, '']);
          }}
          onRemoveBullet={(bIndex) => {
            const currentBullets = watch(`workExperience.${index}.bulletPoints`);
            const updated = currentBullets.filter((_: string, i: number) => i !== bIndex);
            setValue(`workExperience.${index}.bulletPoints`, updated);
          }}
          onMoveBullet={(from, to) => {
            const bullets = watch(`workExperience.${index}.bulletPoints`);
            if (to < 0 || to >= bullets.length) return;
            const updated = [...bullets];
            const [moved] = updated.splice(from, 1);
            updated.splice(to, 0, moved);
            setValue(`workExperience.${index}.bulletPoints`, updated);
          }}
        />
      ))}

      <button
        type="button"
        onClick={handleAddExperience}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-blue-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/10 cursor-pointer h-10 px-4 py-2"
      >
        <BiPlusCircle className="mr-1" />
        Add Work Experience
      </button>
    </section>
  );
};

export default WorkExperienceSection;