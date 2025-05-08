import React from "react";
import DatePicker from "react-datepicker";
import { useFormContext, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerInputProps {
  name: string;
  label: string;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            {...field}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            showMonthYearPicker
            dateFormat="MM/yyyy"
            className="h-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
            popperPlacement="bottom-start"
            calendarClassName="react-datepicker-calendar"
            popperClassName="react-datepicker-popper"
          />
        )}
      />
      {errors[name] && (
        <span className="text-sm text-red-500">{`${errors[name]?.message}`}</span>
      )}
    </div>
  );
};

export default DatePickerInput;
