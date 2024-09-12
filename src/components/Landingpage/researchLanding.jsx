import React, { useState } from 'react';
import './researchLanding.css';
import AI from "../../images/AI.png";
import GS from "../../images/Geospatial.jpg";
import SC from '../../images/SC.jpg'
import SN from "../../images/niu's project.png";
import ADA from "../../images/ADA.png";
import Bio from '../../images/picBiology.jpg'
import Geo from '../../images/Geography.jpg'
import MFDS from "../../images/MFDS.png";
import MSA from "../../images/MSA.jpg";
import DCS from "../../images/DCS.jpg";
import Modal from "react-bootstrap/Modal";
import CardDesign from '../CardView/cardview';
import StudentSpotlight from './studentspotlight';

const ResearchLanding = () => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
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
        } else if (type == "MFDS") {
            return (
                <>
                    <h5>DSCI 122 - Mathematical Foundations of Data Science</h5>
                    <br />
                    <br />
                    <p>
                        This course introduces fundamental mathematical concepts, theorems,
                        and tools used in data science and machine learning, including
                        linear algebra, analytic geometry, matrix decompositions, partial
                        derivatives, optimization, and if time permits, probability and
                        statistics. This is a standard lecture course with a lab component.
                        The lab will be used for small group work and, if time permits,
                        introduction to programming in R (one of the widely used programming
                        languages in data science).
                    </p>
                    <p>
                        <strong>Prerequisites:</strong>{" "}
                        <a href="http://example.com/MATH121">MATH 121 - Calculus II</a> or{" "}
                        <a href="http://example.com/MATH125">
                            MATH 125 - Honors Calculus II
                        </a>
                    </p>
                    <p>
                        <strong>Anticipated Terms Offered:</strong> Fall
                    </p>
                </>
            );
        } else if (type == "DCS") {
            return (
                <>
                    <h5>DSCI 103 - Data, Computing and Society</h5>
                    <br />
                    <br />
                    <p>Data in the 21st Century draws many parallels to Oil in the 18th Century, while its use is increasing, its applications and full utility remain largely untapped. While limited in usefulness in its raw form, substantial value arises from its refining, that is the derivative forms from its processing, mixture with other components, and its transformation. Such processes on Data are purposed with gaining insights, nuggets of information not directly observable. One finds achievement of efficiencies engendered by the refining of data ranging broadly across diverse domains from transportation and commerce to entertainment and healthcare. More recently, governments have employed data to improve apportionment of funds and delivery of critical services. An organization’s ability to employ data and use it to generate insights enables better decision-making.</p>
                    <br />
                    <p>In this course, we cover introductory concepts purposed with building student background in the Data Science process, that is posing questions, gathering data, developing analyses, and articulating data-informed decisions. We also introduce students to entry-level computational tools and methods purposed with extracting insights from data as we survey the Data Science process and consider its impact. Students will also be challenged to consider issues concerning privacy, bias, and ethics surrounding data and crafting data-informed decisions. A goal of the course is to expose students to examples from varied domains.</p>
                    <div>
                        <p><strong>This is a general elective course for the Data Science Major and does not count towards the Data Science Minor.</strong></p>
                        <p><strong>LAPTOP Required</strong></p>
                        <p><strong>Course Designation/Attribute:</strong> FA, DI</p>
                        <p><strong>Anticipated Terms Offered:</strong> Annually (Depending on availability of faculty to teach it)</p>
                    </div>
                </>
            );
        } else if (type == "MSA") {
            return (
                <>
                    <h5>MATH 113 - Sports Analytics</h5>
                    <br />
                    <br />
                    <p>Math 113 is an introduction to Sports Analytics, a rapidly growing discipline. The course focuses primarily on the NBA and MLB, the pro basketball and baseball leagues in the U.S. We will also include lecture topics on marathon running and women’s professional tennis, and students may pursue any sport in their final project. Our approach will be to understand recently available advanced statistics and to build simple models using R software. With this experience, we will make data-driven evaluations and predictions in lectures and in projects. A few additional topics will be presented such as player development, in-game strategy, team building, and the draft. The modeling techniques and software learned in this course are general ones and could be applied to many other fields such as medicine, politics, business, and science.</p>
                    <p>
                        <p><strong>Prerequisites:</strong> MATH 120 - Calculus I or Placement</p>
                        <p><strong>Course Designation/Attribute:</strong> FA</p>
                        <p><strong>Anticipated Terms Offered:</strong> Bi-Annually</p>
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
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Our faculty from diverse disciplines are increasingly incorporating data science into their research, making significant impacts through their innovative work.</p>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="10000">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="projcard projcard-blue">
                                <div class="projcard-innerbox">
                                    <img class="projcard-img" src={Geo} />
                                    <div class="projcard-textbox">
                                        <div class="projcard-title">Research in Geography</div>
                                        <div class="projcard-bar"></div>
                                        <div class="projcard-description">Professor Lyndon Estes at Clark University focuses on the drivers and impacts of agricultural change in sub-Saharan Africa. His research employs advanced Earth observation technologies and modeling techniques to improve agricultural mapping and sustainability. He leads projects that aim to address food security, analyze farming practices, and develop high-resolution maps of cropland using machine learning and satellite imaging. Estes' work is crucial in understanding how agriculture in Africa is influenced by and adapts to climate change.  Refer to <a href="https://www.researchgate.net/profile/Lyndon-Estes">Professor Lyndon Estes research page</a> for more information.
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
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Learn the latest advancements and essential skills in data science through our comprehensive and hands-on courses.</p>
                </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="10000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'DS105 - Applied Data Analytics'} content={'An investigation into the fundamental techniques and practices of data analysis, this course focuses on applying tools and techniques to practical problems of analysis, visualization, and discovery.'} image={ADA} onhandleClick={() => {
                                        setType("ADA");
                                        handleShow();
                                    }} />
                                </div>
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'DSCI 122 - Mathematical Foundations of Data Science'} content={'This course provides an introduction to the key mathematical principles underlying data science. The course focuses on linear algebra, probability, statistics, and calculus, as these areas are crucial for understanding.'} image={MFDS} onhandleClick={() => {
                                        setType("MFDS");
                                        handleShow();
                                    }} />
                                </div>
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'DSCI 216 - Stochastic Computing'} content={'Stochastic Computing focuses on addressing the uncertainty inherent in data science and computer science through a combination of problem analysis, theoretical development, and prototype creation.'} image={SC} onhandleClick={() => {
                                        setType("SC");
                                        handleShow();
                                    }} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="container my-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'DSCI 103 - Data, Computing and Society'} content={'This course introduces students to the Data Science process, including posing questions, gathering data, developing analyses, and making data-informed decisions, while exploring entry-level computational tools. It also addresses privacy, bias, and ethics, aiming to showcase diverse domain applications.'} image={DCS} onhandleClick={() => {
                                        setType("DCS");
                                        handleShow();
                                    }} />
                                </div>
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'GEOG 213 Advanced Geospatial Analytics with Python'} content={'This course introduces the principles of open-source software for science and developing reproducible workflows in Python. It focuses on geospatial data analytics, visualization, and accessing geospatial data from various portals, including cloud data stores.'} image={GS} onhandleClick={() => {
                                        setType("");
                                        handleShow();
                                    }} />
                                </div>
                                <div className="col-md-4">
                                    <CardDesign pop={true} title={'GAME 265 Artificial Intelligence for Games'} content={'This course offers an overview of artificial intelligence, with a focus on its applications in electronic gaming. Students will develop logic grids for intelligent agents and explore key concepts like learning, communication, cognition, and the Turing test.'} image={AI} onhandleClick={() => {
                                        setType("");
                                        handleShow();
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <StudentSpotlight />
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