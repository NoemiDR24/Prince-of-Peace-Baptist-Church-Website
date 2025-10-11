import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import CallingSection from '../components/CallingSection.jsx';

export default function Events (){

    return(
    <>
      <HeroSection 
        header="Eventos"
        backgroundImage="/img/events.webp"
        showButton={false}   
      />

      <CallingSection
        tagline="Próximamente - Mantente atento"
        introduction="Estamos trabajando en emocionantes eventos y actividades para nuestra comunidad. ¡Mantente atento a las actualizaciones!"
        showButton={false} 
      />
   
      <ExploreSection />
    </>
  );
}