'use client';
import React from "react";
import { useSectionToggle } from '../context/SectionToggleContext';
import Section from "./Section";
import Navigation from "./Navigation";
import { sections } from "./sectionsConfig";

export default function Home() {
  const { openSection, toggleSection } = useSectionToggle();

  const handleClickBtn = (section) => (event) => {
    event.stopPropagation();
    toggleSection(section);
  };

  const activeSection = sections.find(s => s.key === openSection);

  return (
    <div className="min-h-screen place-items-center dark:bg-grey-100">
      <div className="max-w-md mx-auto py-8 px-4 text-center">
        {/* Header */}
        <header>
          <h1 className="header-title">kb</h1>
          <p className="header-subtitle">Software Engineer</p>
        </header>

        {/* Blurb */}
        <section>
          <p className="text-lg text-gray-600">
            i come from space for your nachos
          </p>
        </section>

        <Navigation
          sections={sections}
          openSection={openSection}
          onToggle={handleClickBtn}
        />

        <div className="mt-8">
          {activeSection && (
            <Section title={activeSection.title}>
              <activeSection.Component />
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
