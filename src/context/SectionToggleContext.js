import React, { createContext, useState, useContext } from "react";

const SectionToggleContext = createContext();

export function SectionToggleProvider({ children }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <SectionToggleContext.Provider value={{ openSection, toggleSection }}>
      {children}
    </SectionToggleContext.Provider>
  );
}

export function useSectionToggle() {
  return useContext(SectionToggleContext);
}