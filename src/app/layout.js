import { Inter } from "next/font/google";
import "./globals.css";
import { SectionToggleProvider } from "../context/SectionToggleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kb in real life",
  description: "what is this, a website for ants?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionToggleProvider>
          {children}
        </SectionToggleProvider>
      </body>
    </html>
  );
}
