import { useFormContext } from "react-hook-form";
import TextInput from "../inputs/TextInput";
import { FiTrash2 } from "react-icons/fi";

interface CertificationFieldsProps {
    index: number;
    onRemove: () => void;
}

const CertificationFields: React.FC<CertificationFieldsProps> = ({
    index,
    onRemove,
}) => {
    const { register } = useFormContext();

    return (
        <div className="border border-gray-300 rounded-lg p-4 space-y-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                    label="Certification Title"
                    {...register(`certifications.${index}.title`)}
                />
                <TextInput
                    label="Description"
                    {...register(`certifications.${index}.description`)}
                />
            </div>

            <div className="text-right">
                <button
                    type="button"
                    onClick={onRemove}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-red-600 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-red-600/10 cursor-pointer h-10 px-4 py-2"
                >
                    <FiTrash2 className="inline mr-1" />
                    Remove Certification
                </button>
            </div>
        </div>
    );
};

export default CertificationFields;
