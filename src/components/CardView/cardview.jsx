import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardview.css';
import Fade from "react-reveal/Fade";

const CardDesign = ({ pop, title, content, onhandleClick, image }) => {
  return (
    <Fade bottom duration={800}>
    <div className="card cus-card mb-4">
      <img src={image} className="card-img-top" alt="Minimalism" />
      <div className="card-body">
        {pop?<div className="tags-c">
          <ul>
            <li>POP</li>
          </ul>
        </div>: <div className="">
          <br/>
          <br/>
        </div>}
        <h5>{title}</h5>
        <p>
          {content}
        </p>
        <br />
        
        <p
          className="text-center"
          style={{ cursor: "pointer" }}
          onClick={onhandleClick}
        >
          Explore
        </p>
      </div>
    </div>
    </Fade>
  );
};

export default CardDesign;