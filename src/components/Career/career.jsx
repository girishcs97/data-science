import React from "react";
import { Link } from 'react-router-dom';
import './career.css'
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

const Career = () => {
    return (
        <div className="container margin-top-40" id='research'>
            <div className="row">
                <div className='col-md-5'>
                    <p className="display-1">Careers</p>
                </div>
                <div className='col-md-7'>
                    <p className="display-p">we offer exciting career and internship opportunities for individuals who are passionate about making a difference and driving positive change. Whether you're seeking a full-time position or looking to gain hands-on experience through an internship, we invite you to explore the possibilities and join our dynamic team.</p>
                </div>
            </div>
            <div className="margin-top-40">
                <img src={career} className="image-cov" />
            </div>
            <div className="container opp-content">
                With a degree in data science from Clark, you'll possess the analytical skills and technical expertise needed to excel in a variety of industries. Whether you're interested in uncovering insights from complex datasets as a data scientist, designing machine learning algorithms as a machine learning engineer, or providing strategic guidance as a business intelligence analyst, your opportunities are boundless.
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <div className='col-md-5 mr-1'>
                                <img src={career1} className='' style={{'width':'634px'}}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>

                        <h2 style={{ lineHeight: '1.182em' }}>Career and Internship Opportunities</h2>
                        <div class="line mg-bottom-32px"></div>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>At Clark, we offer an array of career and internship opportunities designed to cultivate your talents and drive your aspirations forward. Whether you're a seasoned professional seeking new challenges or a student eager to gain hands-on experience, we invite you to explore the possibilities and join our vibrant community of changemakers.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn">VISIT THE CENTER</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container mart-top mb-4'>
                <div className='row'>
                    <div className='col-md-6 mart-top'>
                        <h2 style={{ lineHeight: '1.182em' }}>Clark Funding for Internships</h2>
                        <div class="line mg-bottom-32px"></div>
                        <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>At Clark, we understand the importance of hands-on experience in shaping the future of our students. That's why we offer funding opportunities to support internships and experiential learning opportunities for our students. Our internship funding programs are designed to remove financial barriers and empower students to pursue valuable professional experiences that complement their academic studies.</p>
                        <br />
                        <div className='d-flex flex-row'>
                            <button className="btn btn-outline-danger custom-btn">PURSUE FUNDING</button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={career2} className='mt-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-section margin-top-40">
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
            </div>
        </div>

    )
}

export default Career