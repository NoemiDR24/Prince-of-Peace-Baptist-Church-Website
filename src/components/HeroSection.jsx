import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection ({ header, description, backgroundImage, showButton, buttonText, buttonLink}) {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-container">
        <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})`}}> 
          <div className="hero-info">
            <h1 className="hero-header">{header}</h1>
            <div className="hero-description">
              <p className="description">{description}</p>
              {showButton && (
                <div className="btn-container">
                  <Link to={buttonLink} className="btn">{buttonText}</Link>
                </div>
              )} 
            </div> 
          </div>  
        </div>
      </div>
    </section>
  );
}

