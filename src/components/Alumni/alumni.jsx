import React from "react";
import Lihan from '../../images/li-han.jpg';
import './alumni.css';
import Fade from "react-reveal/Fade";

const Alumni = () => {
    return (
        <div className="container margin-top-40">
            <div className="text-center mb-4">
                <p className="subtitle">Alumni Spotlight</p>
                <h2 className="display-title mb-2">What our students say</h2>
                <p style={{ 'color': '#4b5b70', fontSize: '16px' }}>From trailblazing entrepreneurs to influential policymakers, our alumni continue to make waves and inspire</p>
            </div>
            <div class="row margin-top-40 mb-4">
                <div className="col-sm-1 d-flex align-items-center">
                    {/* <BsFillCaretLeftFill className='svg-ic' /> */}
                </div>
                <div class="col-sm-5">
                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-12">
                                     <p class="card-text testinomial">“The urban geography and economics double major
                                        developed a comprehensive operations analysis for his
                                        honors thesis that outlines ways to improve Worcester
                                        Regional Transit Authority bus servicewhile reducing
                                        operating costs.”</p>
                                    <h6 className="test-name">Class of M.S. ’22</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-sm-5">

                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-12">
                                     <p class="card-text testinomial">“The supportive community, inspirational faculty,
                                        interdisciplinary curriculum, and various research
                                        opportunities at Clark have fostered my growth as
                                        a data science student.”</p>
                                    <h6 className="test-name">Class of ’23</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-1 d-flex align-items-center">
                    {/* <BsFillCaretRightFill className='svg-ic' /> */}
                </div>
            </div>
        </div>
    )
}
export default Alumni
