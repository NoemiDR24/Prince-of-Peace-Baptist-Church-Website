import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-copy">
          <p>Copyright © 2025 IBPPOH - All Rights Reserved.</p>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com/people/Iglesia-Bautista-Principe-de-Paz/61567197463441/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
          {/* <a href="#"><i className="fab fa-youtube"></i></a> */}
        </div>
      </div>
    </footer>
  );
}
