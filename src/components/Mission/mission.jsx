import React from 'react';
import Img1 from '../../images/transform.jpeg';
import './mission.css';
import { Fade } from 'react-reveal';

const Mission = () => {
    return (
        <div className='container mart-top'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='row'>
                        {/* <div className='col-md-5 mr-1'> */}
                        <Fade bottom duration={800}>
                            <img src={Img1} className='img-1-class mt-4' />
                            </Fade>
                        {/* </div> */}
                    </div>
                </div>
                <div className='col-md-5 mart-top-1'>
                    <div class="line mg-bottom-32px"></div>
                    <h2 style={{ lineHeight: '1.182em' }}>Transforming data knowledge for ethical innovation.</h2>
                    <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333' }}>Clark University's Data Science Program offers a dynamic curriculum focused on advanced data analysis, machine learning, and statistical methods. Students engage in interdisciplinary research, gaining practical skills to address real-world challenges. Graduates emerge as ethical data leaders driving innovation in diverse industries.</p>
                    <br />
                </div>
            </div>

        </div>
    )
}
export default Mission