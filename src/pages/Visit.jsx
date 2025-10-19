import CallingSection from '../components/CallingSection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import ServiceSection from '../components/ServiceSection.jsx'
import './Visit.css'
import Carousel from '../components/Carousel.jsx';
import KidsSection from '../components/KidsSection.jsx';
import { useScrollToHash } from '../hooks/Scroll.jsx';

export default function Visit (){
    useScrollToHash();

    const images = [
        "/img/carousel/img1.webp",
        "/img/carousel/img2.webp",
        "/img/carousel/img3.webp",
        "/img/carousel/img4.webp",
        "/img/carousel/img5.webp",
        "/img/carousel/img6.webp",
        "/img/carousel/img7.webp",
        "/img/carousel/img8.webp",
        "/img/carousel/img9.webp",
        "/img/carousel/img10.webp",
        "/img/carousel/img11.webp",
        "/img/carousel/img12.webp",
    ];

  return(
    <>
      <HeroSection 
        header="Visita Príncipe de Paz"
        backgroundImage="/img/visit-hero.webp"
        showButton={false}   
      />
   
      <CallingSection
        tagline="Donde cada domingo es una nueva oportunidad de encontrar esperanza, propósito y familia."
        introduction="En Príncipe de Paz creemos que cada persona tiene un propósito único en el plan de Dios. 
        Somos una familia diversa que se reúne cada domingo para adorar, aprender y crecer juntos en fe. 
        No importa de dónde vengas o en qué etapa de tu camino espiritual te encuentres, aquí encontrarás un lugar donde perteneces. 
        Te invitamos a descubrir el amor incondicional de Cristo y a ser parte de una comunidad que te apoyará en cada paso de tu jornada."
        showButton={false}  
      />
    
      <ServiceSection />
      
      <Carousel 
        images={images} 
      />

      <KidsSection />
      
      <ExploreSection />
    </>
  );
}