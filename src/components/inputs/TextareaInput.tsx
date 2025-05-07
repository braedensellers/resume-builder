import React from "react";
import { useFormContext } from "react-hook-form";

interface TextareaInputProps {
  name: string;
  label: string;
  className?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ name, label, className }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-1 text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...register(name)}
        id={name}
        rows={3}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[name] && (
        <span className="text-sm text-red-500">{`${errors[name]?.message}`}</span>
      )}
    </div>
  );
};

export default TextareaInput;