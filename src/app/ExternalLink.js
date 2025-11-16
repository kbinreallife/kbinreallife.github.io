import React from "react";

export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      className="link-external"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-link">{children}</div>
    </a>
  );
}