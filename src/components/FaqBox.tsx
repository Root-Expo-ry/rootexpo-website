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
      className="mb-4 cursor-pointer rounded-md border border-white bg-background p-4 shadow-sm 
                 transition-all duration-50 active:scale-[0.98] hover:border-accent"
    >
      <div className="flex justify-between items-center text-white">
        <h3 className='font-semibold text-lg mt-2 -ml-0.5 pl-3'>{question}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] mt-7 mb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-start ml-3">
          <span>▶︎</span>
          <div className="text-white text-lg space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}