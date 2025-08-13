import { span } from 'framer-motion/client';
import { useState } from 'react';

interface Props {
  question: string;
  children: React.ReactNode;
}

export default function FaqBox({ question, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);


  // Jos kirjottaa paljon tekstiä vastauskenttään, muokkaa: max-h-[500px] -> lisäämällä pikseleitä


  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="w-full mb-8 cursor-pointer rounded-md border border-background bg-container p-4 
                 transition-all duration-50 active:scale-[0.98] hover:border-accent shadow-root-card"
    >
      <div className="flex justify-between items-center text-white">
        <h3 className='font-semibold text-lg mt-2 -ml-0.5 pl-3'>{question}</h3>
        <span className='text-4xl mr-3'>
          {isOpen ? '−' : '+'}
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] mt-7 mb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-start">
          <div className="text-white text-lg space-y-2 font-montserrat">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ▲ ▼ — ▶︎