import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import './Home.css';
import CallingSection from '../components/CallingSection.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faClock} from "@fortawesome/free-solid-svg-icons";
import { useScrollToHash } from '../hooks/Scroll.jsx';

export default function Home () {
  useScrollToHash(); 
  return (
    <>
      <HeroSection
        header="Iglesia Bautista Príncipe de Paz"
        description="Descubre el amor de Dios y el poder de la comunidad. Nuestra iglesia no es solo un edificio, es una familia. ¡Ven a conocernos!"
        backgroundImage="/img/service-hero.webp"
        showButton={true}    
        buttonText="Conócenos"
        buttonLink="/about"
      />

      <CallingSection
        tagline="Caminar con Jesus y amarle con toda nuestra mente y corazon."
        introduction="Plantar iglesias bautistas independientes que transformen la comunidad hispana de Columbus y Ohio, una congregación a la vez."
        showButton={true}    
        buttonText="Visión"
        buttonLink="/about#vision-section"
      />
  
      <section className='location-section' id='location-section'>
        <div className='location-container'>
          <div className='location-img-container'>
            <img src='/img/church.webp' loading="lazy" alt="Church Entrance" className="location-img" />
          </div>
          <div className='location-info'>
              <h1 className='location-header'>Príncipe de paz - Sureste de Columbus</h1>   
                        
              <div className='location-hours'>
                <p><FontAwesomeIcon icon={faClock} className="text-blue-500 text-xl"/>  10:00 am & 11:00 am - Domingo</p>
                <p><a
                      href="https://www.google.com/maps/search/4701+Winchester+Pike,+Columbus,+OH+43232/" 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faMapLocationDot} style={{ marginRight: '8px' }}/>
                      </a>
                      4701 Winchester Pike, Columbus
                </p>
              </div>
              <div className='btn-container-services'>
                  <Link to="/visit#service-section" className="btn-services">Servicios</Link>
              </div> 
          </div>
        </div>
      </section>

      <ExploreSection/>
    </>
  );
}
