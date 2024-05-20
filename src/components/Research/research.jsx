import React from "react";
import './research.css'
import Img1 from '../../images/img-1.jpg';
import Img2 from '../../images/img-2.jpg';
import research from '../../images/Research.jpg';

const Research = () => {
    return (
        <div className="container margin-top-40" id='research'>
            <div className="row">
                <div className='col-md-5'>
                    <p className="display-1">Research</p>
                </div>
                <div className='col-md-7'>
                    <p className="display-p">Clark University’s data science program offers diverse opportunities for students, including on-campus employment, participation in student clubs, attendance at conferences, and study abroad programs.</p>
                </div>
            </div>
            <div className="margin-top-40">
                <img src={research} className="image-cov" />
            </div>
            <div className="container opp-content">
            Welcome to Clark Research: Pioneering Discoveries, Shaping Tomorrow. As leaders in scientific exploration and innovation, we are dedicated to pushing the boundaries of knowledge and driving positive change in the world. Explore our website to learn more about our groundbreaking research projects and the talented team behind them.
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-5 mr-1'>
                                <img src={Img1} className='img-1-class mt-4' />
                            </div>
                            <div className='col-md-6'>
                                <img src={Img2} className='img-1-class mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <div class="line mg-bottom-32px"></div>
                        <h2 style={{ lineHeight: '1.182em' }}>Data Science Research In Biology</h2>
                        <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Welcome to the forefront of scientific exploration where biology meets data science. At Clark Research, our Data Science Research in Biology team is dedicated to leveraging cutting-edge computational techniques and big data analytics to unravel the mysteries of the living world. By harnessing the power of data, we are driving groundbreaking discoveries, revolutionizing healthcare, and advancing our understanding of biological systems.</p>
                        <br />
                    </div>
                </div>

            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                        <div class="line mg-bottom-32px"></div>
                        <h2 style={{ lineHeight: '1.182em' }}>Data Science Research In Biochemistry</h2>
                        <p><b>by Charles Jakobsche | Jakobsche Group</b></p>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Welcome to the forefront of interdisciplinary research where biochemistry intersects with data science. At Clark Research, our Data Science Research in Biochemistry team is dedicated to pushing the boundaries of scientific discovery by integrating biochemical experimentation with advanced computational techniques. Through our innovative approach, we aim to unravel the complexities of biomolecular processes, accelerate drug discovery, and address critical challenges in healthcare and biotechnology.</p>
                        <br />
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Img1} className='img-1-class img-11-class margin-top-40' />
                            </div>
                            <div className='col-md-6'>
                                <img src={Img2} className='img-2-class mt-2' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-5 mr-1'>
                                <img src={Img1} className='img-1-class mt-4' />
                            </div>
                            <div className='col-md-6'>
                                <img src={Img2} className='img-1-class mt-4' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <div class="line mg-bottom-32px"></div>
                        <h2 style={{ lineHeight: '1.182em' }}>Data Science Research In Computer Science</h2>
                        <p><b>by Shuo Niu | Department of Computer Science</b></p>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Welcome to the forefront of computational innovation where computer science intersects with data science. At Clark Research, our Data Science Research in Computer Science team is dedicated to advancing the frontiers of knowledge and technology through cutting-edge research in data-driven algorithms, artificial intelligence, and machine learning. By harnessing the power of data, we aim to tackle complex challenges, drive innovation, and shape the future of computing.</p>
                        <br />
                    </div>
                </div>

            </div>
            <div className='container mart-top mb-4'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                        <div class="line mg-bottom-32px"></div>
                        <h2 style={{ lineHeight: '1.182em' }}>Data Science Research In Economics</h2>
                        <p><b>by Junfu Zhang | Department of Economics</b></p>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Welcome to the forefront of economic research where data science meets economic theory. At Clark Research, our Data Science Research in Economics team is dedicated to advancing our understanding of complex economic phenomena, informing policy decisions, and driving innovation in economic analysis. Through the integration of economic theory, statistical methods, and computational techniques, we aim to tackle pressing economic challenges and contribute to evidence-based policymaking.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn">LEARN MORE</button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Img1} className='img-1-class img-11-class margin-top-40' />
                            </div>
                            <div className='col-md-6'>
                                <img src={Img2} className='img-2-class mt-2' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Research;