import React, { useEffect } from 'react';
import Cover from '../../images/explearning.jpg';
import Img1 from '../../images/research-1.jpg';
import ST from '../../images/Spotify.jpeg';
import WC from '../../images/watch.jpeg';
import Img2 from '../../images/research-2.jpg';
import Img3 from '../../images/research-3.jpg';
import Img4 from '../../images/research-4.jpg';
import pr5 from '../../images/pr5.jpg';
import pr6 from '../../images/pr6.jpg';
import pr7 from '../../images/pr7.jpg';
import pr8 from '../../images/pr8.jpg';
import ECF from '../../images/ECF.jpg';
import SW from '../../images/SM.jpg';
import { Fade } from 'react-reveal';

const Learning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (<>

        <div className="container margin-top-20" id='learning'>
            <div className="row">
                <Fade bottom duration={800}>
                    <div className='col-md-5'>
                        <p className="display-1">Experiential Learning</p>
                    </div>
                    <div className='col-md-7'>
                        <p className="display-p">Clark University values experiential learning and offers diverse opportunities for students to develop and apply hands-on skills through coursework, faculty-guided research, community service projects, self-designed initiatives,  competitions, and more. Data Science students have gained and demonstrated strong skills through these projects, and this page highlights some of their work.</p>
                    </div>
                </Fade>
            </div>
            <div className="margin-top-20">
                <Fade right duration={800}>
                    <img src={Cover} className="image-cov" alt="Custom" />
                </Fade>
            </div>
            {/* <div className="container opp-content">
                Clark encourages community engagement and supports undergraduate research through faculty-led and student-led projects. Capstone projects in many academic programs allow students to integrate their learning into comprehensive, real-world applications. Study abroad and domestic study away programs immerse students in diverse cultural and professional environments, while the Clark Entrepreneurship Initiative and related courses foster innovation and entrepreneurial skills. These experiential learning initiatives ensure that Clark students graduate with the practical skills and experiences necessary to thrive in their careers and as active citizens.
            </div>

            <div className="text-center margin-top-40">
                <p className="subtitle mt-4">Experiential Learning Projects</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>The students in the Data Science undergraduate program have demonstrated exceptional dedication and skill in their projects.</p>
            </div> */}
            <div className='container mart-top'>
                <div className='row'>
                    <Fade bottom duration={800}>
                        <div className='col-md-6 mart-top'>
                            <div class="line mg-bottom-32px"></div>
                            <h2 style={{ lineHeight: '1.182em' }}>Modeling Stormwater at Clark University</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>Winning the top award in Spring 2024 Clackathon, this project uses a LiDAR point map of Clark University from the US Geological Survey to simulate rainwater through a simple algorithm. Random points are chosen in the selected area, and a rainwater stream is simulated. This process is repeated thousands of times, and the resulting streams are compiled into a two-dimensional map showing the overall trend of rainwater flow on campus. This map can then be used to show choke points in water flow, analyze potential stormwater pollutants entering city drains, and display the efficiency of existing campus infrastructure to manage stormwater.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={SW} className='img-re-class' style={{ marginTop: '60px' }} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey mt-4">
                <div className='container mart-top mb-4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={ST} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={1000}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Spotify Music Recomendation System using EDA</h2>
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This system utilizes Spotify song data from 2019 to 2022 to uncover trends in "song popularity" through detailed visualizations, achieved via Exploratory Data Analysis (EDA) to identify pertinent features. By applying K-means clustering, the system groups genres based on their audio characteristics, highlighting genre similarities and enabling nuanced song recommendations. Leveraging SpotiPy, a Python library for accessing Spotify's music library API, the system analyzes users' listening histories to recommend songs with similar audio features, aligning with their preferences. Regular updates with new data ensure the recommendations remain current and relevant.</p>
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
                            <h2 style={{ lineHeight: '1.182em' }}>Analyzing Secondhand Watch Market Data</h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This project focuses on scraping an e-commerce website for detailed information on secondhand watches from a diverse array of brands. It collects data on various aspects, including age, price point, and general style or purpose. By encompassing a wide range of watch characteristics and categories, the project aims to provide a comprehensive analysis of the secondhand watch market, offering valuable insights into the diversity and trends within this sector.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={WC} className='img-re-class' style={{ marginTop: '60px' }} />
                            </Fade>
                        </div>
                    </div>
                </div>
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
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>The project utilized box plot graphs to illustrate the profit distribution from various band performances, revealing a primary profit range between -$15,000 and $10,000, highlighting the financial outcomes' central spread.</p>
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
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>Utilized Bookshop's website to collect data on a range of young adult books, employing Selenium for the web scraping aspect.Exploring critical questions about the factors contributing to the popularity of young adult books, the characteristics of books that often sell out, and the role of publishing companies within the industry.</p>
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
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This project delved into the dynamics of global earthquakes, utilizing data analysis and visualization techniques to explore changes in earthquake magnitudes over time, seasonal frequency patterns, geographical hotspots, and the relationship between an earthquake's location (latitude and longitude), its depth, and magnitude.</p>
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
                            <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>A survey analysis on voting and civic duty among 147 incarcerated individuals in Massachusetts, using a CSV file for data collected during the summer, focusing on qualitative responses about voting history, concerns, and the desire to vote.</p>
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


            <div className="bg-grey mt-4">
                <div className='container mart-top mb-4'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='row'>
                                <Fade bottom duration={800}>
                                    <img src={pr5} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={1000}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>2023 Worcester railers teamshot breakdown</h2>
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Will, a member of the Class of 2026, is majoring in Music and Data Science. For his project, he interned with the Worcester Railers, where he collected weekly data on the team's most recent games. He calculated advanced team statistics and player-specific statistics based on their positions.</p>
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
                            <h2 style={{ lineHeight: '1.182em' }}>What Makes an NBA All-Star? </h2>
                            <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Jake, a member of the Class of 2026 majoring in French and Data Science, conducted a project titled "What Makes an NBA All-Star?" In this project, Jake analyzed various traditional and advanced statistics to determine the selection factors for the 2022 NBA All-Star game. He explored questions such as what type of good play leads to selection and whether factors beyond good play influence the selection process</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={pr6} className='img-re-class' style={{ marginTop: '60px' }} />
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
                                    <img src={pr7} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={800}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Predicting March Madness Success from Regular Season Statistics </h2>
                                {/* <p><b>by Shuo Niu | Department of Computer Science</b></p> */}
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Daniel, a member of the Class of 2027 majoring in Geography, embarked on a project titled "Predicting March Madness Success from Regular Season Statistics." His project focused on bracket prediction strategy, where he developed an ordinal regression model to forecast tournament success based on regular season statistics. Daniel's work aimed to enhance predictive accuracy and strategic decision-making in predicting outcomes during March Madness.</p>
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
                            <h2 style={{ lineHeight: '1.182em' }}>A Relationship between betting Money Lines and Fouls in the NBA</h2>
                            {/* <p><b>by Junfu Zhang | Department of Economics</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Ye, a Psychology major from the Class of 2024, conducted a project titled "A Relationship between Betting Money Lines and Fouls in the NBA." In his research, Ye identified a significant correlation between money lines, win probabilities, and fouls drawn and committed specifically for the 2023 Lakers. The study utilized a standardized delta for fouls drawn minus fouls committed on the vertical axis, and a standardized difference between the money lines' implied win probabilities and actual win probabilities (estimated through ESPN simulations) on the horizontal axis. This analysis aimed to uncover insights into how betting odds and in-game fouls are interconnected, offering implications for sports analytics and betting strategies in basketball.</p>
                            <br />
                        </div>
                    </Fade>
                    <div className="col-md-1"></div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={1000}>
                                <img src={pr8} className='img-re-class mt-4' />
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
                                    <img src={ECF} className='img-re-class margin-top-32' />
                                </Fade>
                            </div>
                        </div>
                        <div className='col-md-5 mart-top'>
                            <Fade bottom duration={800}>
                                <div class="line mg-bottom-32px"></div>
                                <h2 style={{ lineHeight: '1.182em' }}>Analyzing Economic Factors Influencing Presidential Reelection </h2>
                                {/* <p><b>by Shuo Niu | Department of Computer Science</b></p> */}
                                <p style={{ textAlign: 'justify', marginTop: '20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>The primary objective of this project is to identify and analyze the economic factors that influence a president's likelihood of reelection. By examining historical data and various economic indicators, the project aims to uncover patterns and correlations that may impact voter behavior and election outcomes. This comprehensive analysis includes factors such as GDP growth, unemployment rates, inflation, stock market performance, and other relevant economic metrics. The project seeks to provide a deeper understanding of how economic conditions shape the political landscape and affect presidential reelection prospects. Through rigorous data analysis and modeling, it strives to offer valuable insights into the interplay between economics and electoral success.</p>
                                <br />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )

}
export default Learning