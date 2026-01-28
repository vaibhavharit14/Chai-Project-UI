import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

function SocialLinks() {
  const socialClass = "p-3 rounded-full border border-chai-brown/20 text-chai-brown hover:bg-chai-brown hover:text-chai-gold hover:border-chai-brown transition-all duration-300";

  return (
    <div className="flex gap-4">
      <a href="/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
        <Instagram className="w-5 h-5" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Twitter">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook">
        <Facebook className="w-5 h-5" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  );
}

export default SocialLinks;