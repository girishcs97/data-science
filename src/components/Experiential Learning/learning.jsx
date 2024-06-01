import React from 'react';
import Cover from '../../images/explearning.jpg';
import Img1 from '../../images/research-1.jpg';
import Img2 from '../../images/research-2.jpg';
import Img3 from '../../images/research-3.jpg';
import Img4 from '../../images/research-4.jpg';
import { Fade } from 'react-reveal';

const Learning = () => {

    return (<>

        <div className="container margin-top-40" id='learning'>
            <div className="row">
                <Fade bottom duration={800}>
                    <div className='col-md-5'>
                        <p className="display-1">Experiential Learning</p>
                    </div>
                    <div className='col-md-7'>
                        <p className="display-p">Clark University places a strong emphasis on experiential learning, integrating hands-on experiences with academic coursework to enhance student learning and personal development. Through the Liberal Education and Effective Practice (LEEP) program, students are prepared for successful lives and careers by combining rigorous liberal arts education with real-world engagement.</p>
                    </div>
                </Fade>
            </div>
            <div className="margin-top-40">
                <Fade right duration={800}>
                    <img src={Cover} className="image-cov" alt="Custom" />
                </Fade>
            </div>
            <div className="container opp-content">
                Clark encourages community engagement and supports undergraduate research through faculty-led and student-led projects. Capstone projects in many academic programs allow students to integrate their learning into comprehensive, real-world applications. Study abroad and domestic study away programs immerse students in diverse cultural and professional environments, while the Clark Entrepreneurship Initiative and related courses foster innovation and entrepreneurial skills. These experiential learning initiatives ensure that Clark students graduate with the practical skills and experiences necessary to thrive in their careers and as active citizens.
            </div>

            <div className="text-center margin-top-40">
                <p className="subtitle mt-4">Experiential Learning Projects</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>The students in the Data Science undergraduate program have demonstrated exceptional dedication and skill in their projects.</p>
            </div>
            <div className="bg-grey mt-4">
                <div className='container mart-top mb-4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={Img1} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={1000}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Profit distribution of band performances</h2>
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>The project utilized box plot graphs to illustrate the profit distribution from various band performances, revealing a primary profit range between -$15,000 and $10,000, highlighting the financial outcomes' central spread.</p>
                                <br />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <Fade bottom duration={800}>
                        <div className='col-md-6 mart-top'>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Analyzing Trends in Young Adult Literature</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Utilized Bookshop's website to collect data on a range of young adult books, employing Selenium for the web scraping aspect.Exploring critical questions about the factors contributing to the popularity of young adult books, the characteristics of books that often sell out, and the role of publishing companies within the industry.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={Img2} className='img-re-class' style={{ marginTop: '60px' }} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey mt-4">
                <div className='container mart-top'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={Img3} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={800}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Exploring Earthquake Patterns</h2>
                                {/* <p><b>by Shuo Niu | Department of Computer Science</b></p> */}
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>This project delved into the dynamics of global earthquakes, utilizing data analysis and visualization techniques to explore changes in earthquake magnitudes over time, seasonal frequency patterns, geographical hotspots, and the relationship between an earthquake's location (latitude and longitude), its depth, and magnitude.</p>
                                <br />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mart-top mb-4'>
                <div className='row'>
                    <Fade bottom duration={800}>
                        <div className='col-md-6 mart-top'>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Understanding Civic Engagement Among Incarcerated Individuals</h2>
                            {/* <p><b>by Junfu Zhang | Department of Economics</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>A survey analysis on voting and civic duty among 147 incarcerated individuals in Massachusetts, using a CSV file for data collected during the summer, focusing on qualitative responses about voting history, concerns, and the desire to vote.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={Img4} className='img-re-class mt-4' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )

}
export default Learning