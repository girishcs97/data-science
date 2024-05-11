import React from 'react';
import Img1 from '../../images/img-1.jpg';
import Img2 from '../../images/img-2.jpg';
import Lihan from '../../images/li-han.jpg';
import './mission.css';

const Mission = () => {
    return (
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
                    <h2 style={{ lineHeight: '1.182em' }}>Transforming data knowledge for ethical innovation.</h2>
                    <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70' }}>Clark University's Data Science Program offers a dynamic curriculum focused on advanced data analysis, machine learning, and statistical methods. Students engage in interdisciplinary research, gaining practical skills to address real-world challenges. Graduates emerge as ethical data leaders driving innovation in diverse industries.</p>
                    <br />
                    <div className='d-flex flex-row'>
                        <div>
                            <img src={Lihan} className='prof-logo' />
                        </div>
                        <div style={{ marginLeft: '15px' }}>
                            <p className='prof-name'>Li Han</p>
                            <p className='prof-title'>Program Director of Data Science</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Mission