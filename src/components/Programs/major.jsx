import React from 'react';
import Biology from '../../images/biology.png'
import T2 from '../../images/Track2.png'
import T3 from '../../images/Track3.jpg'
import T4 from '../../images/Track4.png'
import T5 from '../../images/Track5.png'
import T6 from '../../images/Track6.png'
import T7 from '../../images/Track7.png'
import T8 from '../../images/Track8.png'
import T9 from '../../images/Track9.png'
import T10 from '../../images/Track10.png'
import T11 from '../../images/Track11.png'
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
                        <h2 class="display-data">Explore Major Elective Tracks</h2>
                        <br />
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>
                            The Data Science program at Clark University offers specialized tracks in Business Analytics, Computational Data Science, and Environmental Data Science. These tracks allow students to tailor their education to specific career goals and industry demands, enhancing their expertise in targeted areas of data science.</p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={Biology} class="w-100 mb-4" />
                    <h5>Biology Track</h5>
                    <p>Analyze biological data, study genetics.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T2} class="w-100 mb-4" />
                    <h5>Biochemistry Track</h5>
                    <p>Merge data science with biochemistry research.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T3} class="w-100 mb-4" />
                    <h5>Computer Science Track</h5>
                    <p>Study algorithms, artificial intelligence, robotics, computer vision, theory, and more.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T4} class="w-100 mb-4" />
                    <h5>Economics Track</h5>
                    <p>Explore game theory, statistical analysis and other areas where economics and data science combine.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T5} class="w-100 mb-4" />
                    <h5>Environmental Science Track</h5>
                    <p>Utilize DS to and address environmental issues like climate change, pollution & conservation.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T6} class="w-100 mb-4" />
                    <h5>Game Design Track</h5>
                    <p>Learn how to use data analysis to improve game mechanics, user experience, and overall game design.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T7} class="w-100 mb-4" />
                    <h5>Geography Track</h5>
                    <p>Gain the skills and experience in GIS and use data science to interpret what you find.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T8} class="w-100 mb-4" />
                    <h5>Management Track</h5>
                    <p>Analyze business analytics for decision-making.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T9} class="w-100 mb-4" />
                    <h5>Mathematics Track</h5>
                    <p>Apply math to model sports, health, business.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
        <div className='container mb-4'>
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div class="tpn_card">
                    <img src={T10} class="w-100 mb-4" />
                    <h5>Physics Track</h5>
                    <p>Analyze physical phenomena, develop simulations.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={T11} class="w-100 mb-4" />
                    <h5>Psychology Track</h5>
                    <p>Study human behavior using data-driven approaches.</p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
                <div class="tpn_card">
                    <img src={Biology} class="w-100 mb-4" />
                    <h5>Biology Track</h5>
                    <p>Analyze biological data, study genetics.<br/><br/></p>
                    <a href="javascript:;" class="btn tpn_btn">Explore</a>
                </div>
            </div>
        </div>
    </>
    )

}
export default Major