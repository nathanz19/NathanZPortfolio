import { useState, useEffect, useRef } from 'react';

import './style/App.css';
import './style/Hero.css';
import './style/PortfolioSection.css';
import './style/Education.css';
import './style/Scroll.css';
import './style/EducationSlideshow.css';
import './style/Experience.css';
import './style/Projects.css';
import './style/AboutMe.css';
import './style/ContactModal.css';

import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ScrollIndicator from './components/ScrollIndicator'; 

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); 
      },
      { 
        threshold: 0.20, 
        rootMargin: "0px 0px -50px 0px" 
      } 
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  

  return (
    <div className="portfolio-container">
      <ScrollIndicator />
      <Hero />
      
      {/* The ref watches this specific container to trigger the animation */}
      <div ref={portfolioRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <hr className="section-divider" />
        <div className="my-portfolio-text">My Portfolio</div>
        <PortfolioSection />
      </div>

      <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Nathan Zheng. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;