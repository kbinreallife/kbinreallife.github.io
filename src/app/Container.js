import React from "react";

export default function Container({ children }) {
  return (
    <div className="max-w-md mx-auto py-8 px-4 text-center">
      {children}
    </div>
  );
}