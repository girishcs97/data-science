import React from "react";
import './opportunities.css'
import OCE from '../../images/on-campus employment.jpg';
import OCE1 from '../../images/on-campus employment1.jpg';
import OCE2 from '../../images/Student clubs.jpg';
import OCE3 from '../../images/study abroad.jpg';
import OCE4 from '../../images/Academic-Conference.jpg';
import Fade from "react-reveal/Fade";

const Opportunities = () => {
    return (
        <div className="container margin-top-40" id='opportunities'>
            <div className="row">
            <Fade bottom duration={800}>
                <div className='col-md-5'>
                    <p className="display-1">Opportunities</p>
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
                            <button className="btn btn-outline-danger custom-btn">Office of Student Employment</button>
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
                            <button className="btn btn-outline-danger custom-btn">STUDENT CLUBS AND ORGANIZATION</button>
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
                            <button className="btn btn-outline-danger custom-btn">Office of Study Abroad</button>
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
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn">ACAMEDIC CONFERENCES</button>
                        </div>
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
        </div>

    )
}
export default Opportunities;