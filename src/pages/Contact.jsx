import HeroSection from '../components/HeroSection.jsx';
import CallingSection from '../components/CallingSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import './Contact.css';

export default function Contact() {
  return (
    <>
        <HeroSection
          header="Contáctanos"
          backgroundImage="/img/contact.jpg"
          showButton={false}   
        />

        <CallingSection
          tagline="Conéctate con Nosotros"
          introduction="¿Tienes preguntas, comentarios o deseas más información? Completa el formulario y nos pondremos en contacto contigo lo antes posible. ¡Estamos aquí para servirte!"
          showButton={false}    
        />

        <section className='contact-section' id='contact-section'>
            <div className='contact-wrapper'>
                <div className='contact-info-wrapper'>
                    <h2 className="contact-info-title">¡Estamos para ayudarte!</h2>
                    <p>Puedes escribirnos directamente a nuestro correo o llamarnos si lo prefieres. Queremos escucharte y responder todas tus inquietudes.</p>
                    <p> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }}/> ibppoh@gmail.com</p>
                    <p> <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }}/>(380) 282-6744</p>
                    <p> <a
                        href="https://www.google.com/maps/search/4701+Winchester+Pike,+Columbus,+OH+43232/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-map-link">
                        <FontAwesomeIcon icon={faMapLocationDot} style={{ marginRight: '8px' }}/>
                        </a>
                        4701 Winchester Pike, Columbus, OH 43232
                    </p>
                </div>
                <div className='contact-form-wrapper'>
                    <form name="contact" method="POST" data-netlify="true" className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />
                        <label>
                            Nombre:
                            <input type="text" name="name" required />
                        </label>
                        
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        
                        <label>
                            Mensaje:
                            <textarea name="message" required></textarea>
                        </label>
                        
                        <button type="submit">Enviar</button>
                    </form>
                </div>                  
            </div>
        </section>

        <section className='contact-info' id='contact-info'>
            
        </section>
    
        <ExploreSection/>
    </>
  );
}