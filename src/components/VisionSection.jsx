import "./VisionSection.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function VisionSection ({ header, par1, image, reverse = false, id}) {
    return (
        <section className='vision-section' id={id}>
            <div className='vision-wrapper'>
                <div className='vision-header'>
                    <p>{header}</p>
                </div>
                <div className={`vision-container${reverse ? ' reverse' : ''}`}>              
                    <div className='vision-info'>                    
                        <p>{par1}</p>
                    </div> 
                    <div className="vision-img-container">
                        <img className="vision-img" src={image}/>
                    </div>
                </div>
            </div>  
        </section>
    );
}