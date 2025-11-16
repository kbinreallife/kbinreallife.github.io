import React from "react";

export default function Section({ title, children }) {
  return (
    <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-900">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}