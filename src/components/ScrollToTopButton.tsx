import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-24 right-8 w-16 h-16 text-[1.2rem]
        bg-background text-white border-2 border-white rounded-full
        cursor-pointer z-[1000]
        transition-opacity duration-300 ease-in-out
        hover:border-accent hover:text-accent focus:outline-none touch-manipulation active:border-accent active:text-accent focus:border-white focus:text-white
        ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}
    >
      <div className="flex flex-col items-center leading-none">
        <span className="text-[1rem] mt-2">▲</span>
        <h3 className="text-[1rem] mt-1.5">Top</h3>
      </div>
    </button>
  );
}

// ▲ ↑ ⬆