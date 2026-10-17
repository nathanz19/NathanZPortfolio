import './style/App.css';
import './style/Hero.css';
import './style/PortfolioSection.css';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <div className="portfolio-container">
      <Hero />
      <hr className="section-divider" />
      <div className="my-portfolio-text">My Portfolio</div>
      <PortfolioSection />
    </div>
  );
}

export default App;