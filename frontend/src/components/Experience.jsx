import { useState, useEffect, useRef } from 'react';

// Sub-component that handles the scroll animation for each individual box
function AnimatedWorkItem({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`work-item fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default function Experience() {
    return (
        <section className="experience-tab-content">
          <h1>My Experience</h1>

          <AnimatedWorkItem>
              <h3>ABT Global</h3>
              <p className="work-title">AI Software Engineering Fellow</p>
              <span className="work-dates">August 2026 – Present</span>
              <ul>
                <li>Engineered an Agentic AI pipeline using large language models to automate SAS-to-Python workflow translation, eliminating costly software licensing and improving long-term business efficiency.</li>
                <li>Partnered with other machine learning engineers and data scientists to validate AI outputs and SAS to Python translation codes, ensuring strict data integrity for the CMS hospital rating pipeline.</li>
              </ul>
          </AnimatedWorkItem>

          <AnimatedWorkItem>
              <h3>Handshake AI</h3>
              <p className="work-title">AI Data Annotator</p>
              <span className="work-dates">December 2025 - Present</span>
              <ul>
                <li>Reviewed HTML, CSS, and JavaScript for website, game, and utility generation tasks.</li>
                <li>Trained large AI models by providing high-quality text, image, and multimodal annotations to improve model accuracy.</li>
              </ul>
          </AnimatedWorkItem>

          <AnimatedWorkItem>
              <h3>CodePath Puter</h3>
              <p className="work-title">Software Engineering Fellow</p>
              <span className="work-dates">August 2026 – Present</span>
              <ul>
                <li>Utilized JavaScript, Node.js, React.js, and AI tools to debug and enhance the Puter open-source operating system app, improving performance and functionality across the frontend and backend.</li>
                <li>Collaborated in an open-source team, including senior software engineers, met weekly to share progress, troubleshoot issues, and coordinate feature development to advance the Puter platform.</li>
              </ul>
          </AnimatedWorkItem>
        </section>
    )
}