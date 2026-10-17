import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalLines = 7; // The number of lines to display in your sidebar

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Map the percentage to a specific line index
      const index = Math.min(
        Math.floor(scrollPercentage * totalLines),
        totalLines - 1
      );
      
      // Ensure index is at least 0 (prevents NaN errors on load)
      setActiveIndex(Math.max(0, index));
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate destination and scroll smoothly
  const scrollToSection = (index) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    // Treat the first line (index 0) as the very top, and the last line as the very bottom
    const targetScroll = (index / (totalLines - 1)) * maxScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="page-scroll-indicator">
      {Array.from({ length: totalLines }).map((_, index) => (
        <div
          key={index}
          className={`scroll-line ${index === activeIndex ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
}