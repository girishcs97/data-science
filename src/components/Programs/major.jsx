import React from 'react';
import Biology from '../../images/biology.png'
import { Fade } from 'react-reveal';

const Major = () => {
    return (<>
        <div className='major-bg-red'>
            <Fade bottom duration={800}>
                <div className='text-center'>
                    <h1 className='h1-content'>Major</h1>
                    <p className='p-content'>The Data Science major at Clark University equips students with the skills to analyze and interpret complex data through a combination of statistical, computational, and domain-specific knowledge. Emphasizing practical experience and interdisciplinary learning, the program prepares graduates for diverse careers in the rapidly evolving field of data science.</p>
                </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">About the Major Program</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            Clark offers a large variety of academic programs and supports students to pursue their
                            interests through combinations of majors and minors in their chosen fields. Furthermore, our
                            student clubs and growing data science alumni community provide enrichment activities,
                            mentoring and networking opportunities. <br /><br />
                            With our holistic curriculum, experiential learning, and supportive community, students
                            acquire the knowledge, skills, and experiences needed to thrive in dynamic and data-driven
                            industries, secure top-tier placements and unlock opportunities for advanced degrees. They
                            are well prepared for making transformative changes in today’s data-rich world.
                            <br /><br />
                            Our data science major includes 8 units of core requirements and 6 units of electives. Each
                            student must choose one of 11 tracks and at least four courses from the track, including at
                            least one at the 200-level, as part of their electives. The core courses cover mathematical and
                            computing foundations and teach general knowledge and skills broadly application to data
                            science work in all disciplines. The tracks are designed to complement the core courses and
                            help students develop domain knowledge and connect it to data science.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">Explore Major Tracks</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            The Data Science program at Clark University offers specialized tracks in Business Analytics, Computational Data Science, and Environmental Data Science. These tracks allow students to tailor their education to specific career goals and industry demands, enhancing their expertise in targeted areas of data science.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container margin-top-40'>
            <div className='row'>
                <div className='col-md-3'>
                    <Fade bottom duration={800}>
                    <div className="card shadow-02" style={{ "width": "100%" }}>
                        <img className="card-img-top" src={Biology} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                        <div class="explore-programs-card-content">
                            <h5 class="">Biology Track</h5>
                            <p class="card-cont">Analyze biological data, study genetics.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='col-md-3'>
                    <Fade bottom duration={1000}>
                    <div className="card shadow-02" style={{ "width": "100%" }}>
                        <img className="card-img-top" src={Biology} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                        <div class="explore-programs-card-content">
                            <h5 class="">Biology Track</h5>
                            <p class="card-cont">Analyze biological data, study genetics.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='col-md-3'>
                    <Fade bottom duration={1200}>
                    <div className="card shadow-02" style={{ "width": "100%" }}>
                        <img className="card-img-top" src={Biology} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                        <div class="explore-programs-card-content">
                            <h5 class="">Biology Track</h5>
                            <p class="card-cont">Analyze biological data, study genetics.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className='col-md-3'>
                    <Fade bottom duration={1400}>
                    <div className="card shadow-02" style={{ "width": "100%" }}>
                        <img className="card-img-top" src={Biology} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                        <div class="explore-programs-card-content">
                            <h5 class="">Biology Track</h5>
                            <p class="card-cont">Analyze biological data, study genetics.</p>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    </>
    )

}
export default Major