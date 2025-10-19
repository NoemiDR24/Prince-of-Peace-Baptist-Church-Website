import './ServiceModal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBaby, faBookBible, faChildren, faHandsPraying, faHourglassStart, faMicrophone, faPersonChalkboard, faThumbTack, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function ServiceModal ({ service, isOpen, onClose }){
  if (!isOpen) return null;

  const serviceDetails = {
    'bible-study': {
      image:'./img/bible-study.webp',
      title: 'Estudio Bíblico',
      subtitle:'Profundizando en la Palabra',
      icon: <FontAwesomeIcon icon={faBookBible} />,
      time: 'Domingo - 10:00 am',
      duration: '1 hora',
      description: 'Nuestros estudios bíblicos son encuentros íntimos donde exploramos las Escrituras de manera práctica y relevante para tu vida cotidiana. Cada domingo nos reunimos para descifrar los tesoros de la Palabra de Dios, compartiendo experiencias y aprendiendo unos de otros en un ambiente relajado y participativo. No necesitas ser un experto en la Biblia; solo trae tu corazón abierto y tu deseo de crecer. Aquí encontrarás respuestas a tus preguntas más profundas y herramientas para aplicar los principios bíblicos en tu trabajo, familia y relaciones. Ven y descubre cómo la Palabra antigua de Dios habla directamente a los desafíos modernos de tu vida.',
      details: [
        'Estudio verso por verso',
        'Discusión grupal',
        'Aplicación práctica',
        'Recursos de estudio'
      ],
      leader: 'Maestros Jose & Nelson',
      location: 'Salón principal'
    },
    'preaching': {
      image:'./img/service-modal.webp',
      title: 'Servicio de Predicación',
      subtitle:'Donde la Palabra cobra vida',
      icon: <FontAwesomeIcon icon={faMicrophone} />,
      time: 'Domingo - 11:00 am',
      duration: '1.5 horas',
      description: 'Nuestros servicios dominicales son momentos poderosos de encuentro con Dios a través de la enseñanza transformadora de Su Palabra. Cada predicación está diseñada para tocar tu corazón, desafiar tu mente y equiparte para vivir victoriosamente durante la semana. Con un enfoque práctico y lleno de esperanza, nuestro pastor presenta mensajes que van directo al punto, abordando temas reales como la ansiedad, las relaciones, el propósito de vida y la prosperidad integral. No son sermones largos y aburridos, sino enseñanzas dinámicas que te dejarán inspirado y con herramientas concretas para enfrentar cada día. Prepárate para recibir una palabra específica que Dios tiene para tu situación actual.',
      details: [
        'Alabanza y adoración',
        'Predicación de la Palabra',
        'Tiempo de oración',
        'Comunión fraterna'
      ],
      leader: 'Pastor Ivan Chacon',
      location: 'Salón principal'
    },
    'praying': {
      image:'./img/praying.webp',
      title: 'Servicio de Oración',
      subtitle:'El poder que cambia todo',
      icon: <FontAwesomeIcon icon={faHandsPraying} />,
      time: 'Miércoles - 7:00 pm',
      duration: '1.5 horas',
      description: 'Los miércoles por la noche, nuestra iglesia se convierte en una casa de oración donde experimentamos el poder sobrenatural de Dios de manera tangible. En estos encuentros íntimos, oramos por sanidad, milagros, restauración familiar y avance espiritual, viendo cómo Dios responde de maneras extraordinarias. No es solo un tiempo de peticiones, sino un espacio donde adoramos, intercedemos por nuestra comunidad y recibimos dirección divina para nuestras vidas. Aquí hemos visto matrimonios restaurados, enfermedades sanadas y vidas completamente transformadas. Si necesitas un milagro, un toque especial de Dios o simplemente quieres experimentar Su presencia de manera profunda, este es tu lugar. Ven con fe y prepárate para ver a Dios moverse poderosamente.',
      details: [
        'Oración intercesora',
        'Peticiones especiales',
        'Estudio verso por verso',
        'Ministración personal'
      ],
      leader: 'Pastor Ivan Chacon',
      location: 'Salón de oración No.105'
    },
    'nursery': {
      image:'./img/nursery.webp',
      title: 'Guardería',
      subtitle:'Creciendo en amor desde los primeros pasos',
      icon: <FontAwesomeIcon icon={faBaby} />,
      time: 'Domingo - 9:30 am | Domingo - 11:00 am | Miércoles - 7:00 pm',
      duration: 'Duración del servicio',
      description: 'Nuestros voluntarios de cuidado infantil, debidamente capacitados, están aquí para proporcionar a sus pequeños un entorno seguro, divertido y espiritualmente enriquecedor mientras usted participa en el culto. La guardería está disponible para bebés recién nacidos hasta los 3 años en todos nuestros servicios programados regularmente.',
      details: [
        'Los padres deben registrar a sus hijos al llegar y mostrar código único al recogerlos',
        'Cuidado profesional y voluntarios capacitados',
        'Ambiente seguro y limpio',
        'Actividades apropiadas para la edad',
        'Cambio de pañales y alimentación',
        'Juguetes y materiales seguros',
        'Cuidado especializado para necesidades especiales',
        'Ambiente libre de nueces (seguro para alergias)',
        'Todo el personal y voluntarios han pasado verificaciones de antecedentes'
      ],
      leader: 'Equipo de Guardería FBC',
      location: 'Sala de guardería'
    },
    'kids': {
      image:'./img/kids.webp',
      title: 'Escuela Bíblica',
      subtitle:'El poder que cambia todo',
      icon: <FontAwesomeIcon icon={faChildren} />,
      time: 'Domingo - 9:30 am | Domingo - 11:00 am | Miércoles - 7:00 pm',
      duration: 'Duración del servicio',
      description: 'Los miércoles por la noche, nuestra iglesia se convierte en una casa de oración donde experimentamos el poder sobrenatural de Dios de manera tangible. En estos encuentros íntimos, oramos por sanidad, milagros, restauración familiar y avance espiritual, viendo cómo Dios responde de maneras extraordinarias. No es solo un tiempo de peticiones, sino un espacio donde adoramos, intercedemos por nuestra comunidad y recibimos dirección divina para nuestras vidas. Aquí hemos visto matrimonios restaurados, enfermedades sanadas y vidas completamente transformadas. Si necesitas un milagro, un toque especial de Dios o simplemente quieres experimentar Su presencia de manera profunda, este es tu lugar. Ven con fe y prepárate para ver a Dios moverse poderosamente.',
      details: [
        'Los padres deben registrar a sus hijos al llegar y mostrar código único al recogerlos',
        'Adoración infantil',
        'Lecciones bíblicas apropiadas para la edad',
        'Juegos y actividades interactivas',
        'Memorización de versículos bíblicos',
        'Premios y reconocimientos',
        'Cuidado especializado para necesidades especiales',
        'Ambiente libre de nueces (seguro para alergias)',
        'Todo el personal y voluntarios han pasado verificaciones de antecedentes'        
      ],
      leader: 'Ministerio de Niños FBC y AWANA',
      location: 'Salones de FBC Big City'
    },
    'youth': {
      image:'./img/teens1.webp',
      title: 'Servicio de Jóvenes',
      subtitle:'Una generación apasionada por Cristo',
      icon: <FontAwesomeIcon icon={faUserGroup} />,
      time: 'Miércoles - 7:00 pm',
      duration: '1.5 horas',
      description: 'Real Life es un grupo activo de estudiantes de bachillerato que se reúnen para experimentar una relación auténtica con Jesucristo. Real Life se reúne todos los miércoles por la noche en el Centro de Estudiantes. En Real Life, los estudiantes experimentarán servicios dirigidos por ellos mismos, predicaciones bíblicas relevantes y profundas, y un grupo de líderes y amigos que les apoyarán en la vida.',
      details: [
        'Adoración dirigida por estudiantes',
        'Predicación bíblica relevante y profunda',
        'Compañerismo cristiano',
        'Apoyo de líderes y amigos',
        'Ambiente diseñado para jóvenes'
      ],
      leader: ' Líderes de Ministerio Real Life',
      location: 'Salón principal'
    }
  };

  const currentService = serviceDetails[service];
  if (!currentService) return null;


  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <div className="service-icon">
              {currentService.icon}
            </div>
            <div>
              <h2>{currentService.title}</h2>
              <p className="service-time">{currentService.time}</p>
            </div>
            <button className="close-btn" onClick={onClose}>
                <img src="/img/close.png"/>
            </button>
          </div>

          <div className="modal-body">
            <div className='service-image'> 
                <img src={currentService.image}  loading="lazy" />
            </div>
            <div className="service-description">
              <p className="service-title">{currentService.subtitle}</p>
              <p>{currentService.description}</p>
            </div>

            <div className="service-info-grid">
              <div className="info-card">
                <span><FontAwesomeIcon icon={faHourglassStart} style={{ marginRight: '8px' }}/> {currentService.duration}</span>
              </div>
              <div className="info-card">
                <span> <FontAwesomeIcon icon={faPersonChalkboard} style={{ marginRight: '8px' }}/> {currentService.leader}</span>
              </div>
              <div className="info-card">
                <span> <FontAwesomeIcon icon={faThumbTack} style={{ marginRight: '8px' }} /> {currentService.location}</span>
              </div>
            </div>

            <div className="service-details">
              <h3>¿Qué incluye?</h3>
              <ul>
                {currentService.details.map((detail, index) => (
                  <li key={index}> <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '8px' }}/>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}
