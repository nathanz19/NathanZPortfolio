export default function Hero() {
  return (
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
  );
}