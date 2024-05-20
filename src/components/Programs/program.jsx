import React from 'react';
import Major from '../../images/major.jpeg';
import './program.css';
import Minor from '../../images/major.jpg';
import { BsArrowRightSquareFill } from "react-icons/bs";
import Concentration from '../../images/concentration.jpeg';

const Program = () => {
    return (
        <div className='container margin-top-40' id={'programs-page'}>
            <div className="text-center mb-4">
                <p className="subtitle mb-2">Undergraduate Program</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>Our Data Science Program offers five tracks of study: computer science, economics, geography/GIS, management, and mathematics.</p>
            </div>
            <div className='row margin-top-40'>
                <div className='col-md-4 mb-4'>
                    <div class="card shadow-02" style={{ "width": "18rem;" }}>
                        <img class="card-img-top" src={Major} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-con-">Major</h5>
                            <p class="card-bod">Data Science distills knowledge from data, combining Statistics, Math, and Computer Science. Applicable to Economics, Business Analytics, GIS, Biology, Chemistry, Physics, and more. Clark offers a Data Science major with diversified tracks.</p>
                            <div class="divider mg---32px"></div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <span className='display-c'>Explore</span>
                                    <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span>
                                </div>
                                <div>
                                    <BsArrowRightSquareFill className='svg-ic' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div class="card shadow-02" style={{ "width": "18rem;" }}>
                        <img class="card-img-top" src={Minor} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-con-">Minor</h5>
                            <p class="card-bod">Our Data Science minor offers fundamental skills in extracting insights from data and blending data science with its applications. Enhance quantitative aspects of diverse disciplines with applicable knowledge and Research</p>
                            <div class="divider mg---32px"></div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <span className='display-c'>Explore</span>
                                    <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Courses</span>
                                </div>
                                <div>
                                    <BsArrowRightSquareFill className='svg-ic' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div class="card shadow-02" style={{ "width": "18rem;" }}>
                        <img class="card-img-top" src={Concentration} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-con-">Concentrations</h5>
                            <p class="card-bod">Discover specialized pathways in DS, including concentrations in business data analytics and geospatial data analytics. Gain expertise in analyzing business insights and interpreting geographic data, opening doors to diverse options</p>
                            <div class="divider mg---32px"></div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <span className='display-c'>Explore</span>
                                    <span className='text-100 medium text-uppercase' style={{ 'color': 'black' }}>Concentrations</span>
                                </div>
                                <div>
                                    <BsArrowRightSquareFill className='svg-ic' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Program