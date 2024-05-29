import React from 'react';
import './researchLanding.css';
import Bio from '../../images/picBiology.jpg'

const ResearchLanding = () => {
    return (
        <>
            <div className='container margin-top-40' id={'programs-page'}>
                <div className="text-center mb-4">
                    <p className="subtitle mb-2">Faculty Research</p>
                    <p style={{ fontSize: '16px', marginTop: '20px' }}>Our faculty, representing diverse disciplines, are increasingly integrating data science into their research.</p>
                </div>
                <div class="projcard projcard-blue">
                    <div class="projcard-innerbox">
                        <img class="projcard-img" src={Bio} />
                        <div class="projcard-textbox">
                            <div class="projcard-title">Biology Research</div>
                            <div class="projcard-bar"></div>
                            <div class="projcard-description">Professor Javier Tabima’s research integrates tools and concepts from evolutionary theory, computational biology, genomics, genetics, and plant pathology/mycology. His work focuses on the study of fungal evolution and the development of computational and molecular tools for rapid species identification, population genetics, and the detection of genes of interest. One notable paper connecting to data science is Poppr: an R package for genetic analysis of populations with clonal, partially clonal, and/or sexual reproduction.  Refer to <a href="https://tabima-lab.netlify.app/">Prof. Tabima’s lab page</a> for more information.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ResearchLanding