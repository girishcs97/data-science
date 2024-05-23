import React, { useState } from 'react';
import Biology from '../../images/biology.png'
import T2 from '../../images/Track2.png'
import T3 from '../../images/Track3.jpg'
import T4 from '../../images/Track4.png'
import T5 from '../../images/Track5.png'
import T6 from '../../images/Track6.png'
import T7 from '../../images/Track7.png'
import T8 from '../../images/Track8.png'
import T9 from '../../images/Track9.png'
import T10 from '../../images/Track10.png'
import T11 from '../../images/Track11.png'
import { Fade } from 'react-reveal';
import Accordion from 'react-bootstrap/Accordion';

import Modal from 'react-bootstrap/Modal';
import './major.css'

const Major = () => {
    const [show, setShow] = useState(false);
    const [ashow, setAShow] = useState(false);
    const [type, setType] = useState('');
    const [atype, setAType] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAccClose = () => setAShow(false);
    const handleAccShow = () => setAShow(true);


    const handleAccData = () => {
        if (atype === 'BIO') {
            return (<>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>BIOL 101 - Introduction to Biology I</Accordion.Header>
                        <Accordion.Body>
                            <h5>BIOL 101 - Introduction to Biology I</h5>
                            <p>The goals of the two-semester biology introductory sequence are: (1) to provide an understanding of the unifying themes in modern biology, (2) to introduce the diversity of life at all levels of organization, and (3) to illustrate the methods and modes of scientific inquiry currently used in the biological sciences. During the fall semester (BIOL 101) the focus is on fundamental principles of evolution and genetics, whereas in the spring (BIOL 102) the diversity of life, from cells to organisms, is explored. The fall and spring courses do not have to be taken in sequence but both are pre-requisites for all advanced courses in biology.</p>
                            <p><strong>Corequisites:</strong> Must register for lab for BIOL 101.</p>
                            <p><strong>Course Designation/Attribute:</strong> SP</p>
                            <p><strong>Anticipated Terms Offered:</strong> Offered every year.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> BIOL 102 - Introduction to Biology II</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>

            )
        }
        else if (atype == 'CSA') {
        }
    }
    const handleData = () => {
        if (type === 'ADA') {
            return (<>
                <h5>DSCI 105 - Applied Data Analytics</h5>
                <br />
                <br />
                <p>An investigation into the fundamental techniques and practices of data analysis. The primary activities of the course will be a series of lectures and a corresponding series of lab sessions, programming projects, and written assignments. The course will focus on applying tools and techniques to practical problems of analysis, visualization, and discovery and will also introduce the student to a suite of modern tools for data analysis. <em>Formally DSCI 205.</em></p>
                <p>Prerequisites for this course require a grade of C- or better.</p>
                <p><strong>Prerequisites:</strong></p>
                <ul>
                    <li><a href="http://example.com/GEOG110">GEOG 110</a> or <a href="http://example.com/ECON160">ECON 160</a> or <a href="http://example.com/SOC202">SOC 202</a> or <a href="http://example.com/PSYC105">PSYC 105</a> or <a href="http://example.com/PSCI107">PSCI 107</a> or <a href="http://example.com/QBUS110">QBUS 110</a> or <a href="http://example.com/MATH120">MATH 120</a> or <a href="http://example.com/MATH124">MATH 124</a> and <a href="http://example.com/CSCI120">CSCI 120</a> (Minimum grade of C- required for pre-reqs)</li>
                </ul>
                <p><strong>Course Designation/Attribute:</strong> POP</p>
                <p><strong>Anticipated Terms Offered:</strong> Spring 2021</p>
            </>
            )
        }
        else if (type == 'CSA') {
            return (
                <>
                    <h5>DSCI 122 - Mathematical Foundations of Data Science</h5>
                    <br />
                    <br />
                    <p>This course introduces fundamental mathematical concepts, theorems, and tools used in data science and machine learning, including linear algebra, analytic geometry, matrix decompositions, partial derivatives, optimization, and if time permits, probability and statistics. This is a standard lecture course with a lab component. The lab will be used for small group work and, if time permits, introduction to programming in R (one of the widely used programming languages in data science).</p>
                    <p><strong>Prerequisites:</strong> <a href="http://example.com/MATH121">MATH 121 - Calculus II</a> or <a href="http://example.com/MATH125">MATH 125 - Honors Calculus II</a></p>
                    <p><strong>Anticipated Terms Offered:</strong> Fall 2021</p>
                </>
            )
        }
    }
    return (<>
        <div className='major-bg-red'>
            <Fade bottom duration={800}>
                <div className='text-center'>
                    <h1 className='h1-content'>Major</h1>
                    <p className='p-content'>The Data Science major at Clark University equips students with the skills to analyze and interpret complex data through a combination of statistical, computational, and domain-specific knowledge. Emphasizing practical experience and interdisciplinary learning, the program prepares graduates for diverse careers in the rapidly evolving field of data science.</p>
                </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">About the Major Program</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            Clark offers a large variety of academic programs and supports students to pursue their
                            interests through combinations of majors and minors in their chosen fields. Furthermore, our
                            student clubs and growing data science alumni community provide enrichment activities,
                            mentoring and networking opportunities. <br /><br />
                            With our holistic curriculum, experiential learning, and supportive community, students
                            acquire the knowledge, skills, and experiences needed to thrive in dynamic and data-driven
                            industries, secure top-tier placements and unlock opportunities for advanced degrees. They
                            are well prepared for making transformative changes in today’s data-rich world.
                            <br /><br />
                            Our data science major includes 8 units of core requirements and 6 units of electives. Each
                            student must choose one of 11 tracks and at least four courses from the track, including at
                            least one at the 200-level, as part of their electives. The core courses cover mathematical and
                            computing foundations and teach general knowledge and skills broadly application to data
                            science work in all disciplines. The tracks are designed to complement the core courses and
                            help students develop domain knowledge and connect it to data science.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">Explore Core Courses</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            Clark University's Data Science program include statistical analysis, machine learning, data visualization, and programming. These foundational classes ensure students develop essential skills to tackle real-world data challenges effectively</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>DS105 - Applied Data Analytics</h5>
                        <p>An investigation into the fundamental techniques and practices of data analysis, this course focuses on applying tools and techniques to practical problems of analysis, visualization, and discovery.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }} onClick={() => { setType('ADA'); handleShow() }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }} onClick={() => { setType('CSA'); handleShow() }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class='card-c'>
                        <div class='img-container-c'>
                            <img src='https://images.unsplash.com/photo-1610932793632-6ba00bdffee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTA2NzkwMDh8&ixlib=rb-4.0.3&q=85' width='336' />
                        </div>
                        <div class='tags-c'>
                            <ul>
                                <li>POP</li>
                            </ul>
                        </div>
                        <h5>Embracing Minimalism</h5>
                        <p>From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.</p>
                        <p className='text-center' style={{ cursor: 'pointer' }}>Explore</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">Explore Major Elective Tracks</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            The Data Science program at Clark University offers specialized tracks in Business Analytics, Computational Data Science, and Environmental Data Science. These tracks allow students to tailor their education to specific career goals and industry demands, enhancing their expertise in targeted areas of data science.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={Biology} class="w-100 mb-4" />
                    <h5>Biology Track</h5>
                    <p>Analyze biological data, study genetics.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn" onClick={() => { handleAccShow(); setAType("BIO") }}>Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T2} class="w-100 mb-4" />
                    <h5>Biochemistry Track</h5>
                    <p>Merge data science with biochemistry research.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T3} class="w-100 mb-4" />
                    <h5>Computer Science Track</h5>
                    <p>Study algorithms, artificial intelligence, robotics, computer vision, theory, and more.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T4} class="w-100 mb-4" />
                    <h5>Economics Track</h5>
                    <p>Explore game theory, statistical analysis and other areas where economics and data science combine.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T5} class="w-100 mb-4" />
                    <h5>Environmental Science Track</h5>
                    <p>Utilize DS to and address environmental issues like climate change, pollution & conservation.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T6} class="w-100 mb-4" />
                    <h5>Game Design Track</h5>
                    <p>Learn how to use data analysis to improve game mechanics, user experience, and overall game design.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T7} class="w-100 mb-4" />
                    <h5>Geography Track</h5>
                    <p>Gain the skills and experience in GIS and use data science to interpret what you find.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T8} class="w-100 mb-4" />
                    <h5>Management Track</h5>
                    <p>Analyze business analytics for decision-making.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T9} class="w-100 mb-4" />
                    <h5>Mathematics Track</h5>
                    <p>Apply math to model sports, health, business.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container mb-4'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T10} class="w-100 mb-4" />
                    <h5>Physics Track</h5>
                    <p>Analyze physical phenomena, develop simulations.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T11} class="w-100 mb-4" />
                    <h5>Psychology Track</h5>
                    <p>Study human behavior using data-driven approaches.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={Biology} class="w-100 mb-4" />
                    <h5>Biology Track</h5>
                    <p>Analyze biological data, study genetics.<br /><br /></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {handleData()}
            </Modal.Body>
        </Modal>

        <Modal show={ashow} onHide={handleAccClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {handleAccData()}
            </Modal.Body>
        </Modal>
    </>
    )

}
export default Major