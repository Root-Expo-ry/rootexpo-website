import { useState } from 'react';

interface Props {
  image?: string;
  name: string;
  title: string;
  className?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  text?: string;
  children: React.ReactNode;
}
export default function CardTemplate({ image, name, title, className, children }: Props) {

    return (
        <div className={`speaker-card relative bg-container rounded-lg overflow-hidden w-[300px] md:w-auto lg:w-auto flex-shrink-0 ${className}`}>
            <img 
                src={image} 
                alt={name} 
                className="w-[300px] h-[300px] md:w-[390px] md:h-[390px] lg:w-[390px] lg:h-[390px] display object-cover mx-auto mb-4 shadow-md scale-100 filter grayscale"
            />
            <div className="p-10 -mt-3">
                <h2>
                    {name}
                </h2>
                <h5 className="text-accent">
                    {title}
                </h5>
            </div>
            <div>{children}</div>
        </div>
        
    )
}