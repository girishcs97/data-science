import React from 'react';
import Program from './program';
import DS1 from '../../images/Data 1.jpg';
import DS2 from '../../images/Global data.jpg';
import growth from '../../images/growth.jpg';
import Img1 from '../../images/research-1.jpg';
import Img2 from '../../images/research-2.jpg';
import Img3 from '../../images/research-3.jpg';
import Img4 from '../../images/research-4.jpg';
import { Fade } from 'react-reveal';
import ChooseUs from '../Chooseus/chooseus';
import Choose from "../../images/programsinfo.png"



const UGProgram = () => {

    return (<>
        <div className=' bg-red'>
            <Fade bottom duration={800}>
                <div className='text-center'>
                    <h1 className='h1-content'>Undergraduate Program</h1>
                    <p className='p-content'>With our holistic curriculum, experiential learning, and supportive community, students acquire the knowledge, skills, and experiences needed to thrive in dynamic and data-driven industries, secure top-tier placements and unlock opportunities for advanced degrees. They are well prepared for making transformative changes in today’s data-rich world.</p>
                </div>
            </Fade>
        </div>
        <div className='container-fluid margin-top-40'>
            <Fade bottom duration={1000}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">Learn about our Program</h2>
                        <br />
                        <p className='p-content' style={{ color: '#333333', textAlign: 'justify', fontSize: '17px' }}>Data is everywhere. Our increasingly global and digitized world produces massive amounts
                            of data every day. Effectively managing and understanding data is essential to all
                            organizations, whether they are in the public, private, or nonprofit arenas. Data science and
                            analyticshelp organizations harness their data and use it to discover knowledge, identify
                            opportunities, and develop solutions, ultimately leading to smarter policies, more efficient
                            and equitable practices, better services, and more inclusive societies.<br /><br />
                            Clark University’s Data Science program provides a comprehensive interdisciplinary
                            education that seamlessly integrates core data science, computer science, and mathematics
                            courses with specialized domain knowledge. The program is supported by many dedicated
                            faculty from diverse partner departments and schools, including Biology, Chemistry,
                            Computer Science, Economics, Environmental Science, Geography, Interactive Media,
                            Management, Mathematics, Psychology, Physics, and Sustainability and Social Justice.<br /><br />
                            We consider Data Science a multifaceted discipline that aligns well with the principles of
                            liberal arts education. We emphasize critical thinking, problem-solving, creativity,
                            communication, and team collaboration skills alongside technical proficiency; and help
                            students develop these skills. In addition, Clark provides excellent opportunities for applying
                            and further enhancing students’ knowledge and skills. At our program, undergraduates have
                            opportunities to work as teaching assistants, research assistants, and participate in projects,
                            competitions, and conferences, frequently under faculty guidance and with funding
                            support.  </p>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </Fade>
        </div>
        <Fade bottom duration={1000}>
            <div className='row margin-top-40'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <div class="line size-150px mg-bottom-28px"></div>
                    <h2 class="display-data"> Why Data Science ?</h2>
                    <br />

                    <div className='container mart-top mb-4'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='row'>
                                    <Fade bottom duration={800}>
                                        <img src={DS1} className='img-re-class margin-top-32' />
                                    </Fade>
                                </div>
                            </div>
                            <div className='col-md-5 mart-top'>
                                <Fade bottom duration={1000}>
                                    <div class="line mg-bottom-32px"></div>
                                    <h2 style={{ lineHeight: '1.182em' }}>Amount of Data Created Daily</h2>
                                    <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>You are on the internet almost daily. You check your email, send replies, maybe browse websites and even click on things. Every move you make online equates to data creation. So, have you ever wondered how much data is created every day? With around 4.66 billion active Internet users worldwide, the data produced daily surpasses the imagination. The statistics below explore how much data is created on the internet each day.</p>
                                    <br />
                                </Fade>
                            </div>
                        </div>
                    </div>


                    <div className="bg-grey mt-4">
                        <div className='container mart-top'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <div className='col-md-6 mart-top'>
                                        <div class="line mg-bottom-32px"></div>
                                        <h2 style={{ lineHeight: '1.182em' }}>Data Creation Growth Projections</h2>
                                        <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>The amount of data generated annually has grown year-over-year since 2010. In fact, it is estimated that 90% of the world's data was generated in the last two years alone.
                                            In the space of 13 years, this figure has increased by an estimated 60x from just 2 zettabytes in 2010.
                                            The 120 zettabytes generated in 2023 are expected to increase by over 150% in 2025, hitting 181 zettabytes.
                                        </p>
                                        <br />
                                    </div>
                                </Fade>
                                <div className="col-md-1"></div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <Fade bottom duration={1000}>
                                            <img src={DS2} className='img-re-class' style={{ marginTop: '60px' }} />
                                        </Fade>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='container mart-top'>
                        <div className='row'>
                            <div className='col-md-7'>
                                <div className='row'>
                                    <Fade bottom duration={800}>
                                        <img src={growth} className='img-re-class margin-top-32' />
                                    </Fade>
                                </div>
                            </div>
                            <div className='col-md-5 mart-top'>
                                <Fade bottom duration={800}>
                                    <div class="line mg-bottom-32px"></div>
                                    <h2 style={{ lineHeight: '1.182em' }}>Projected Growth and Recognized Importance</h2>
                                    {/* <p><b>by Shuo Niu | Department of Computer Science</b></p> */}
                                    <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>Employment in data-related occupations is expected to grow 36% from 2021 to 2031, quicker than the average for all occupations. 95% of businesses cite that managing data is a challenge for their industry. Data Science in the New Economy is a new race for talent in the Fourth Industrial Revolution</p>
                                    <br />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-md-2'></div>
            </div>
        </Fade>
        <div className='container margin-top-40'>
            <ChooseUs />
        </div>
        <div className='container margin-top-40'>
            <Program />
        </div>
        <div className="container-fluid margin-top-40">
            <Fade bottom duration={1000}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div class="line size-150px mg-bottom-28px"></div>
                        <h2 class="display-data">Not sure which option to choose?</h2>
                        <br />
                        <p
                            className="p-content"
                            style={{
                                color: "#333333",
                                textAlign: "justify",
                                fontSize: "17px",
                            }}
                        >
                            Clark University offers a suite of  data science degree programs and courses to serve diverse student interests. We provide a comprehensive interdisciplinary education that seamlessly integrates core courses in data science and foundational courses in computer science and mathematics materials with specialized domain knowledge. The program is supported by dedicated faculty from diverse partner departments and schools, including Biology, Chemistry, Computer Science, Economics, Environmental Science, Geography, Interactive Media, Management, Mathematics, Psychology and Physics. Refer to individual program pages for more information.
                        </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="container text-center margin-top-32 mb-4">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Student's Primary Intrest</th>
                                <th scope="col">Student's Goal with Data Science</th>
                                <th scope="col">Corresponding Programs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Data Science</td>
                                <td>Become a Data professional with Data Science</td>
                                <td>Data Science Major</td>
                            </tr>
                            <tr>
                                <td>Another Field</td>
                                <td>Incorporate data science into the main field</td>
                                <td>Data Science Minor<br/>
                                    Business Data Analytics<br/>
                                    Geospatial Data Analytics<br/>
                                    New Concentrations under development
                                </td>
                            </tr>
                            <tr>
                                <td>Another Field</td>
                                <td>Gain general knowledge and skills in data science</td>
                                <td>Introductory courses such as DS103, 105, 125</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fade>
        </div>

    </>
    )

}
export default UGProgram