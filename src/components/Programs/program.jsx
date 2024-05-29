import React from 'react';
import Major from '../../images/major1.jpg';
import './program.css';
import { useNavigate } from 'react-router-dom'
import Minor from '../../images/minor.jpg';
import { BsArrowRightSquareFill } from "react-icons/bs";
import Concentration from '../../images/concentration.jpeg';
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
                <p style={{ fontSize: '16px', marginTop: '20px' }}>Our Data Science Program offers five tracks of study: computer science, economics, geography/GIS, management, and mathematics.</p>
            </div>
            <div className='row margin-top-40'>
            <div className='col-md-2 mb-4'></div>
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
                                        <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span>
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
                                <h5 class="card-con-">Minor</h5>
                                <p class="card-bod">Our Data Science minor offers fundamental skills in extracting insights from data and blending data science with its applications. Enhance quantitative aspects of diverse disciplines with applicable knowledge and Research</p>
                                <div class="divider mg---32px"></div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-column' style={{ 'cursor': 'pointer' }} onClick={() => openInNewTab('https://catalog.clarku.edu/preview_program.php?catoid=32&poid=6493&returnto=2750&_gl=1*1721qx4*_gcl_au*MTU5MjI1NDY4MC4xNzEyNTQ5MjY4')}>
                                        <span className='display-c'>Explore</span>
                                        <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span>
                                    </div>
                                    <div onClick={() => openInNewTab('https://catalog.clarku.edu/preview_program.php?catoid=32&poid=6493&returnto=2750&_gl=1*1721qx4*_gcl_au*MTU5MjI1NDY4MC4xNzEyNTQ5MjY4')}>
                                        <BsArrowRightSquareFill className='svg-ic' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className='col-md-2 mb-4'></div>
            </div>

        </div>
    )
}
export default Program