'use client'
import { SectionToggleProvider } from '../context/SectionToggleContext';

export default function SectionToggleClientProvider({ children }) {
  return (
    <SectionToggleProvider>
      {children}
    </SectionToggleProvider>
  );
}