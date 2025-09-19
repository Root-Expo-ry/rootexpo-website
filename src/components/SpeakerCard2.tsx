import React from "react";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
  company?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, title, image, company }) => {
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

        <div className="space-y-2 pb-4 text-md sm:text-lg">
          {company && (
            <p className="leading-relaxed text-md sm:text-lg font-jetbrains">{company}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SpeakerCard;