import HeroSection from '../components/HeroSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx'
import StorySection from '../components/StorySection.jsx';
import { useScrollToHash } from '../hooks/Scroll.jsx';
import VisionSection from '../components/VisionSection.jsx';

export default function About () {
  useScrollToHash(); 
   const details = {
        tasks:[
            'Predicar el evangelio',
            'Discipular y entrenar a hombres que puedan abrir iglesias ',
            'Enseñar la palabra de Dios'
        ]
   }
  return (
    <>
      <HeroSection
        header="Nuestra Historia"
        backgroundImage="/img/about.webp"
        showButton={false}   
      />

      <StorySection
        header= "TESTIMONIO FAMILIA CHACON MOORE"
        par1="Mi nombre es  Iván Chacón López y soy peruano de nacimiento."
        par2="Creí en Cristo como mi salvador personal a la edad de 23 años en enero de 1998. Comencé mis estudios teológicos en el Seminario Bautista Macedonia de Arequipa en el año 2001, graduándome en el año 2004.
                   En el año 2005 trabajé en una iglesia en el país de Uruguay y posteriormente pasé a trabajar plantando iglesias en Santiago de Chile."
        par3="El 3 de agosto del 2013 me casé con la misionera Susan Moore y ahora tenemos tres hijos. 
                   En la época de la pandemia en agosto de 2020 decidimos regresar a USA por un año y prepararnos para nuestro retorno a Chile, Dios no nos permitió regresar y nos dirigió a servirle en el estado de Ohio con la población hispana.
                   En Agosto de 2021 comenzamos el proyecto para tener una iglesia hispana, han pasado algunos años y Dios ha añadido las personas a la iglesia.
                   Parte de nuestro trabajo es:"
        details ={details.tasks}
        par4="Que Dios les bendiga."
        par5="Hechos 26:22"
        image= "/img/family.jpg"
      />
  
      <VisionSection 
        header= "VISIÓN"
        par1= "Ser una iglesia madre que planta congregaciones bautistas independientes por todo Columbus y Ohio, cada una con su propia autonomía y liderazgo local. Visualizamos comunidades hispanas transformadas donde cada iglesia plantada sirva de manera única a su vecindario, alcanzando familias latinas con el mensaje de salvación y formando nuevos líderes cristianos."
        className="dark-story"
        reverse={true}
        image= "/img/vision.webp"
        id="vision-section"
      />
     
       <VisionSection
        header= "MISIÓN"
        par1= "Predicar el Evangelio de Jesucristo a la comunidad hispana de Columbus, hacer discípulos comprometidos y plantar nuevas iglesias bautistas independientes que multipliquen el Reino de Dios. Bajo el liderazgo de un pastor con corazón misionero, nos dedicamos a enseñar la Palabra, fortalecer familias y equipar líderes que transformen sus comunidades con el amor de Cristo."
        className="dark-story"
        reverse={false}
        image= "/img/mission.webp"
        id="mission-section"
      />
      <ExploreSection/>
    </>
  );
}
