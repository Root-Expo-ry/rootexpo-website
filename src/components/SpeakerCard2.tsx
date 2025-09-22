import React from "react";
import { FaLinkedin, FaGlobe } from "react-icons/fa";
// import { Icon } from "astro-icon/components"; // ei toimi jos pelkästään importtaa

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  company?: string; 
  linkedin?: string;
  website?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, image, company, linkedin, website }) => {
  return (
    <div className="bg-container min-h-[650px] sm:min-h-[710px] flex flex-col w-full h-full rounded-lg overflow-hidden shadow-root-card">
      <div className="relative w-full">
        <div className="aspect-square grayscale">
          <img src={image} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="px-4 py-6 space-y-3">
        <h2 className="text-4xl leading-tight">{name}</h2>
        <h5 className="text-accent text-3xl">{title}</h5>

        <div className="flex justify-between items-center pb-2 text-md sm:text-lg">
          {company && (
            <p className="leading-relaxed text-md sm:text-lg font-jetbrains">{company}</p>
          )}
          <div className="flex items-center gap-6 pr-4">
          {
            linkedin && (
              <div className="flex items-center gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white truncate"
            >
              <FaLinkedin className="text-accent flex-shrink-0" size={40} />
            </a>
          </div>
        )
      }
      {
            website && (
              <div className="flex items-center gap-2">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white truncate"
            >
              <FaGlobe className="text-accent flex-shrink-0" size={40} />
            </a>
          </div>
        )
      }
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;
