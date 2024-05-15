import React from 'react';
import Logo from '../../images/clark-logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <img src={Logo} alt={'Logo'} className='img1-logo'/>
          {/* <h2 className="university-name">Clark University</h2> */}
          <div className="university-motto">Challenge Convention.Change Our World.</div>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> 508-793-7711</p>
            <p><i className="fas fa-map-marker-alt"></i> 950 Main Street Worcester, MA 01610</p>
          </div>
        </div>
        <div className="footer-middle">
        <div className="apply-buttons">
            <button>Apply Undergrad</button>
            <button>Apply Grad</button>
            <button>Give</button>
            <button>Contact Us</button>
          </div>
          <h3 className="helpful-links-title">Helpful Links</h3>
          <ul className="helpful-links-list">
            <li>Report a Concern</li>
            <li>Campus Safety</li>
            <li>Events</li>
            <li>Offices</li>
            <li>Employment</li>
            <li>Website Feedback</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="follow-us-title">Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/clarkuniversity" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/clarkuniversity" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/clarkuniversity" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@clarkuniversityworcester" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/school/clark-university/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/clarkuniversity" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://threads.net/@clarkuniversity" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-threads"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Clark University | Public Information | Privacy Policy | Website Accessibility | Nondiscrimination Policy</p>
      </div>
    </footer>
  );
};

export default Footer;