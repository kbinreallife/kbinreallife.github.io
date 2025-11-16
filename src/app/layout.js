import React from "react";
import "./globals.css";
import SectionToggleClientProvider from "./SectionToggleClientProvider";

export const metadata = {
  title: "kb in real life",
  description: "what is this, a website for ants?",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SectionToggleClientProvider>
          {children}
        </SectionToggleClientProvider>
      </body>
    </html>
  );
}
