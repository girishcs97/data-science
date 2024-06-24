import React, { useState } from 'react';
import './researchLanding.css';
import SC from "../../images/SC.png";
import SN from "../../images/niu's project.png";
import ADA from "../../images/ADA.jpg";
import Bio from '../../images/picBiology.jpg'
import Geo from '../../images/Geography.jpg'
import ECF from '../../images/ECF.jpeg';
import ST from '../../images/Spotify.jpeg';
import WC from '../../images/watch.jpeg';
import Modal from "react-bootstrap/Modal";
import CardDesign from '../CardView/cardview';

const ResearchLanding = () => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleData = () => {
        if (type === "ADA") {
            return (
                <>
                    <h5>DSCI 105 - Applied Data Analytics</h5>
                    <br />
                    <br />
                    <p>
                        An investigation into the fundamental techniques and practices of
                        data analysis. The primary activities of the course will be a series
                        of lectures and a corresponding series of lab sessions, programming
                        projects, and written assignments. The course will focus on applying
                        tools and techniques to practical problems of analysis,
                        visualization, and discovery and will also introduce the student to
                        a suite of modern tools for data analysis.{" "}
                        <em>Formally DSCI 205.</em>
                    </p>
                    <p>Prerequisites for this course require a grade of C- or better.</p>
                    <p>
                        <strong>Prerequisites:</strong>
                    </p>
                    <ul>
                        <li>
                            <a href="http://example.com/GEOG110">GEOG 110</a> or{" "}
                            <a href="http://example.com/ECON160">ECON 160</a> or{" "}
                            <a href="http://example.com/SOC202">SOC 202</a> or{" "}
                            <a href="http://example.com/PSYC105">PSYC 105</a> or{" "}
                            <a href="http://example.com/PSCI107">PSCI 107</a> or{" "}
                            <a href="http://example.com/QBUS110">QBUS 110</a> or{" "}
                            <a href="http://example.com/MATH120">MATH 120</a> or{" "}
                            <a href="http://example.com/MATH124">MATH 124</a> and{" "}
                            <a href="http://example.com/CSCI120">CSCI 120</a> (Minimum grade
                            of C- required for pre-reqs)
                        </li>
                    </ul>
                    <p>
                        <strong>Course Designation/Attribute:</strong> POP
                    </p>
                    <p>
                        <strong>Anticipated Terms Offered:</strong> Spring 2021
                    </p>
                </>
            );
        } else if (type == "SC") {
            return (
                <>
                    <h5>DSCI 216 - Stochastic Computing</h5>
                    <p>
                        This course is about dealing with uncertainty that appears in
                        virtually all areas of data science and computer science. This will
                        be accomplished with tools and techniques for its measurement,
                        description, evaluation, and ultimately making decisions under
                        uncertainty.
                    </p>
                    <p>
                        The course will approach these goals using a three-fold approach,
                        namely problem, theory, and prototype (PTP). We will motivate major
                        topics by discussing a problem. The purpose of discussion of the
                        problem is to give context behind why a particular supporting topic
                        in probability was developed or what it is intended to address. The
                        problem will be followed by theory. This concerns rigorous
                        mathematical definition and tools for their manipulation in order to
                        address the problem. Emphasis will be placed on approaches that are
                        amenable to implementation. Finally, theory will be followed by
                        prototype. The purpose of the prototype aspect of the course is to
                        train students in the development of models that serve a useful
                        purpose.
                    </p>
                    <p>
                        <strong>Prerequisites:</strong>{" "}
                        <a href="http://example.com/MATH121">MATH 121 - Calculus II</a> or{" "}
                        <a href="http://example.com/MATH125">
                            MATH 125 - Honors Calculus II
                        </a>{" "}
                        and{" "}
                        <a href="http://example.com/CSCI121">CSCI 121 - Data Structures</a>{" "}
                        or{" "}
                        <a href="http://example.com/CSCI124">
                            CSCI 124 - Honors Introduction to Computing
                        </a>
                    </p>
                    <p>
                        <strong>Anticipated Terms Offered:</strong> Fall 2021
                    </p>
                </>
            );
        }
    }

    return (
        <>
            <div className='container margin-top-40' id={'programs-page'}>
                <div className="text-center mb-4">
                    <p className="subtitle mb-2">Faculty Research Spotlight</p>
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Our faculty, representing diverse disciplines, are increasingly integrating data science into their research.</p>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="projcard projcard-blue">
                    <div class="projcard-innerbox">
                        <img class="projcard-img" src={Geo} />
                        <div class="projcard-textbox">
                            <div class="projcard-title">Research in Geography</div>
                            <div class="projcard-bar"></div>
                            <div class="projcard-description">Professor Lyndon Estes at Clark University focuses on the drivers and impacts of agricultural change in sub-Saharan Africa. His research employs advanced Earth observation technologies and modeling techniques to improve agricultural mapping and sustainability. He leads projects that aim to address food security, analyze farming practices, and develop high-resolution maps of cropland using machine learning and satellite imaging. Estes' work is crucial in understanding how agriculture in Africa is influenced by and adapts to climate change.  Refer to <a href="https://www.clarku.edu/departments/geography/research/faculty-research/">faculty research page</a> for more information.
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <div class="carousel-item">
    <div class="projcard projcard-blue">
                    <div class="projcard-innerbox">
                        <img class="projcard-img" src={SN} />
                        <div class="projcard-textbox">
                            <div class="projcard-title">Research in Computer Science</div>
                            <div class="projcard-bar"></div>
                            <div class="projcard-description">Dr. Shuo Niu is an Assistant Professor of Computer Science at Clark University. He earned his Ph.D. in Computer Science from Virginia Tech, and his research focuses on human-computer interaction and social computing. His work explores collaborative and community activities in online environments, with a particular interest in video-sharing platforms and the dynamics of user interaction within these spaces.  Refer to <a href="https://mathcs.clarku.edu/~shniu/">Prof. Shuo Niu's personal page</a> for more information.
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <div class="carousel-item">
    <div class="projcard projcard-blue">
                    <div class="projcard-innerbox">
                        <img class="projcard-img" src={Bio} />
                        <div class="projcard-textbox">
                            <div class="projcard-title">Research in Biology</div>
                            <div class="projcard-bar"></div>
                            <div class="projcard-description">Professor Javier Tabima’s research integrates tools and concepts from evolutionary theory, computational biology, genomics, genetics, and plant pathology/mycology. His work focuses on the study of fungal evolution and the development of computational and molecular tools for rapid species identification, population genetics, and the detection of genes of interest. One notable paper connecting to data science is Poppr: an R package for genetic analysis of populations with clonal, partially clonal, and/or sexual reproduction.  Refer to <a href="https://tabima-lab.netlify.app/">Prof. Tabima’s lab page</a> for more information.
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            </div>
            <div className='container margin-top-40' id={'programs-page'}>
                <div className="text-center mb-4">
                    <p className="subtitle mb-2">Fall 2024 Course Spotlight</p>
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Explore the latest advancements and essential skills in data science through our comprehensive and hands-on course spotlight.</p>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className='col-md-2'></div>
                    <div className="col-md-4">
                        <CardDesign pop={true} title={'DS105 - Applied Data Analytics'} content={'An investigation into the fundamental techniques and practices of data analysis, this course focuses on applying tools and techniques to practical problems of analysis, visualization, and discovery.'} image={ADA} onhandleClick={() => {
                            setType("ADA");
                            handleShow();
                        }} />
                    </div>
                    <div className="col-md-4">
                        <CardDesign pop={true} title={'DSCI 216 - Stochastic Computing'} content={' Stochastic Computing focuses on addressing the uncertainty inherent in data science and computer science through a combination of problem analysis, theoretical development, and prototype creation.'} image={SC} onhandleClick={() => {
                            setType("SC");
                            handleShow();
                        }} />
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
            <div className="text-center mb-4">
                    <p className="subtitle mb-2">Student Projects Spotlight</p>
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Our faculty, representing diverse disciplines, are increasingly integrating data science into their research.</p>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='container mart-top'>
                <div className='row'>
                        <div className='col-md-6 mart-top'>
                            {/* <div class="line mg-bottom-32px"></div> */}
                            <h2 style={{ lineHeight: '1.182em' }}>Spotify Music Recomendation System using EDA</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This system utilizes Spotify song data from 2019 to 2022 to uncover trends in "song popularity" through detailed visualizations, achieved via Exploratory Data Analysis (EDA) to identify pertinent features. By applying K-means clustering, the system groups genres based on their audio characteristics, highlighting genre similarities and enabling nuanced song recommendations. Leveraging SpotiPy, a Python library for accessing Spotify's music library API, the system analyzes users' listening histories to recommend songs with similar audio features, aligning with their preferences. Regular updates with new data ensure the recommendations remain current and relevant.</p>
                            <br />
                        </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                                <img src={ST} className='img-re-class' style={{ marginTop: '60px' }} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    <div className='container mart-top'>
                <div className='row'>
                        <div className='col-md-6 mart-top'>
                            <h2 style={{ lineHeight: '1.182em' }}>Analyzing Secondhand Watch Market Data</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This project focuses on scraping an e-commerce website for detailed information on secondhand watches from a diverse array of brands. It collects data on various aspects, including age, price point, and general style or purpose. By encompassing a wide range of watch characteristics and categories, the project aims to provide a comprehensive analysis of the secondhand watch market, offering valuable insights into the diversity and trends within this sector.</p>
                            <br />
                        </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                                <img src={WC} className='img-re-class' style={{ marginTop: '60px' }} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="carousel-item">
    {/* <div className="bg-grey mt-4">
                <div className='container mart-top'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>        
                                    <img src={ECF} className='img-re-class margin-top-32' />
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                           
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Analyzing Economic Factors Influencing Presidential Reelection </h2>
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>The primary objective of this project is to identify and analyze the economic factors that influence a president's likelihood of reelection. By examining historical data and various economic indicators, the project aims to uncover patterns and correlations that may impact voter behavior and election outcomes. This comprehensive analysis includes factors such as GDP growth, unemployment rates, inflation, stock market performance, and other relevant economic metrics. The project seeks to provide a deeper understanding of how economic conditions shape the political landscape and affect presidential reelection prospects. Through rigorous data analysis and modeling, it strives to offer valuable insights into the interplay between economics and electoral success.</p>
                                <br />
                           
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container mart-top'>
                <div className='row'>
                        <div className='col-md-6 mart-top'>
                            <h2 style={{ lineHeight: '1.182em' }}>Analyzing Economic Factors Influencing Presidential Reelection</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>The primary objective of this project is to identify and analyze the economic factors that influence a president's likelihood of reelection. By examining historical data and various economic indicators, the project aims to uncover patterns and correlations that may impact voter behavior and election outcomes. This comprehensive analysis includes factors such as GDP growth, unemployment rates, inflation, stock market performance, and other relevant economic metrics. The project seeks to provide a deeper understanding of how economic conditions shape the political landscape and affect presidential reelection prospects. Through rigorous data analysis and modeling, it strives to offer valuable insights into the interplay between economics and electoral success.</p>
                            <br />
                        </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                                <img src={ECF} className='img-re-class' style={{ marginTop: '60px' }} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
            
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{handleData()}</Modal.Body>
            </Modal>
        </>
    )
}
export default ResearchLanding