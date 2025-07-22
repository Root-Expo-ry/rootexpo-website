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
      style={{
        position: 'fixed',
        bottom: '6rem',
        right: '2rem',
        width: '4rem',
        height: '4rem',
        fontSize: '1.2rem',
        backgroundColor: '#202020',   // soft magenta
        color: '#D96CEC',
        border: '2px solid #D96CEC',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.2s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      }}
      aria-label="Scroll to top"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
        <span style={{ fontSize: '1rem' }}>↑</span>
        <span style={{ fontSize: '1rem', marginTop: '2px' }}>Top</span>
      </div>
    </button>
  );
}