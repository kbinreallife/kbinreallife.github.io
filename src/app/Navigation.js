import React from "react";

export default function Navigation({ sections, openSection, onToggle }) {
  return (
    <nav className="mt-8">
      <ul className="flex space-x-4 justify-center">
        {sections.map(({ key, label }) => (
          <li key={key}>
            <button
              type="button"
              className="text-blue-500 hover:underline nav-btn"
              aria-expanded={openSection === key}
              onClick={onToggle(key)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}