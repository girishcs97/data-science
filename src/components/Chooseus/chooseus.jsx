import React from 'react'
import './choose.css'
import vqt from '../../images/vqt.jpg'
import ila from '../../images/ILA.jpeg'
import ola from '../../images/ola.jpeg'
import etj from '../../images/etj.jpeg'
import Logo from '../../images/chooseus.jpg'

const ChooseUs = () => {
    return (
        <>
            <div className="container">
                <div className="text-left mb-2-8 mb-lg-6">
                    <div className="line size-150px mg-bottom-28px"></div>
                    <h2 className="display-data">Why Study Data Science at Clark?</h2>
                    <br />
                    <p
                        className="p-content"
                        style={{
                            color: "#4b5b70",
                            textAlign: "justify",
                            fontSize: "17px",
                        }}
                    >
                        Study Data Science at Clark to master versatile quantitative analysis techniques, benefit from interdisciplinary collaborations in a liberal arts research environment, and leverage professional opportunities and a supportive alumni network for career success.
                    </p>
                </div>
                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                        <div className="pr-md-3">
                            <div className="text-center text-sm-right mb-2-9">
                                <div className="mb-4">
                                    <img src={vqt} alt="..." className="rounded-circle" />
                                </div>
                                <h4 className="sub-info">Versatile quantitative techniques</h4>
                                <p className="display-30 mb-0"> Learn approaches and techniques that are widely applicable to quantitative analyses in almost every discipline.</p>
                            </div>
                            <div className="text-center text-sm-right">
                                <div className="mb-4">
                                    <img src={etj} alt="..." className="rounded-circle" />
                                </div>
                                <h4 className="sub-info">Expertise for top jobs</h4>
                                <p className="display-30 mb-0">Gain the expertise and knowledge to produce high-quality work, secure jobs at top companies or admission to leading graduate schools, and change our increasingly data-driven world.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="">
                            <img src={Logo} alt="..." className="rounded-circle why-choose-center-image" /> 
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="pl-md-3">
                            <div className="text-center text-sm-left mb-2-9">
                                <div className="mb-4">
                                    <img src={ila} alt="..." className="rounded-circle" />
                                </div>
                                <h4 className="sub-info">Interdisciplinary liberal arts</h4>
                                <p className="display-30 mb-0">Study this emerging field in a small liberal arts research university with diverse participating programs and strong interdisciplinary collaborations.</p>
                            </div>

                            <div className="text-center text-sm-left">
                                <div className="mb-4">
                                    <img src={ola} alt="..." className="rounded-circle" />
                                </div>
                                <h4 className="sub-info">On-campus professional and alumni network</h4>
                                <p className="display-30 mb-0">Benefit from on-campus professional opportunities and join a supportive network of students and alumni dedicated to helping each other succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChooseUs