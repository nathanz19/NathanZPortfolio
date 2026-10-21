import Slideshow from './EducationSlideshow';

export default function About() {
    return (
        <section className="about-tab-content">
            <h1>About Me</h1>
            
            <div className="about-header">
                <div className="about-info">
                    {/* Intro Paragraphs */}
                    <p className="about-description">
                        As a double major in Computer Science and Applied Mathematics, I am passionate about applying statistical methods and technological solutions to solve real-world business problems. I have experience working with software systems and datasets, and I hope to contribute these skills to the teams I work with. 
                        My passion for programming began in elementary school, when I was first introduced to Tynker and Scratch. Since then, my interest has continued to grow, from taking introductory programming courses in high school to studying advanced software development in college.
                        What I love most about programming is the opportunity to use my creativity and collaborate with others to build innovative solutions that can make a meaningful difference in people's lives. 
                       
                    </p>
                    <p className="about-description">
                        Outside of programming, I enjoy staying active through various sports and physical activities, including weightlifting and basketball. I have been playing basketball since I was 10 years old, starting on my middle school basketball team and continuing to play in college intramurals.
                        I also enjoy spending time outdoors, whether it's hiking, going on walks, or sightseeing. I especially love exploring New York City, visiting museums, and discovering famous landmarks.
                        Beyond these hobbies, I love meeting new people, building meaningful connections, and expanding my network. I always look forward to learning from others, hearing different perspectives, and growing through new experiences. 
                    </p>

                    <div className="about-details">
                        {/* Skills Section */}
                        <p className="about-heading">Technical Skills:</p>
                        <p className="about-item"><strong>Languages:</strong> Python, Java, C, JavaScript, HTML, CSS, MIPS Assembly</p>
                        <p className="about-item"><strong>Libraries/Frameworks:</strong> React, Node.js, Express.js, REST APIs, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, TensorFlow</p>
                        <p className="about-item"><strong>Tools & Platforms:</strong> Git, GitHub, MongoDB, Adobe, Google Workspace, Microsoft Office</p>

                        {/* Certifications Section */}
                        <p className="about-heading">Certifications:</p>
                        <p className="about-item">Cornell University: Machine Learning Foundations</p>
                        <p className="about-item">CodePath: Data Structures, Algorithms, and Interview Prep</p>
                        <p className="about-item">SANS Institute: GIAC Foundations of Cybersecurity</p>

                        {/* Affiliations Section */}
                        <p className="about-heading">Affiliations & Leadership:</p>
                        <p className="about-item">Admissions Tour Guide, International Student Organization Secretary, Break Through Tech</p>
                    </div>
                </div>
            </div>

            {/* Slideshow
            <p className="about-heading slideshow-heading">Favorite Highlights:</p>
            <Slideshow /> */}
        </section>
    );
}