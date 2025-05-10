import { useFormContext, useWatch } from "react-hook-form"
import TextInput from "../inputs/TextInput"
import TextareaInput from "../inputs/TextareaInput"
import DatePickerInput from "../inputs/DatePickerInput"
import { FiArrowDown, FiArrowUp, FiTrash2 } from "react-icons/fi"
import { BiPlusCircle } from "react-icons/bi"

interface WorkExperienceFieldsProps {
  index: number;
  onRemove: () => void;
  onAddBullet: () => void;
  onRemoveBullet: (bulletIndex: number) => void;
  onMoveBullet: (from: number, to: number) => void;
}

const WorkExperienceFields: React.FC<WorkExperienceFieldsProps> = ({
  index,
  onRemove,
  onAddBullet,
  onRemoveBullet,
  onMoveBullet,
}) => {
  const { register, watch, control } = useFormContext();
  const bullets = watch(`workExperience.${index}.bulletPoints`) || [];

  const currentlyWorking = useWatch({
    control,
    name: `workExperience.${index}.currentlyWorking`,
  });

  return (
    <div className="border border-gray-300 rounded-lg p-4 space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Company Name"
          {...register(`workExperience.${index}.company`)}
        />
        <TextInput
          label="Role Title"
          {...register(`workExperience.${index}.role`)}
        />
        <DatePickerInput
          name={`workExperience.${index}.startDate`}
          label="Start Date"
        />

        {!currentlyWorking && (
          <DatePickerInput
            name={`workExperience.${index}.endDate`}
            label="End Date"
          />
        )}
        <div className="md:col-start-2 flex items-center gap-2 mt-[-0.5rem]">
            <input
                id={`current-${index}`}
                type="checkbox"
                {...register(`workExperience.${index}.currentlyWorking`)}
                className="w-4 h-4"
            />
            <label htmlFor={`current-${index}`} className="text-sm">
                I currently work here
            </label>
        </div>
        <TextInput
            label="Location"
            {...register(`workExperience.${index}.location`)}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Bullet Points</h3>
        {bullets.map((_: string, bIndex: number) => (
            <div key={bIndex} className="flex items-center gap-4 mb-2">
                <div className="flex-1">
                    <TextareaInput
                        {...register(
                            `workExperience.${index}.bulletPoints.${bIndex}`
                        )}
                        label=""
                    />
                </div>
                <button
                    type="button"
                    onClick={() => onMoveBullet(bIndex, bIndex - 1)}
                    disabled={bIndex === 0}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-black/10 cursor-pointer h-10 w-10"
                >
                    <FiArrowUp />
                </button>
                <button
                    type="button"
                    onClick={() => onMoveBullet(bIndex, bIndex + 1)}
                    disabled={bIndex === bullets.length - 1}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg text-black font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-black/10 cursor-pointer h-10 w-10"
                >
                    <FiArrowDown />
                </button>
                <button
                    type="button"
                    onClick={() => onRemoveBullet(bIndex)}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-red-500 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 hover:bg-red-500/10 cursor-pointer h-10 w-10"
                    title="Remove bullet"
                >
                    <FiTrash2 size={18} />
                </button>
          </div>
        ))}
        <button
          type="button"
          onClick={onAddBullet}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-blue-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/10 cursor-pointer h-10 px-4 py-2"
        >
          <BiPlusCircle className="inline mr-1" />
          Add Bullet Point
        </button>
      </div>

      <div className="text-right">
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-red-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-600/10 cursor-pointer h-10 px-4 py-2"
        >
          <FiTrash2 className="inline mr-1" />
          Remove Work Experience
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceFields;
