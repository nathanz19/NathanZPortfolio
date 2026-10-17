import { useState } from 'react';
import Education from './Education'
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="vertical-tab-layout">
      {/* Sidebar: Navigation List */}
      <nav className="tab-sidebar">
        <button 
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </nav>

      {/* Content Panel: Displaying depending on which tab is active */}
      <main className="tab-content">
        {activeTab === 'education' && (
            <Education />
        )}
        {activeTab === 'experience' && (
            <Experience />
        )}

        {activeTab === 'projects' && (
            <Projects />
        )}

        {activeTab === 'skills' && (
            <Skills />
        )}
      </main>
    </div>
  );
}