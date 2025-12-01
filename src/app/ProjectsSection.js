import React from "react";
import ExternalLink from "./ExternalLink";

export default function ProjectsSection() {
  return (
    <div className="space-y-2">
      <ExternalLink href="/architecture-diagram">
        Hackmud Upgrade System Architecture (Interactive Diagram)
      </ExternalLink>
      <ExternalLink href="https://skillsoft.digitalbadges.skillsoft.com/profile/kylebutcher440290/wallet#gs.9wuh1h">
        My Badges and Certificates
      </ExternalLink>
      <ExternalLink href="https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate">
        Boilerplate project to make websites like this one
      </ExternalLink>
      <ExternalLink href="https://github.com/kbinreallife/kbinreallife-Github_Activity_Visualizer">
        A Github Organization Activity Visualizer
      </ExternalLink>
      <ExternalLink href="https://comcode.org">
        The Organization I Work For
      </ExternalLink>
    </div>
  );
}