import React from "react";
import './research.css'
import Fac from '../../images/transform.jpg';
import Bio from '../../images/picBiology.jpg'
import Img1 from '../../images/Business.jpg';
import Img2 from '../../images/smcity.jpg';
import chem1 from '../../images/chem1.png';
import Img3 from '../../images/CS1.jpg';
import Img from '../../images/CS.jpg';
import JK from '../../images/Jakobsche.png';
import phy from '../../images/physics1.jpg';
import phy2 from '../../images/phy2.jpg';
import geo from '../../images/solar-farm.jpg';
import Img4 from '../../images/economy.png';
import ECO from '../../images/eco.jpg';
import Img5 from '../../images/environmental-science.png';
import evs from '../../images/evs1.jpg';
import Img6 from '../../images/Geography.jpg';
import Img7 from '../../images/Interactive-Media.jpg';
import Img8 from '../../images/Mathematics.jpg';
import psy from '../../images/psy.jpeg';
import research from '../../images/Research.jpg';
import Fade from "react-reveal/Fade";

const Research = () => {
    
    return (
        <div className="container margin-top-20" id='research'>
            <div className="row">
                <Fade bottom duration={800}>
                    <div className='col-md-5'>
                        <p className="display-1">Faculty Research</p>
                    </div>
                    <div className='col-md-7'>
                        <p className="display-p">Our faculty from diverse disciplines are increasingly integrating data science into their research. Some have applied data science methods and developed data analytics tools to enhance their work, while others are still learning data science and exploring potential approaches, contributing to an evolving research environment. Many research groups provide opportunities for undergraduate and graduate students, enriching their learning experiences and broadening their perspectives.</p>
                    </div>
                </Fade>
            </div>
            <div className="margin-top-20">
                <Fade right duration={800}>
                    <img src={Fac} className="image-cov" />
                </Fade>
            </div>
            {/* <div className="container opp-content">
                Welcome to Clark Research: Pioneering Discoveries, Shaping Tomorrow. As leaders in scientific exploration and innovation, we are dedicated to pushing the boundaries of knowledge and driving positive change in the world. Explore our website to learn more about our groundbreaking research projects and the talented team behind them.
            </div> */}
            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Biology</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Bio} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Javier Tabima’s research integrates tools and concepts from evolutionary theory, computational biology, genomics, genetics, and plant pathology/mycology. His work focuses on the study of fungal evolution and the development of computational and molecular tools for rapid species identification, population genetics, and the detection of genes of interest. One notable paper connecting to data science is Poppr: an R package for genetic analysis of populations with clonal, partially clonal, and/or sexual reproduction.  Refer to <a href="https://tabima-lab.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Tabima’s lab page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>School of Business</h2>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Hamidreza Ahady Dolatsara’s research interests include healthcare analytics, finance, and transportation. He utilizes data-driven approaches and machine learning techniques to develop decision-support systems. One notable project involved creating a software tool to predict patient survival probabilities after heart transplants. He also investigates the financial implications of blockchain technology adoption</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img1} className='img-re-class margin-top-40'/>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Jing Zhang’s research interests encompass a variety of topics, including Information Systems and Sustainability, Smart Government and Smart City initiatives, the organizational impact of technology and innovation, and interorganizational knowledge sharing and networking. One notable publication related to data science is entitled A Spatial Analysis of Smart Meter Adoptions: Empirical Evidence from the US Data​. Refer to <a href="https://wordpress.clarku.edu/jizhang/research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Zhang's research page​</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img2} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Chemistry</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={JK} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Charles Jakobsche’s scholarly interests include organic chemistry, chemical biology, health & medicine, data science, and STEM education. He has more than 25 research publications that span a wide variety of chemistry sub-disciplines. Also, he created DiscoverOChem.com, which is a free open-access interactive learning platform for learning organic chemistry. His recent interests have moved him into the field of data science and its application to chemistry education.. Refer to <a href="https://wordpress.clarku.edu/cjakobsche/research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Jakobsche's research page​</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={chem1} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Sharon Huo’s research is in the field of computational biophysics. She studies the allosteric effect in proteins, protein folding/misfolding/aggregation, and protein-ligand interaction using computational approaches. In recent years, one of her research foci has been to develop analysis methods to extract kinetic information from molecular dynamics simulation. Refer to <a href="https://wordpress.clarku.edu/shuo/research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Huo’s research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Computer Science</h2>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Gary Holness’s professional interests include machine learning, pattern recognition, and artificial intelligence. He is actively involved in research and teaching, with a significant focus on developing innovative approaches in these fields. He has also been involved in various initiatives, such as a course development grant for "Internet of Things for Social Good".  Refer to <a href="https://www.garyholness.com/research.html" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Gary's research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img3} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Shuo Niu’s research focuses on human-computer interaction and social computing. His work explores collaborative and community activities in online environments, with a particular interest in video-sharing platforms and the dynamics of user interaction within these spaces. Professor Niu has contributed to understanding substance abuse misinformation on YouTube, how YouTubers help alleviate COVID-19 loneliness, and the impact of ASMR videos on user engagement. His research also includes innovative approaches to assistive technology and inclusive design for users with disabilities​.  Refer to <a href="https://mathcs.clarku.edu/~shniu/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Shuo Niu's personal page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Economics</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={ECO} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Edouard Wemy’s research focuses on macroeconomics and time series analysis, particularly in relation to business cycles and total factor productivity. He emphasizes the role of technological progress in capital equipment. Refer to <a href="https://www.clarku.edu/departments/economics/research/faculty-research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>faculty research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img4} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Junfu Zhang’s research focuses on urban and regional economics, with significant interests in urbanization in China, regional economic development, entrepreneurship, job creation, and racial housing segregation. Refer to <a href="https://wordpress.clarku.edu/juzhang/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Zhang's lab page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Environmental Science</h2>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Prof. Christopher Williams’s expertise is in terrestrial ecosystems, global environmental change, and climate change.   He and his team engage in foundational research science on the climate impacts of forests.  By combining state-of-the-art satellite remote sensing with big data geo-computation, the lab is quantifying the carbon emissions avoided by protecting forests, the removals of carbon with forest growth, and also the important climate impacts of changing surface reflectivity (albedo) that happens with changes in tree cover.  Their work is informing decision makers about where we get the greatest climate benefit from retaining and expanding tree cover, worldwide. Refer to <a href="https://wordpress.clarku.edu/cwilliams/research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Williams’s research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={evs} className='img-re-class margin-top-40'/>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Tim Downs at Clark University specializes in environmental science and engineering, focusing on the interactions between human activities and environmental changes, and their impacts on health, ecosystems, and well-being. His work includes community-centered health system innovation, sustainable development, and environmental justice, using interdisciplinary approaches and collaborating with diverse stakeholders globally. Key projects involve the National Children's Study in Worcester County and community-based interventions for malaria in Kenya.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img5} className='img-re-class margin-top-40'/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Geography</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img6} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Lyndon Estes at Clark University focuses on the drivers and impacts of agricultural change in sub-Saharan Africa. His research employs advanced Earth observation technologies and modeling techniques to improve agricultural mapping and sustainability. He leads projects that aim to address food security, analyze farming practices, and develop high-resolution maps of cropland using machine learning and satellite imaging. Estes' work is crucial in understanding how agriculture in Africa is influenced by and adapts to climate change.  Refer to <a href="https://www.clarku.edu/departments/geography/research/faculty-research/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>faculty research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={geo} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor John Rogan specializes in landscape ecology, fire ecology, optical remote sensing, and GIScience. His research includes monitoring land cover changes, mapping wildfire burn severity, and studying forest types using multi-season Landsat data. He also directs the Human-Environment Regional Observatory (HERO) program, where his team investigates various environmental issues, such as the impact of solar farm development on forests in Rhode Island. Refer to <a href="https://clarknow.clarku.edu/2021/04/21/geography-research-documents-solar-farms-negative-effects-on-landscape/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Rogan's research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Interactive Media</h2>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Ulm has extensive experience as an emergent media artist, game developer, and educator of interactive media. Their work focuses on the intersection of games, artificial intelligence, and XR (Extended Reality) development, particularly in the context of games for change and experimental games for various platforms including PC, mobile, and VR. Refer to <a href="" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>faculty research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img7} className='img-re-class margin-top-40'/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Mathematics</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={Img8} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Mike Satz’s ongoing research includes the development of player ranking systems and statistical models that provide frameworks for understanding and predicting sports performance. Satz has a strong interest in Bayesian models and computational methods to handle chaotic raw data, aiming to make it usable and insightful for sports analytics.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Physics</h2>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Barbara Capogrosso Sansone is engaged in significant research in the field of physics at Clark University. Her work spans various areas, including condensed matter physics, quantum mechanics, and statistical physics. She focuses particularly on theoretical and computational approaches to understanding complex systems, such as quantum many-body systems and materials under extreme conditions. Professor Capogrosso Sansone's research contributes to advancing fundamental understanding in physics and has implications for applications in materials science, quantum technologies, and beyond. Her contributions underscore Clark University's commitment to cutting-edge research in physics and interdisciplinary scientific exploration. Refer to <a href="https://wordpress.clarku.edu/bcapogrosso/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Sansone's research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={phy} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-7 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Arshad Kudrolli at Clark University is known for his research in experimental physics, particularly in the areas of soft matter physics and complex systems. His work often focuses on understanding the behavior of granular materials, such as sand and powders, under various conditions. Professor Kudrolli's research involves experimental techniques to explore phenomena like pattern formation, avalanches, and the dynamics of granular flows. His contributions to the field have implications for understanding natural processes, industrial applications, and the physics of complex systems. Refer to <a href="https://physics.clarku.edu/~akudrolli/index.html" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Arshad Kudrolli's research page</a> for more information. </p>
                            <br />
                        </Fade>
                    </div>
                    <div className='col-md-5'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={phy2} className='img-re-class margin-top-40'/>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mart-top mb-4'>
            <h2 style={{ lineHeight: '1.182em' }}>Psychology</h2>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='row'>
                            <Fade bottom duration={800}>
                                <img src={psy} className='img-re-class margin-top-40' />
                            </Fade>
                        </div>
                    </div>
                    <div className='col-md-5 mart-top'>
                        <Fade bottom duration={1000}>
                            <div class="line mg-bottom-32px"></div>
                            {/* <h2 style={{ lineHeight: '1.182em' }}>Biology Research</h2> */}
                            {/* <p><b>by Javir Tabima Restrepo | Tabima Lab</b></p> */}
                            <p style={{ textAlign: 'justify', marginTop:'20px', lineHeight: '1.667em', color: '#4b5b70', fontSize: '16px', fontWeight: '400' }}>Professor Andrew Stewart’s research focuses on intergroup relations, specifically the consequences of ideological norms (e.g., sexism, anti-immigrant beliefs) for violence, discrimination, and inequality and also on how to disrupt those norms in order to prevent violence (e.g., sexual assault prevention) and encourage hierarchy-attenuating behavior (e.g., collective action). He also has a strong interest in advanced statistical methods, including multilevel modeling, structural equation modeling, and dyadic and group data analyses. Refer to <a href="https://andrew-stewart.socialpsychology.org/research" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>Professor Stewart's research page</a> for more information.</p>
                            <br />
                        </Fade>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Research;