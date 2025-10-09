import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useScrollToHash } from '../hooks/Scroll.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  useScrollToHash(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}, [menuOpen]);

  return (
    <nav className="custom-navbar">
        <div className="nav-content">
            <div className="nav-left">
                <Link to="/">
                    <img src= {menuOpen ? "/img/close.png" : "/img/menu.png"}
                    alt="Menu" 
                    className="menu" 
                    onClick={toggleMenu}/>
                </Link>
            </div>
            
            <div className="nav-center">
                <Link  to="/" onClick={() => setMenuOpen(false)}>
                    <img src="/img/logo-white.png" 
                    alt="Logo" 
                    className="logo"/>
                </Link>
            </div>

            <div className="nav-right">
                <Link to="/visit" onClick={() => setMenuOpen(false)}>
                    <button className="btn-visit">Visítanos</button>
                </Link>
            </div>
        </div>   

        {menuOpen && (
            <div className="menu-overlay">
            
                <div className="menu-overlay-content">
                    {/* Column 1: Quick links */}
                    <div className="menu-column quick-links">
                        <Link to="/about" onClick={toggleMenu}>Conócenos</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contáctanos</Link>
                        <Link to="/events" onClick={toggleMenu}>Eventos</Link>
                        <Link to="/about#vision-section" onClick={toggleMenu}>Visión</Link>
                    </div>  
                    {/* Column 2: More links */}
                    <div className="menu-column more-links">
                        <Link to="/visit#service-section" onClick={toggleMenu}>Servicios</Link>
                        <Link to="/about#mission-section" onClick={toggleMenu}>Misión</Link>
                        <Link to="/faith" onClick={toggleMenu}>Que Creemos</Link>
                        <Link to="/ministries" onClick={toggleMenu}>Ministerios</Link>
                    </div>  
                    {/* Column 3: Contact */}
                    <div className="menu-column contact">
                        <h5>Contáctanos</h5>
                        <p> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }}/> ibppoh@gmail.com</p>
                        <p> <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }}/> (380) 282-6744</p>
                    </div>
                    {/* Column 4: Social Media */}
                    <div className="menu-column social">
                        <h5>Síguenos</h5>
                        <div className="socials">                            
                            <a href="https://www.facebook.com/people/Iglesia-Bautista-Principe-de-Paz/61567197463441/" onClick={toggleMenu}><i className="fab fa-facebook"></i></a>
                            {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                            {/* <a href="#"><i className="fab fa-youtube"></i></a> */}
                        </div>
                    </div>                            
                </div>
            </div>
        )} 
    </nav>
  );
}

// "/team#contact-section"
// "/events" 
// "/team"
// "/faith"
// "/ministries" 