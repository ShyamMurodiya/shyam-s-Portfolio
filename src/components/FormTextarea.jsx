import React from "react";

export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  error, // NEW: red border + error message support
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`
          w-full p-3 rounded-xl transition resize-none
          bg-gray-50/60 text-gray-900 border
          placeholder-gray-400 outline-none
          dark:bg-white/10 dark:text-gray-100

          ${error
            ? "border-red-500 focus:ring-red-300 dark:border-red-400"
            : "border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-300"
          }
        `}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
}