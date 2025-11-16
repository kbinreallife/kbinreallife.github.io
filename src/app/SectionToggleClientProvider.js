'use client';
import React from "react";
import { SectionToggleProvider } from '../context/SectionToggleContext';

export default function SectionToggleClientProvider({ children }) {
  return (
    <SectionToggleProvider>
      {children}
    </SectionToggleProvider>
  );
}