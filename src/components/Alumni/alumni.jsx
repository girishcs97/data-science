import React from "react";
import Lihan from '../../images/li-han.jpg';
import './alumni.css';

const Alumni = () => {
    return (
        <div className="container margin-top-40">
            <div className="text-center mb-4">
                <p className="subtitle">Alumni Spotlight</p>
                <h2 className="display-title mb-2">What our students say</h2>
                <p style={{ 'color': '#4b5b70', fontSize: '16px' }}>From trailblazing entrepreneurs to influential policymakers, our alumni continue to make waves and inspire</p>
            </div>
            <div class="row margin-top-40 mb-4">
                <div className="col-sm-1">
                </div>
                <div class="col-sm-5">
                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-2"><img src={Lihan} className='prof-logo mt-4' /></div>
                                <div class="col-sm-10"> <p class="card-text testinomial">“Duis purus, fames dictum amet ut sem neque vitae mattis penatibus dolor accumsan id aliquet volutpat fermentum diam ullamcorper lorem urna fermentum bibendum pharetra.”</p>
                                    <h6 className="test-name">Gitesh Sagvekar</h6>
                                </div></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="card-con">
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-2"><img src={Lihan} className='prof-logo mt-4' /></div>
                                <div class="col-sm-10"> <p class="card-text testinomial">“Duis purus, fames dictum amet ut sem neque vitae mattis penatibus dolor accumsan id aliquet volutpat fermentum diam ullamcorper lorem urna fermentum bibendum pharetra.”</p>
                                    <h6 className="test-name">Girish C S</h6>
                                </div></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">

                </div>
            </div>
        </div>
    )
}
export default Alumni
