import { Link } from 'react-router-dom';
import "./CallingSection.css";

export default function CallingSection ({ tagline, introduction, showButton, buttonText, buttonLink}) {
    return (
        <section className='calling-section' id='calling-section'>
                <div className='calling-container'>
                <div className='calling-phrase'>
                    <p>{tagline}</p>
                </div>
                <div className='calling-info'>
                    <p>{introduction}</p>
                    {showButton && (
                        <div className="btn-container-calling">
                        <Link to={buttonLink} className="btn-calling">{buttonText}</Link>
                        </div>
                    )} 
                </div> 
                </div>
        </section>
    );
}