import HeroSection from '../components/HeroSection.jsx';
import CallingSection from '../components/CallingSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx';

export default function Ministries() {
  return (
    <>
        <HeroSection
          header="Ministerios"
          backgroundImage="/img/ministery.jpg"
          showButton={false}   
        />

        <CallingSection
          tagline="Sirviendo Juntos en el Cuerpo de Cristo"
          introduction="Estamos trabajando en la construcción y organización de nuestros ministerios. ¡Pronto tendrás más información disponible aquí!"
        //introduction="En Príncipe de Paz, creemos que cada miembro tiene un papel vital en la edificación del cuerpo de Cristo. Nuestros ministerios están diseñados para involucrar a todos, desde niños hasta adultos, en el servicio y la comunión."
          showButton={false}    
        />

        <ExploreSection/>
    </>
    );          
}