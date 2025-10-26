import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ExploreSection.css"; 
import Card from '../components/Card.jsx';
import { useScrollToHash } from '../hooks/Scroll.jsx';

export default function ExploreSection () {
    useScrollToHash(); 
    const cards = [
        {
            image:"/img/service-explore.webp",
            header:"Visítanos el Domingo",
            description:"Te invitamos a ser parte de nuestra familia. Conoce qué esperar, dónde estamos y cómo podemos recibirte con alegría en tu primera visita.",
            link:"/visit#hero-section",
        },
        {
            image:"/img/bible-explore.webp",
            header:"Ministerios",                         
            description:"Descubre cómo puedes crecer en tu fe y servir a otros a través los diferentes ministerios en Príncipe de Paz. Hay un lugar para ti.",
            link:"/ministries#hero-section",
        },
        {
            image:"/img/kids-explore.webp",
            header:"Escuela Bíblica",
            description:"Cada domingo los niños aprenden sobre el amor de Dios a través de historias bíblicas, juegos y actividades adaptadas a su edad.",
            link:"/visit#kids-section",
        },
        {
            image: "/img/teens-explore.webp",
            header:"Servicio de Jóvenes",
            description:"Conecta con otros jóvenes, crece en tu fe y descubre tu propósito a través de tiempos de adoración, enseñanzas prácticas y actividades especiales.",
            link:"/visit#kids-section",
        },
        {
            image: "/img/preach-explore.webp",
            header:"Transmisiones en Vivo",
            description:"Mira nuestros servicios en vivo o accede a grabaciones pasadas directamente en nuestra página de Facebook. Siempre hay una palabra para ti.",
            link:"/visit#service-section",
        },
        {
            image: "/img/faith-explore.webp",
            header:"Nuestra Fe",
            description:"Descubre los fundamentos de nuestra fe: creemos en un Dios vivo, en la salvación a través de Jesús y en el poder transformador del Espíritu Santo.",
            link:"/faith#faith-section",
        },
    ];

  return (
    <section className="explore-section" id="explore-section">
        <div className="explore-container">
            <div className="explore-header">
                <h1>Planea tu siguientes pasos en Príncipe de paz</h1>
            </div>    
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1} // Default for mobile
                    loop={false}
                    grabCursor={true}
                    centeredSlides={false}
                    watchOverflow={true} 
                    allowTouchMove={true}
                    breakpoints={{
                        // Phone: 1 card
                        320: { 
                        slidesPerView: 1,
                        spaceBetween: 10
                        },
                        // Tablet: 2 cards  
                        768: { 
                        slidesPerView: 2,
                        spaceBetween: 20
                        },
                        // Desktop: 3 cards
                        1024: { 
                        slidesPerView: 3,
                        spaceBetween: 30
                        },
                    }}
                    className="swiper-container"
                >
                    {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        
                        <Card
                        image={card.image}
                        header={card.header}
                        description={card.description}
                        link={card.link}
                        />                    
                        
                    </SwiperSlide>
                    ))}
                </Swiper>            
        </div>
    </section>
  );
}

