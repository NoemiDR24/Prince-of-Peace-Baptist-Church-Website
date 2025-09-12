import "./StorySection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function StorySection ({ header, par1, par2, par3, details=[] , par4, par5, className, image, reverse = false}) {
    return (
        <section className={`story-section ${className || ''}`} id='about-section'>
            <div className='story-wrapper'>
                <div className='story-header'>
                    <p>{header}</p>
                </div>
                <div className={`story-container${reverse ? ' reverse' : ''}`}>              
                    <div className='story-info'>                    
                        <p>{par1}</p>
                        <p>{par2}</p>
                        <p>{par3}</p>
                        <ul>
                            {details.map((detail, index) => (
                                <li key={index}> <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }}/>{detail}</li>
                            ))}
                        </ul>
                        <p>{par4}</p>
                        <p className="story-final">{par5}</p>
                    </div> 
                    <div className="story-img-container">
                        <img className="story-img" src={image}/>
                    </div>
                </div>

            </div>
            
        </section>
    );
}