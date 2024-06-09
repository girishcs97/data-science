import React from "react";
import './research.css'
import Img1 from '../../images/research-1.jpg';
import Bio from '../../images/picBiology.jpg'
import research from '../../images/Research.jpg';
import Fade from "react-reveal/Fade";

const Research = () => {
    return (
        <div className="container margin-top-20" id='research'>
            <div className="row">
                <Fade bottom duration={800}>
                    <div className='col-md-5'>
                        <p className="display-1">Faculty Research</p>
                    </div>
                    <div className='col-md-7'>
                        <p className="display-p">Our faculty, representing diverse disciplines, are increasingly integrating data science into their research. Some have applied data science methods and developed data analytics tools to enhance their work, while others are still learning data science and exploring potential approaches, contributing to an evolving research environment. Many research groups provide opportunities for undergraduate and graduate students, enriching their learning experiences and broadening their perspectives.</p>
                    </div>
                </Fade>
            </div>
            <div className="margin-top-20">
                <Fade right duration={800}>
                    <img src={research} className="image-cov" />
                </Fade>
            </div>
            <div className="container opp-content">
                Welcome to Clark Research: Pioneering Discoveries, Shaping Tomorrow. As leaders in scientific exploration and innovation, we are dedicated to pushing the boundaries of knowledge and driving positive change in the world. Explore our website to learn more about our groundbreaking research projects and the talented team behind them.
            </div>
            <div className='container mart-top mb-4'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Bio} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2>
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>Professor Javier Tabima’s research integrates tools and concepts from evolutionary theory, computational biology, genomics, genetics, and plant pathology/mycology. His work focuses on the study of fungal evolution and the development of computational and molecular tools for rapid species identification, population genetics, and the detection of genes of interest. One notable paper connecting to data science is Poppr: an R package for genetic analysis of populations with clonal, partially clonal, and/or sexual reproduction.  Refer to <a href="https://tabima-lab.netlify.app/">Prof. Tabima’s lab page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Research;