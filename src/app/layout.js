import { Inter } from "next/font/google";
import "./globals.css";
import SectionToggleClientProvider from "./SectionToggleClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kb in real life",
  description: "what is this, a website for ants?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionToggleClientProvider>
          {children}
        </SectionToggleClientProvider>
      </body>
    </html>
  );
}
