import Slideshow from './EducationSlideshow';

export default function Education() {
    return (
        <section className="education-tab-content">
            <h1>My Education</h1>
            <div className="education-header">
                <div className="education-info">
                    <h3>Stony Brook University</h3>
                    <p className="org">Bachelor's Degree, Computer Science, Applied Mathematics & Statistics</p>
                    <p className="dates">2024-2028</p>
                    
                    <div className="education-details">
                        <p className="edu-heading">Leadership:</p>
                        <p className="edu-leadership">Starter of my Team on SBU Basketball Intramurals: 2026 - Current</p>
                        <p className="edu-leadership">Secretary of International Student Organization: 2025 - Current</p>
                        <p className="edu-leadership">Stony Brook University Tour Guide: 2024 - Current</p>
                        <p className="edu-heading">Awards:</p>
                        <p className="edu-leadership">Dean's List: Fall: '24, '25, Spring: '25, '26</p>
                        <p className="edu-heading">Coursework:</p>
                        <p className="edu-leadership">Data Structure & Algorithms, Software Development, Systems Fundamental, Data Science, Data Analysis, Linear Algebra, Calculus, Discrete Mathematics</p>
                    </div>
                </div>
                
                <div className="education-logo-container">
                    <img src="/src/images/Stony_Brook_University_seal.svg" alt="Stony Brook University Logo" className="school-logo" />
                </div>
            </div>
            <p className="edu-heading">Favorite Highlights:</p>
            <Slideshow />
        </section>
    );
}