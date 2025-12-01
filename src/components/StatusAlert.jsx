import React from "react";

export default function StatusAlert({ type = "info", children }) {
  const baseClasses =
    "mb-4 p-3 rounded-xl text-sm flex items-center gap-2 animate-fade-slide transition";

  const variants = {
    success:
      "bg-green-50/90 text-green-800 dark:bg-green-900/30 dark:text-green-200 border-l-4 border-green-500",
    error:
      "bg-red-50/90 text-red-800 dark:bg-red-900/30 dark:text-red-200 border-l-4 border-red-500",
    info:
      "bg-gray-50/90 text-gray-800 dark:bg-white/10 dark:text-gray-200 border-l-4 border-gray-400",
  };

  const icons = {
    success: (
      <span className="text-lg font-bold text-green-600 dark:text-green-300">
        ✓
      </span>
    ),
    error: (
      <span className="text-lg font-bold text-red-600 dark:text-red-300">
        ✖
      </span>
    ),
    info: (
      <span className="text-lg font-bold text-gray-600 dark:text-gray-300">
        •
      </span>
    ),
  };

  return (
    <div className={`${baseClasses} ${variants[type]}`}>
      {icons[type] || icons.info}
      <span>{children}</span>
    </div>
  );
}