import { useState, useEffect } from 'react';

export default function Hero() {
  // 1. State to track if the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // 2. Listen to the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll down more than 50 pixels, hide the button
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when leaving the page
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Nathan Zheng</h1>
          <h3 className="role">AI and Software Engineering Student</h3>
          <p className="status">Junior at Stony Brook University</p>
          <p className="description">
              I am passionate about working with like-minded individuals who share my interest in software development and AI systems. 
              What excites me most is the opportunity to build software that not only benefits clients but also makes a positive impact on people's lives. 
              Helping others has always been one of my core values, and I hope to apply my technical skills while collaborating with others to develop meaningful 
              solutions that make a real difference.
          </p>
          <div className="social-button-flex">
              <a href="https://www.linkedin.com/in/nathanzh/" className="linkedin-btn" >LinkedIn</a>
              <a href="https://github.com/nathanz19" className="github-btn">GitHub</a>
              <button className="contact-btn">Contact Me</button>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img className="profile-circle" src="src/images/1720920278642.jpeg" alt="Nathan Zheng" />
        </div>
      </section>

      {/* 3. Conditionally add the 'hidden' class based on our scroll state */}
      <div 
        className={`scroll-prompt ${isScrolled ? 'hidden' : ''}`} 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <p>Learn More About Me</p>
        <span className="down-arrow">&#8595;</span>
      </div>
    </>
  );
}