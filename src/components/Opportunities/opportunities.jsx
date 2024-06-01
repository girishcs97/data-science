import React from "react";
import { Link } from 'react-router-dom';
import './opportunities.css'
import OCE from '../../images/on-campus employment.jpg';
import OCE1 from '../../images/on-campus employment1.jpg';
import OCE2 from '../../images/Student clubs.jpg';
import OCE3 from '../../images/study abroad.jpg';
import OCE4 from '../../images/Academic-Conference.jpg';
import career from '../../images/careers-and-internships.jpg';
import career1 from '../../images/career1.jpeg';
import career2 from '../../images/career2.jpeg';
import google from '../../images/google.png';
import hubspot from '../../images/hubspot.png';
import BoozAllen from '../../images/BoozAllen.png';
import pwc from '../../images/pwc.png';
import oracle from '../../images/oracle.jpg';
import gs from '../../images/goldman sachs.png';
import wayfair from '../../images/Wayfair.png';
import tripadvisor from '../../images/tripadvisor.png';
import wsu from '../../images/wsu.jpeg';
import dell from '../../images/dell.jpeg';
import Fade from "react-reveal/Fade";

const Opportunities = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div className="container margin-top-40" id='opportunities'>
            <div className="row">
            <Fade bottom duration={800}>
                <div className='col-md-5'>
                    <p className="display-1">Opportunities and Services</p>
                </div>
                <div className='col-md-7'>
                    <p className="display-p">Clark University’s data science program offers diverse opportunities for students, including on-campus employment, participation in student clubs, attendance at conferences, and study abroad programs.</p>
                </div>
                </Fade>
            </div>
            <div className="margin-top-40">
            <Fade right duration={800}>
                <img src={OCE} className="image-cov" alt="Custom"/>
            </Fade>
            </div>
            <div className="container opp-content">
                Welcome to Clark University’s esteemed Data Science program, offering a plethora of enriching opportunities for aspiring data scientists. Through our comprehensive curriculum and dedicated faculty, you’ll delve into cutting-edge research. Engage in on-campus employment, contributing to practical projects that enhance your skills. Participate in Data Science student clubs, fostering collaborative learning and networking with peers.
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                    <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={OCE1} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={800}>
                        <h2 style={{ lineHeight: '1.182em' }}>Explore On-Campus Employment</h2>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>On-campus opportunities at Clark University are crucial as they provide data science students with practical experience, fostering their professional growth. Being teaching assistants, research assistants, or working with ITS Help Desk and Academic Technology Services allows students to apply their knowledge, develop essential skills, and become valuable contributors to the university community. Stay vigilant for exciting employment opportunities on Handshake!</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn" onClick={() => openInNewTab('https://www.clarku.edu/offices/student-employment/')}>Office of Student Employment</button>
                        </div>
                    </Fade>
                    </div>
                </div>
                
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={1000}>
                        <h2 style={{ lineHeight: '1.182em' }}>Student Clubs</h2>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Clark University’s student clubs are vibrant, active, and resourceful, offering a welcoming environment for students to get involved. Joining these clubs allows students to forge meaningful friendships, build a sense of community, and engage in various enriching activities and events.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn" onClick={() => openInNewTab('https://www.clarku.edu/life-at-clark/student-clubs-and-organizations/')}>STUDENT CLUBS AND ORGANIZATION</button>
                        </div>
                    </Fade>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                        <Fade bottom duration={800}>
                                <img src={OCE2} className='img-re-class margin-top-32' />
                            </Fade>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                        <Fade bottom duration={800}>
                                <img src={OCE3} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={800}>
                        <h2 style={{ lineHeight: '1.182em' }}>Study Abroad</h2>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Embark on a transformative global experience during your undergraduate studies. Explore a multitude of credit-bearing opportunities beyond the Worcester campus, tailored to align with your academic and co-curricular interests. Our 50+ approved programs worldwide offer a diverse range of options, from Spanish immersion in Latin America to internships in Europe. Let us assist you in finding the perfect educational opportunity that goes beyond the boundaries of Worcester, enriching your academic journey and broadening your horizons.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn" onClick={() => openInNewTab('https://www.clarku.edu/offices/studyabroad/')}>Office of Study Abroad</button>
                        </div>
                    </Fade>
                    </div>
                </div>

            </div>
            <div className='container mart-top mb-4'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={800}>
                        <h2 style={{ lineHeight: '1.182em' }}>Academic Conferences</h2>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>We strongly support students’ passion for knowledge and provide them with opportunities to attend national and international conferences relevant to their interests. As part of this commitment, we offer scholarships to send motivated students to prestigious events like the Grace Hopper Celebration and the Tapia conference. Embracing these experiences, students expand their horizons, foster academic growth, and make invaluable connections in their fields of interest.</p>
                        <br />
                        {/* <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn">ACAMEDIC CONFERENCES</button>
                        </div> */}
                    </Fade>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                        <Fade bottom duration={800}>
                                <img src={OCE4} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-5 mr-1'>
                            <Fade bottom duration={800}>
                                <img src={career1} className='' style={{'width':'634px'}}/>
                            </Fade>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={800}>
                        <h2 style={{ lineHeight: '1.182em' }}>Career and Internship Opportunities</h2>
                        <div class="line mg-bottom-32px"></div>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>At Clark, we offer an array of career and internship opportunities designed to cultivate your talents and drive your aspirations forward. Whether you're a seasoned professional seeking new challenges or a student eager to gain hands-on experience, we invite you to explore the possibilities and join our vibrant community of changemakers.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn" onClick={() => openInNewTab('https://www.clarku.edu/offices/career-connections-center/')}>VISIT THE CENTER</button>
                        </div>
                    </Fade>
                    </div>
                </div>

            </div>

            <div className='container mart-top mb-4'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                    <div class="line mg-bottom-32px"></div>
                    <Fade bottom duration={800}>
                        <h2 style={{ lineHeight: '1.182em' }}>Clark Funding for Internships</h2>
                        <div class="line mg-bottom-32px"></div>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>At Clark, we understand the importance of hands-on experience in shaping the future of our students. That's why we offer funding opportunities to support internships and experiential learning opportunities for our students. Our internship funding programs are designed to remove financial barriers and empower students to pursue valuable professional experiences that complement their academic studies.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn" onClick={() => openInNewTab('https://www.clarku.edu/offices/career-connections-center/gain-experience/funding-opportunities/')}>PURSUE FUNDING</button>
                        </div>
                    </Fade>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                            <Fade bottom duration={800}>
                                <img src={career2} className='mt-2' />
                            </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="customer-section margin-top-40 mb-4">
            <Fade bottom duration={800}>
                <h2>OUR KEY RECRUITERS</h2>
                <div className="customer-logos">
                    <Link to='https://about.google/intl/en_us/'>
                        <img src={google} alt="google" /></Link>
                    <Link to='https://www.hubspot.com/'>
                        <img src={hubspot} alt="hubspot" /></Link>
                    <Link to='https://www.boozallen.com/'>
                        <img src={BoozAllen} alt="BoozAllen" /></Link>
                    <Link to='https://www.pwc.com/us/en.html'>
                        <img src={pwc} alt="pwc" href='https://www.pwc.com/us/en.html' /></Link>
                    <Link to='https://www.oracle.com/'>
                        <img src={oracle} alt="oracle" /></Link>
                    <Link to='https://www.goldmansachs.com/'>
                        <img src={gs} alt="gs" /></Link>
                    <Link to='https://www.aboutwayfair.com/'>
                        <img src={wayfair} alt="wayfair" /></Link>
                    <Link to='https://www.tripadvisor.com/'>
                        <img src={tripadvisor} alt="tripadvisor" /></Link>
                    <Link to='https://www.worcester.edu/'>
                        <img src={wsu} alt="wsu" /></Link>
                    <Link to='https://www.dell.com/en-us'>
                        <img src={dell} alt="dell" /></Link>
                </div>
            </Fade>
            </div> */}
        </div>

    )
}
export default Opportunities;