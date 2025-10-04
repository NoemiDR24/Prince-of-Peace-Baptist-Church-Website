import HeroSection from '../components/HeroSection.jsx';
import CallingSection from '../components/CallingSection.jsx';
import ExploreSection from '../components/ExploreSection.jsx';
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
            <div className='contact-info-wrapper'>
                <h2>¡Estamos para ayudarte!</h2>
                <p>Puedes escribirnos directamente a nuestro correo o llamarnos si lo prefieres. Queremos escucharte y responder todas tus inquietudes.</p>
                 <p>ibppoh@gmail.com</p>
                <p>(380) 282-6744</p>
               
            </div>
        </section>

        <section className='contact-info' id='contact-info'>
            
        </section>
    
        <ExploreSection/>
    </>
  );
}