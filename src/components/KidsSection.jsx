import './KidsSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import ServiceModal from './ServiceModal';
import { useState } from 'react';

export default function KidsSection () {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (serviceType) => {
        setSelectedService(serviceType);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedService(null);
    };
 
    const data = [
        { title: 'Guardería', 
          description: 'Cuidado seguro y amoroso para bebés y niños pequeños mientras los padres participan en los servicios.', 
          link:'nursery',
          image: '/img/nursery.jpg' 
        },
        { title: 'Escuela Dominical', 
          description: 'Cada domingo los niños aprenden sobre el amor de Dios a través de historias bíblicas, juegos y actividades adaptadas a su edad.', 
          link:'kids',
          image: '/img/kids.jpg' 
        },
        { title: 'Servicio de Jóvenes', 
          description: 'Conecta con otros jóvenes, crece en tu fe y descubre tu propósito a través de tiempos de adoración, enseñanzas prácticas y actividades especiales.', 
          link:'youth',
          image: '/img/teens.jpg' 
        },
    ];

  return (
    <>
      <section className='kids-section' id='kids-section'>
        <div className='kids-container'>
          
          <div className='kids-info'>
              <h1 className='kids-header'>Un lugar donde tus hijos se sientan como en casa</h1>              
              <div className='kids-details-container'>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`kids-details ${activeIndex === index ? 'active' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        aria-label
                    >
                        <h3 className='kids-title'>{item.title}</h3>
                        <p className='kids-description'>{item.description}</p>
                        <button
                            onClick={() => openModal(item.link)}
                            className="service-link">
                            Ver más <FontAwesomeIcon icon={faSquareArrowUpRight}/>                                               
                        </button>
                    </div>
                ))}
             </div>
         </div>

          <div className='kids-img-container'>
            <img 
              key={activeIndex}  
              src={data[activeIndex].image} 
              alt={data[activeIndex].title} 
            />
            {/* <img src='/img/nursery.jpg' alt="Church Entrance" className="kids-img" /> */}
          </div>

        </div>
      </section>

        {/* Modal Component */}
        <ServiceModal 
            service={selectedService}
            isOpen={modalOpen}
            onClose={closeModal}
        />

    </>
  );
}
