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
                <p style={{ fontSize: '16px', marginTop: '20px' }}>Data Science is an exciting and rapidly growing field that intersects with nearly every discipline, offering valuable tools that contribute to advancements across society. At Clark, we recognize students' diverse interests in data science and offer a suite of programs and courses to meet those needs. Whether students are interested in majoring in data science or pursuing another field while integrating data science into their studies and careers, our program provides a place for them. With a high demand for graduates with data science skills, students benefit from flexible pathways and engaging courses, allowing them to customize their data science journey to align with their passions and career goals.</p>
            </div>
            <div className='row margin-top-40'>
                <Fade bottom duration={800}>
                    <div className='col-md-4 mb-4'>
                        <div class="card shadow-02" style={{ "width": "18rem;" }}>
                            <img class="card-img-top p-4" src={Major} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-con-">Major</h5>
                                <p class="card-bod text-justify">Our interdisciplinary major includes core courses that cover general data science knowledge, skills, and tools, along with specialized tracks to help students develop domain expertise. We currently offer 11 tracks, including STEM disciplines, business, economics, environmental science, game design, geography, and psychology, with more tracks under development.</p>
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
                                <h5 class="card-con-">Minor and Concentrations (i.e. Interdisciplinary Minors)</h5>
                                <p class="card-bod">These programs provide essential data science knowledge and skills, complementing other majors and enhancing students' ability to work with data and information across various disciplines.</p>
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
                                <p class="card-bod"> Students gain hands-on experience through courses and a variety of projects, such as faculty-guided research, community partnerships, and self-designed initiatives.</p>
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