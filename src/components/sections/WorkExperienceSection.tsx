import { useFieldArray, useFormContext } from "react-hook-form";
import TextInput from "../inputs/TextInput";
import TextareaInput from "../inputs/TextAreaInput";
import { FiArrowDown, FiArrowUp, FiTrash2 } from "react-icons/fi";
import { BiPlusCircle } from "react-icons/bi";

const WorkExperienceSection: React.FC = () => {
  const { control, register, watch, setValue } = useFormContext();

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

  const handleAddBullet = (index: number) => {
    const currentBullets = watch(`workExperience.${index}.bulletPoints`) || [];
    setValue(`workExperience.${index}.bulletPoints`, [...currentBullets, '']);
  };

  const handleRemoveBullet = (expIndex: number, bulletIndex: number) => {
    const currentBullets = watch(`workExperience.${expIndex}.bulletPoints`);
    const newBullets = currentBullets.filter((_: string, i: number) => i !== bulletIndex);
    setValue(`workExperience.${expIndex}.bulletPoints`, newBullets);
  };

  const moveBullet = (expIndex: number, from: number, to: number) => {
    const bullets = watch(`workExperience.${expIndex}.bulletPoints`);
    if (to < 0 || to >= bullets.length) return;

    const updated = [...bullets];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setValue(`workExperience.${expIndex}.bulletPoints`, updated);
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

      {fields.map((field, index) => {
        const bullets = watch(`workExperience.${index}.bulletPoints`) || [];

        return (
          <div
            key={field.id}
            className="border border-gray-300 rounded-lg p-4 space-y-4 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput
                label="Company Name"
                {...register(`workExperience.${index}.company`)}
              />
              <TextInput
                label="Role Title"
                {...register(`workExperience.${index}.role`)}
              />
              <TextInput
                label="Start Date"
                type="month"
                {...register(`workExperience.${index}.startDate`)}
              />
              <TextInput
                label="End Date"
                type="month"
                disabled={watch(`workExperience.${index}.currentlyWorking`)}
                {...register(`workExperience.${index}.endDate`)}
              />
              <TextInput
                label="Location"
                {...register(`workExperience.${index}.location`)}
              />
              <div className="flex items-center gap-2 mt-2">
                <input
                  id={`current-${index}`}
                  type="checkbox"
                  {...register(`workExperience.${index}.currentlyWorking`)}
                />
                <label htmlFor={`current-${index}`} className="text-sm">
                  I currently work here
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Bullet Points</h3>
              {bullets.map((_: string, bIndex: number) => (
                <div key={bIndex} className="flex items-center gap-4 mb-2">
                  <div className="flex-1">
                    <TextareaInput
                      {...register(`workExperience.${index}.bulletPoints.${bIndex}`)}
                      name={`workExpereience.${index}.bulletPoints.${bIndex}`}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => moveBullet(index, bIndex, bIndex - 1)}
                    disabled={bIndex === 0}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-gray-300/10 cursor-pointer h-10 w-10"
                  >
                    <FiArrowUp />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveBullet(index, bIndex, bIndex + 1)}
                    disabled={bIndex === bullets.length - 1}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-gray-300/10 cursor-pointer h-10 w-10"
                  >
                    <FiArrowDown />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveBullet(index, bIndex)}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-red-500 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-red-500/10 cursor-pointer h-10 w-10"
                    title="Remove bullet"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => handleAddBullet(index)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-blue-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/10 cursor-pointer h-10 px-4 py-2"
              >
                <BiPlusCircle className="mr-1" />
                Add Bullet Point
              </button>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-black/10 cursor-pointer h-10 px-4 py-2"
              >
                <FiTrash2 className="mr-1" />
                Remove Work Experience
              </button>
            </div>
          </div>
        );
      })}

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