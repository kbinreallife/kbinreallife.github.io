import React from "react";
import ExternalLink from "./ExternalLink";

export default function ContactSection() {
  return (
    <div className="flex flex-col space-y-4">
      <ExternalLink href="https://www.linkedin.com/in/kyle-butcher-67424040">
        LinkedIn
      </ExternalLink>
      <ExternalLink href="https://bsky.app/profile/kbinreallife.bsky.social">
        Bluesky
      </ExternalLink>
      <ExternalLink href="https://discordapp.com/users/233443821940113408">
        Discord
      </ExternalLink>
      <ExternalLink href="https://discord.gg/hackmud">
        hackmud discord
      </ExternalLink>
    </div>
  );
}