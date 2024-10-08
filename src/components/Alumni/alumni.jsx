import React from "react";
import Garryn from '../../images/Garryn.jpg';
import Nguyen from '../../images/Nguyen.jpg';
import './alumni.css';
import Fade from "react-reveal/Fade";

const Alumni = () => {
    return (
        <div className="container margin-top-40">
            <div className="text-center mb-4">
                <p className="subtitle">Alumni Spotlight</p>
                {/* <p style={{ 'color': '#333333', fontSize: '16px' }}>From trailblazing entrepreneurs to influential policymakers, our alumni continue to make waves and inspire</p> */}
            </div>
            <div class="row margin-top-40 mb-4">
                <div className="col-sm-1 d-flex align-items-center">
                    {/* <BsFillCaretLeftFill className='svg-ic' /> */}
                </div>
                <div class="col-sm-5">
                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-2"><img src={Garryn} className='prof-logo mt-3' /></div>
                                <div class="col-sm-10">
                                    <p class="card-text testinomial">“The urban geography and economics double major
                                        developed a comprehensive operations analysis for his
                                        honors thesis that outlines ways to improve Worcester
                                        Regional Transit Authority bus servicewhile reducing
                                        operating costs.”</p>
                                    <h6 className="test-name mb-2">Class of M.S. ’22, Geography</h6>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-sm-5">

                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-2"><img src={Nguyen} className='prof-logo mt-3' /></div>
                                <div class="col-sm-10">
                                    <p class="card-text testinomial">“The supportive community, inspirational faculty,
                                        interdisciplinary curriculum, and various research
                                        opportunities at Clark have fostered my growth as
                                        a data science student.”</p>
                                    <h6 className="test-name">Class of ’23, Computer Science</h6>
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
