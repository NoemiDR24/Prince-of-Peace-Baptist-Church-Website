import './Card.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";

export default function Card ({image, header, description, link}){
    return(
        <>
        <div className='card'>
            <div className='img-container'>
            <img src={image} alt={header} className='img'/>
            </div>
            <div className='card-info'>
            <h2 className='card-info-header'>{header}</h2>
            <p>{description}</p>
            <Link to={link} >Ver más <FontAwesomeIcon icon={faSquareArrowUpRight} /></Link>                
            </div> 
        </div> 
        </>  
    );
}