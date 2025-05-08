import { useFormContext, useWatch } from "react-hook-form";
import TextInput from "../inputs/TextInput";
import DatePickerInput from "../inputs/DatePickerInput";
import { FiTrash2 } from "react-icons/fi";

interface EducationFieldsProps {
    index: number;
    onRemove: () => void;
}

const EducationFields: React.FC<EducationFieldsProps> = ({
    index,
    onRemove,
}) => {
    const { register, control } = useFormContext();

    const currentlyAttending = useWatch({
        control,
        name: `education.${index}.currentlyAttending`,
    });

    return (
        <div className="border border-gray-300 rounded-lg p-4 space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    label="Institution Name"
                    {...register(`education.${index}.institution`)}
                />
                <TextInput
                    label="Degree/Certification"
                    {...register(`education.${index}.degree`)}
                />
                <DatePickerInput
                    name={`education.${index}.startDate`}
                    label="Start Date"
                />

                {!currentlyAttending && (
                    <DatePickerInput
                        name={`education.${index}.endDate`}
                        label="End Date"
                    />
                )}
                <div className="md:col-start-2 flex items-center gap-2 mt-[-0.5rem]">
                    <input
                        id={`current-${index}`}
                        type="checkbox"
                        {...register(`education.${index}.currentlyAttending`)}
                        className="w-4 h-4"
                    />
                    <label htmlFor={`current-${index}`} className="text-sm">
                        I currently attend here
                    </label>
                </div>
                <TextInput
                    label="GPA"
                    {...register(`education.${index}.gpa`)}
                />
            </div>

            <div className="text-right">
                <button
                    type="button"
                    onClick={onRemove}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-red-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-600/10 cursor-pointer h-10 px-4 py-2"
                >
                    <FiTrash2 className="inline mr-1" />
                    Remove Education
                </button>
            </div>
        </div>
    );
};

export default EducationFields;
