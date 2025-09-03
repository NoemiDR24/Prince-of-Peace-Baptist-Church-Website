import { useState } from 'react';
import './ServiceSection.css';
import ServiceModal from './ServiceModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight, faMapLocationDot} from "@fortawesome/free-solid-svg-icons";

// const cards = [ 
//   {
//     image:'./img/bible-study.jpg',
//     title:'Estudio Bíblico',
//     subtitle:'Profundizando en la Palabra',
//     time:'Domingo - 10:00 am',
//     description:'Nuestros estudios bíblicos son encuentros íntimos donde exploramos las Escrituras de manera práctica y relevante para tu vida cotidiana. Cada miércoles nos reunimos para descifrar los tesoros de la Palabra de Dios, compartiendo experiencias y aprendiendo unos de otros en un ambiente relajado y participativo. No necesitas ser un experto en la Biblia; solo trae tu corazón abierto y tu deseo de crecer. Aquí encontrarás respuestas a tus preguntas más profundas y herramientas para aplicar los principios bíblicos en tu trabajo, familia y relaciones. Ven y descubre cómo la Palabra antigua de Dios habla directamente a los desafíos modernos de tu vida.'
//   },
//   {
//     image:'./img/service.jpg',
//     title:'Servicio de Predicación',
//     subtitle:'Donde la Palabra cobra vida',
//     time:'Domingo - 11:00 am',
//     description:'Nuestros servicios dominicales son momentos poderosos de encuentro con Dios a través de la enseñanza transformadora de Su Palabra. Cada predicación está diseñada para tocar tu corazón, desafiar tu mente y equiparte para vivir victoriosamente durante la semana. Con un enfoque práctico y lleno de esperanza, nuestro pastor presenta mensajes que van directo al punto, abordando temas reales como la ansiedad, las relaciones, el propósito de vida y la prosperidad integral. No son sermones largos y aburridos, sino enseñanzas dinámicas que te dejarán inspirado y con herramientas concretas para enfrentar cada día. Prepárate para recibir una palabra específica que Dios tiene para tu situación actual.'
//   },  
//   {
//     image:'./img/praying.jpg',
//     title:'Servicio de Oración',
//     subtitle:'El poder que cambia todo',
//     time:'Miércoles - 7:00 pm',
//     description:'Los miércoles por la noche, nuestra iglesia se convierte en una casa de oración donde experimentamos el poder sobrenatural de Dios de manera tangible. En estos encuentros íntimos, oramos por sanidad, milagros, restauración familiar y avance espiritual, viendo cómo Dios responde de maneras extraordinarias. No es solo un tiempo de peticiones, sino un espacio donde adoramos, intercedemos por nuestra comunidad y recibimos dirección divina para nuestras vidas. Aquí hemos visto matrimonios restaurados, enfermedades sanadas y vidas completamente transformadas. Si necesitas un milagro, un toque especial de Dios o simplemente quieres experimentar Su presencia de manera profunda, este es tu lugar. Ven con fe y prepárate para ver a Dios moverse poderosamente.'
//   },
//    {
//     image:'./img/nursery.jpg',
//     title:'Guardería',
//     subtitle:'Creciendo en amor desde los primeros pasos',
//     time:'Durante Servicios',
//     description:'Nuestros voluntarios de cuidado infantil, debidamente capacitados, están aquí para proporcionar a sus pequeños un entorno seguro, divertido y espiritualmente enriquecedor mientras usted participa en el culto. La guardería está disponible para bebés recién nacidos hasta los 3 años en todos nuestros servicios programados regularmente.'
//   },
//   {
//     image:'./img/kids.jpg',
//     title:'Escuela Dominical',
//     subtitle:'Donde la Biblia cobra vida para los niños',
//     time:'Durante Servicios',
//     description:'Cuando sus hijos vienen a la iglesia, hacemos que sea una experiencia memorable. Durante nuestros servicios, sus hijos aprenderán la Biblia, harán amigos y se divertirán en un entorno emocionante que les encantará. Entendemos que criar a los hijos no es fácil. Queremos que sepa que FBC Kids está aquí para ayudarle a ver cómo sus hijos se convierten en jóvenes piadosos.'
//   },  
//   {
//     image:'./img/teens1.jpg',
//     title:'Servicio de Jóvenes',
//     subtitle:'Una generación apasionada por Cristo',
//     time:' Miércoles - 7:00 pm',
//     description:'Real Life es un grupo activo de estudiantes de bachillerato que se reúnen para experimentar una relación auténtica con Jesucristo. Real Life se reúne todos los miércoles por la noche en el Centro de Estudiantes. En Real Life, los estudiantes experimentarán servicios dirigidos por ellos mismos, predicaciones bíblicas relevantes y profundas, y un grupo de líderes y amigos que les apoyarán en la vida.'
//   }   
// ];

export default function ServiceSection () {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (serviceType) => {
        setSelectedService(serviceType);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedService(null);
    };

    return (
      <>
        <section className='service-section' id='service-section'>
            <div className='service-container'>

                <h1 className='service-header'>¡Únete a nosotros!</h1>   

                <div className='service-info'>  
                    <div className='service-times'>
                        <p>Domingo - 10:00 am</p>
                        <h1 className='service-subtitle'>Estudio Bíblico</h1>
                        <button 
                            onClick={() => openModal('bible-study')}
                            className="service-link">
                            Ver más <FontAwesomeIcon icon={faSquareArrowUpRight} /> 
                        </button>                        
                    </div>
                    <div className='service-times'>
                        <p>Domingo - 11:00 am</p>
                        <h1 className='service-subtitle'>Servicio de Predicación</h1>
                        <button 
                            onClick={() => openModal('preaching')}
                            className="service-link">
                            Ver más <FontAwesomeIcon icon={faSquareArrowUpRight}/>
                        </button>                         
                    </div>
                    <div className='service-times'>
                        <p>Miércoles - 7:00 pm</p>
                        <h1 className='service-subtitle'>Servicio de Oración</h1>
                        <button 
                            onClick={() => openModal('praying')}
                            className="service-link">
                            Ver más <FontAwesomeIcon icon={faSquareArrowUpRight}/>
                        </button>                         
                    </div>
                </div>

                <div className='service-directions'>
                    <a
                        href="https://www.google.com/maps/search/4701+Winchester+Pike,+Columbus,+OH+43232/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-directions">
                        ¿Cómo llegar? <FontAwesomeIcon icon={faMapLocationDot} style={{ marginLeft: '8px' }}/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61567197463441" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Ver transmisión en vivo <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    </a> 
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