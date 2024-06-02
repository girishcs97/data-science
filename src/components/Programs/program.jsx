import React from 'react';
import Major from '../../images/major1.jpg';
import './program.css';
import { useNavigate } from 'react-router-dom'
import Minor from '../../images/minor.jpg';
import { BsArrowRightSquareFill } from "react-icons/bs";
import ExpLearn from '../../images/exp-learn.png';
import { Fade } from 'react-reveal';

const Program = () => {
    const history = useNavigate();
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <div className='container margin-top-40' id={'programs-page'}>
            <div className="text-center mb-4">
                <p className="subtitle mb-2">Undergraduate Program</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>Our Data Science Program offers 11 tracks of study: Computer Science, Economics, Geography/GIS, Management, Biology, Biochemistry, Environmental Science, Game Design, Psychology, Mathematics and General Electives.</p>
            </div>
            <div className='row margin-top-40'>
                <Fade bottom duration={800}>
                    <div className='col-md-4 mb-4'>
                        <div class="card shadow-02" style={{ "width": "18rem;" }}>
                            <img class="card-img-top p-4" src={Major} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-con-">Major</h5>
                                <p class="card-bod text-justify">Our data science major includes 8 units of core requirements coursework and 6 units of electives. Each
                                    student must choose one of 11 tracks and at least four courses from the track, including at
                                    least one at the 200-level, as part of their electives.</p>
                                <div class="divider mg---32px"></div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-column' style={{ 'cursor': 'pointer' }} onClick={() => { history("/major") }}>
                                        <span className='display-c'>Explore</span>
                                        {/* <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span> */}
                                    </div>
                                    <div onClick={() => { history("/major") }}>
                                        <BsArrowRightSquareFill className='svg-ic' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Fade>
                <Fade bottom duration={1000}>
                    <div className='col-md-4 mb-4'>
                        <div class="card shadow-02" style={{ "width": "18rem;" }}>
                            <img class="card-img-top" src={Minor} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-con-">Minor and Concentrations</h5>
                                <p class="card-bod">Our Data Science minor offers fundamental skills in extracting insights from data and blending data science with its applications. Enhance quantitative aspects of diverse disciplines with applicable knowledge and Research</p>
                                <div class="divider mg---32px"></div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-column' style={{ 'cursor': 'pointer' }} onClick={() => { history("/minor") }}>
                                        <span className='display-c'>Explore</span>
                                        {/* <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span> */}
                                    </div>
                                    <div onClick={() => { history("/minor") }}>
                                        <BsArrowRightSquareFill className='svg-ic' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade bottom duration={1000}>
                    <div className='col-md-4 mb-4'>
                        <div class="card shadow-02" style={{ "width": "18rem;" }}>
                            <img class="card-img-top" src={ExpLearn} alt="Card image cap" style={{maxHeight:'280px'}}/>
                            <div class="card-body">
                                <h5 class="card-con-">Experiential Learning</h5>
                                <p class="card-bod"> Our experiential learning opportunities provide hands-on experience in real-world settings. Engage in internships, co-ops, research projects, and community service to apply your knowledge and skills in practical environments.</p>
                                <div class="divider mg---32px"></div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-column' style={{ 'cursor': 'pointer' }} onClick={() => { history("/explearning") }}>
                                        <span className='display-c'>Explore</span>
                                        {/* <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span> */}
                                    </div>
                                    <div onClick={() => { history("/explearning") }}>
                                        <BsArrowRightSquareFill className='svg-ic' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>

        </div>
    )
}
export default Program