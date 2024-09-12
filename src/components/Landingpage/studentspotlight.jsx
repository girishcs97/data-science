import React from 'react';
import ECF from '../../images/ECF.jpeg';
import SM from '../../images/SM.jpg'
import ST from '../../images/Spotify.jpeg';
import WC from '../../images/watch.jpeg';

const StudentSpotlight = () => {
    return (
        <>
            <div className="text-center mb-4">
                <p className="subtitle mb-2">Student Projects Spotlight</p>
                <p style={{ fontSize: '16px', marginTop: '20px' }}>Highlighting innovative student projects that showcase creativity, technical skill, and real-world impact. </p>
            </div>
            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel" data-interval="10000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                        <div className='container mart-top'>
                            <div className='row'>
                                <div className='col-md-6 mart-top'>
                                    <h2 style={{ lineHeight: '1.182em' }}>Modeling Stormwater at Clark University</h2>
                                    <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>Winning the top award in Spring 2024 Clackathon, this project uses a LiDAR point map of Clark University from the US Geological Survey to simulate rainwater through a simple algorithm. Random points are chosen in the selected area, and a rainwater stream is simulated. This process is repeated thousands of times, and the resulting streams are compiled into a two-dimensional map showing the overall trend of rainwater flow on campus. This map can then be used to show choke points in water flow, analyze potential stormwater pollutants entering city drains, and display the efficiency of existing campus infrastructure to manage stormwater.</p>
                                    <br />
                                </div>
                                <div className="col-md-1"></div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <img src={SM} className='img-re-class' style={{ marginTop: '60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='container mart-top'>
                            <div className='row'>
                                <div className='col-md-6 mart-top'>
                                    <h2 style={{ lineHeight: '1.182em' }}>Spotify Music Recomendation System using EDA</h2>
                                    <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This system utilizes Spotify song data from 2019 to 2022 to uncover trends in "song popularity" through detailed visualizations, achieved via Exploratory Data Analysis (EDA) to identify pertinent features. By applying K-means clustering, the system groups genres based on their audio characteristics, highlighting genre similarities and enabling nuanced song recommendations. Leveraging SpotiPy, a Python library for accessing Spotify's music library API, the system analyzes users' listening histories to recommend songs with similar audio features, aligning with their preferences. Regular updates with new data ensure the recommendations remain current and relevant.</p>
                                    <br />
                                </div>
                                <div className="col-md-1"></div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <img src={ST} className='img-re-class' style={{ marginTop: '60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='container mart-top'>
                            <div className='row'>
                                <div className='col-md-6 mart-top'>
                                    <h2 style={{ lineHeight: '1.182em' }}>Analyzing Secondhand Watch Market Data</h2>
                                    <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>This project focuses on scraping an e-commerce website for detailed information on secondhand watches from a diverse array of brands. It collects data on various aspects, including age, price point, and general style or purpose. By encompassing a wide range of watch characteristics and categories, the project aims to provide a comprehensive analysis of the secondhand watch market, offering valuable insights into the diversity and trends within this sector.</p>
                                    <br />
                                </div>
                                <div className="col-md-1"></div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <img src={WC} className='img-re-class' style={{ marginTop: '60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='container mart-top'>
                            <div className='row'>
                                <div className='col-md-6 mart-top'>
                                    <h2 style={{ lineHeight: '1.182em' }}>Analyzing Economic Factors Influencing Presidential Reelection</h2>
                                    <p style={{ textAlign: 'justify', lineHeight: '1.667em', color: '#333333', fontSize: '16px', fontWeight: '400' }}>The primary objective of this project is to identify and analyze the economic factors that influence a president's likelihood of reelection. By examining historical data and various economic indicators, the project aims to uncover patterns and correlations that may impact voter behavior and election outcomes. This comprehensive analysis includes factors such as GDP growth, unemployment rates, inflation, stock market performance, and other relevant economic metrics. The project seeks to provide a deeper understanding of how economic conditions shape the political landscape and affect presidential reelection prospects. Through rigorous data analysis and modeling, it strives to offer valuable insights into the interplay between economics and electoral success.</p>
                                    <br />
                                </div>
                                <div className="col-md-1"></div>
                                <div className='col-md-5'>
                                    <div className='row'>
                                        <img src={ECF} className='img-re-class' style={{ marginTop: '60px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default StudentSpotlight