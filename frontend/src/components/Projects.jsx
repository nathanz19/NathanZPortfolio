import { useState, useEffect, useRef } from 'react';

// Sub-component that handles the scroll animation for each individual box
function AnimatedProjectItem({ children }) {
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
      className={`project-item fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default function Projects() {
    return (
        <section className="projects-tab-content">
          <h1>My Projects</h1>

          <AnimatedProjectItem>
              <h3>AI Powered SAS Migration</h3>
              <p className="project-tech">Agentic AI, Tensorflow, Hugging Face, Python, JavaScript</p>
              <span className="project-dates">October 2026 | <a href="https://github.com/Break-Through-Tech/Abt-Global-1F-ai-powered-sas-migration" target="_blank" rel="noreferrer">GitHub</a></span>
              <ul>
                <li>Architected a multi-LLM agentic pipeline (utilizing Gemini, Claude, Qwen, Kimi, and DeepSeek) featuring dedicated instruction, translation, correction, validation, and documentation agents to automate the SAS-to-Python codebase migration.</li>
                <li>Developed a full-stack graphical interface using React, Node.js, and Express.js to streamline SAS program uploads, establishing Abt Global’s foundational automated translation capability to replace manual legacy workflows.</li>
              </ul>
          </AnimatedProjectItem>

          <AnimatedProjectItem>
              <h3>Car Price Predictor</h3>
              <p className="project-tech">Python, Flask, Docker, Scikit-Learn, Pandas, NumPy</p>
              <span className="project-dates">August 2026 | <a href="https://github.com/nathanz19/car-price-predictor" target="_blank" rel="noreferrer">GitHub</a></span>
              <ul>
                <li>Architected and deployed a web application using Flask and Docker, implementing a responsive JavaScript and CSS frontend to deliver instant, interactive vehicle estimations.</li>
                <li>Engineered a Random Forest machine learning pipeline using Scikit-Learn and Pandas, training on 15,000+ data points to calculate market pricing bounds and median estimates for unseen listings.</li>
              </ul>
          </AnimatedProjectItem>

          <AnimatedProjectItem>
              <h3>Census Income Predictor</h3>
              <p className="project-tech">Python, Scikit-Learn, Pandas, Neural Networks</p>
              <span className="project-dates">June 2026 | <a href="https://github.com/nathanz19/census-income-predictor-1994" target="_blank" rel="noreferrer">GitHub</a></span>
              <ul>
                <li>Developed a machine learning classification pipeline using Python and Pandas to clean, preprocess, and engineer features from the demographic data in the 1994 Adult Census dataset.</li>
                <li>Trained and evaluated predictive models, such as KNN, Logistic Regression, Decision Trees, and Neural Networks, and used Scikit-Learn to accurately classify income brackets, optimizing model parameters to uncover socio-economic trends.</li>
              </ul>
          </AnimatedProjectItem>
        </section>
    )
}