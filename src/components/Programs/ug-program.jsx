import React from 'react';
import Program from './program';
import Img1 from '../../images/research-1.jpg';
import Img2 from '../../images/research-2.jpg';
import Img3 from '../../images/research-3.jpg';
import Img4 from '../../images/research-4.jpg';
import { Fade } from 'react-reveal';

const UGProgram = () => {
    return (<>
        <div className=' bg-red'>
            <Fade bottom duration={800}>
                <div className='text-center'>
                    <h1 className='h1-content'>Undergraduate Program</h1>
                    <p className='p-content'>Learn data analysis, visualization, and machine learning through a blend of computer science, statistics, and domain knowledge. Graduates are equipped for diverse careers or further studies, with hands-on project experience.</p>
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
                        <p className='p-content' style={{ color: '#4b5b70', textAlign: 'justify', fontSize: '17px' }}>Data is everywhere. Our increasingly global and digitized world produces massive amounts
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
        <div className="container margin-top-40" id='research'>
            <div className="text-center mb-4">
                <p className="subtitle mb-2">Projects</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>The students in the Data Science undergraduate program have demonstrated exceptional dedication and skill in their projects.</p>
            </div>
            <div className="bg-grey mt-4">
                <div className='container mart-top mb-4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={Img1} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={1000}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Profit distribution of band performances</h2>
                                {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>The project utilized box plot graphs to illustrate the profit distribution from various band performances, revealing a primary profit range between -$15,000 and $10,000, highlighting the financial outcomes' central spread.</p>
                                <br />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mart-top'>
                <div className='row'>
                    <Fade bottom duration={800}>
                        <div className='col-md-6 mart-top'>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Analyzing Trends in Young Adult Literature</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Utilized Bookshop's website to collect data on a range of young adult books, employing Selenium for the web scraping aspect.Exploring critical questions about the factors contributing to the popularity of young adult books, the characteristics of books that often sell out, and the role of publishing companies within the industry.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={Img2} className='img-re-class' style={{ marginTop: '60px' }} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey mt-4">
                <div className='container mart-top'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={Img3} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={800}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Exploring Earthquake Patterns</h2>
                                {/* <p><b>by Shuo Niu | Department of Computer Science</b></p> */}
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>This project delved into the dynamics of global earthquakes, utilizing data analysis and visualization techniques to explore changes in earthquake magnitudes over time, seasonal frequency patterns, geographical hotspots, and the relationship between an earthquake's location (latitude and longitude), its depth, and magnitude.</p>
                                <br />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mart-top mb-4'>
                <div className='row'>
                    <Fade bottom duration={800}>
                        <div className='col-md-6 mart-top'>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Understanding Civic Engagement Among Incarcerated Individuals</h2>
                            {/* <p><b>by Junfu Zhang | Department of Economics</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>A survey analysis on voting and civic duty among 147 incarcerated individuals in Massachusetts, using a CSV file for data collected during the summer, focusing on qualitative responses about voting history, concerns, and the desire to vote.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={Img4} className='img-re-class mt-4' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container margin-top-40'>
            <Program />
        </div>

    </>
    )

}
export default UGProgram