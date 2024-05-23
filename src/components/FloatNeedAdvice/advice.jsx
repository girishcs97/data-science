import React, { useState } from 'react';
import './advice.css';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="floating-button" onClick={togglePopup}>
        Need Advice?
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <p> Students interested in Data Science are encouraged to contact the program (<a href="DS@clarku.edu">DS@clarku.edu</a>) early on.<br/>
                 The data science faculty will be happy to talk to students, discuss their interests, and help
 them <br/>plan their studies at Clark and connect to other students of similar interests.</p>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
