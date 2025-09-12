import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import CallingSection from '../components/CallingSection.jsx';
// import './Visit.css'

export default function Events (){

    return(
    <>
      <HeroSection 
        header="Events"
        backgroundImage="/img/events.jpg"
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