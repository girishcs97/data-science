import React from "react";
import Fac1 from "../../images/Li Han.jpg";
import Fac2 from "../../images/Javier.jpg";
import Fac3 from "../../images/Charles.png";
import Fac4 from "../../images/Edouard.jpg";
import Fac5 from "../../images/Christopher.jpeg";
import Fac6 from "../../images/Terrasa-Ulm.jpg";
import Fac7 from "../../images/Lyndon.png";
import Fac8 from "../../images/Hamidreza.jpeg";
import Fac9 from "../../images/Michael.jpg";
import Fac10 from "../../images/Barbara.jpg";
import Fac11 from "../../images/Andrew.jpeg";
import Fac12 from "../../images/Yelena.jpg";
import Fac13 from "../../images/Amir-Aazami.jpg";
import Fac14 from "../../images/Kenneth-Basye.jpg";
import Fac15 from "../../images/Michael-Boyer.jpg";
import Fac16 from "../../images/Mary-Ellen-Boyle.jpg";
import Fac17 from "../../images/Paul-Cotnoir.jpg";
import Fac18 from "../../images/timothy-downs.jpg";
import Fac19 from "../../images/Elliot Epstein.jpeg";
import Fac20 from "../../images/jacqueline-geoghegan.jpg";
import Fac21 from "../../images/Frederic-Green.jpg";
import Fac22 from "../../images/gary-holness.jpg";
import Fac24 from "../../images/Aghil-Alaee-Khangha.jpg";
import Fac25 from "../../images/Arshad Kudroli.jpeg";
import Fac26 from "../../images/Ali-Maalaoui.jpg";
import Fac27 from "../../images/John-Magee.jpg";
import Fac28 from "../../images/Ranjan Mukhopadhyay.jpg";
import Fac29 from "../../images/Gideon Maschler.jpeg";
import Fac30 from "../../images/Thomas-Murphy.jpg";
import Fac31 from "../../images/Shuo Niu.jpeg";
import Fac32 from "../../images/Olufemi-Odegbile.jpg";
import Fac33 from "../../images/Alex-Petroff.jpg";
import Fac34 from "../../images/Robert-Gilmore-Pontius.jpg";
import Fac35 from "../../images/Robert Ream.jpeg";
import Fac36 from "../../images/John-Rogan.jpg";
import Fac37 from "../../images/morgan-laurent-ruelle.jpg";
import Fac38 from "../../images/Florencia.jpeg";
import Fac39 from "../../images/Inshik-Seol.jpg";
import Fac40 from "../../images/Peter-Story.jpg";
import Fac41 from "../../images/no image.jpg";
import Fac42 from "../../images/Catalin Veghes.jpeg";
import Fac43 from "../../images/Zhenyang-Tang.jpg";
import Fac44 from "../../images/Jing-Zhang.jpg";
import Fac45 from "../../images/Junfu-Zhang.jpg";
import Shuo from "../../images/Shuo.png";
import Agosta from "../../images/Agosta.png";
import Fade from "react-reveal/Fade";
import "./faculty.css";

const Faculty = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container margin-top-20" id="opportunities">
      <div className="row">
        <div className="col-md-5">
          <p className="display-1">Meet our Faculty</p>
        </div>
        <div className="col-md-7">
          <p className="display-p">
            Our diverse and talented faculty and staff are committed
            to excellence in teaching, research, and student support. They bring expertise, passion, and innovation to our
            university community, shaping the future of education and discovery.
          </p>
        </div>
        {/* <section id="about-me">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="about-me-box">
                                    <div className="row">
                                        <div className="col-md-4 col-xs-12">
                                            <img className="max-width-xs" src={Fac1} />
                                        </div>
                                        <div className="col-md-8 col-xs-12">
                                            <h6 className='mt-4 prof-name' style=
                                                {{ fontSize: '28px' }} onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/li-han/')}>Li Han​</h6>
                                            <div class="line size-52px grow"></div>
                                            <div class="text-uppercase mt-2">Director, Data Science <br/> Professor, Computer Science</div>
                                            <p className="display-p" style={{ marginLeft: '0px',textAlign:'justify',paddingRight:'15px' }}>Li Han obtained her Ph.D. in Computer Science from Texas A&M University, College Station, in 2000. She arrived at Clark in 2002, after completing her postdoc at Carnegie Mellon University. She is a Professor of Computer Science and currently serves as the Director of the Program in Data Science, one of the newest and growing interdisciplinary programs at Clark. <br />
                                                <br />
                                                Professor Han's doctoral study was in robotics, specifically dexterous manipulation and motion planning. At Clark, she had done research on robotics and computational study of protein folding, in collaboration with faculty from Mathematics and Chemistry, and with funding support from NSF and NIH. Her current research interest focuses on computational protein study and data science.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        <Fade bottom duration={800}>
          <div className="row margin-top-20">
            <h1 className="margin-bottom-35">Interdisciplinary Steering Committee</h1>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac1} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/li-han/"
                  )
                }
              >
                Li Han, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Director, Data Science <br /> Professor, Computer Science
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac2} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/javier-tabima-restrepo/"
                  )
                }
              >
                Javier Tabima Restrepo, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Biology
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac8} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/hamidreza-ahady-dolatsara/"
                  )
                }
              >
                Hamidreza Ahady Dolatsara, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Assistant Professor, <br />
                Business
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac3} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/charles-jakobsche/"
                  )
                }
              >
                Charles Jakobsche, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Chemistry
              </div>
            </div>
<div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac4} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/edouard-wemy/"
                  )
                }
              >
                Edouard Wemy, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Economics
              </div>
            </div>
<div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac5} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/christopher-williams/"
                  )
                }
              >
                Christopher Williams, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Director, Environmental Science
                <br />
                Professor, Geography{" "}
              </div>
            </div>
 <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac7} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/lyndon-estes/"
                  )
                }
              >
                Lyndon Estes, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Geography
              </div>
            </div>
 <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac19} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/elliot-epstein/"
                  )
                }
              >
                Elliot Epstein, M.S.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
              Assistant Teaching Professor, BECKER SCHOOL OF DESIGN/TECH
              </div>
            </div>
 <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac9} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/michael-satz/"
                  )
                }
              >
                Michael Satz, M.S.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Teaching Professor, <br />
                Mathematics
              </div>
            </div>
<div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac10} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/barbara-capogrosso-sansone/"
                  )
                }
              >
                Barbara Capogrosso Sansone, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Physics
              </div>
            </div>
 <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac11} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/andrew-stewart/"
                  )
                }
              >
                Andrew Stewart, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                
                Associate Professor, <br />
                Psychology
              </div>
            </div>


            <h1 className="margin-bottom-35">Program Faculty</h1>
            <h2 className="margin-bottom-35">Biology</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac2} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/javier-tabima-restrepo/"
                  )
                }
              >
                Javier Tabima Restrepo, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Biology
              </div>
            </div>

            <h2 className="margin-bottom-35">Business</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac8} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/hamidreza-ahady-dolatsara/"
                  )
                }
              >
                Hamidreza Ahady Dolatsara, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Assistant Professor, <br />
                Business
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac39} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/inshik-seol/"
                  )
                }
              >
                Inshik Seol, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Business
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac43} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/zhenyang-tang/"
                  )
                }
              >
                Zhengyang Tang, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Business
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac44} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/jing-zhang/"
                  )
                }
              >
                Jing Zhang, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Professor, Business
              </div>
            </div>
            
            <h2 className="margin-bottom-35">Chemistry</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac3} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/charles-jakobsche/"
                  )
                }
              >
                Charles Jakobsche, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Chemistry
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Shuo} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/shuanghong-huo/"
                  )
                }
              >
                Shuanghong Huo, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Chemistry</div>
            </div>
            <h2 className="margin-bottom-35">Computer Science</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac1} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/li-han/"
                  )
                }
              >
                Li Han, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Director, Data Science <br /> Professor, Computer Science
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac14} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/kenneth-basye/"
                  )
                }
              >
                Kenneth Basye, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Professor of Practice, Computer Science
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac22} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/gary-holness/"
                  )
                }
              >
                Gary Holness, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Computer Science
              </div>
            </div>
          
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac31} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/shuo-niu/"
                  )
                }
              >
                Shuo Niu, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Assistant Professor, Computer Science
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac42} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/catalin-veghes/"
                  )
                }
              >
                Catalin Veghes, M.S.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
              Visiting Assistant Teaching Professor, Computer Science
              </div>
            </div>
           
            
            

            <h2 className="margin-bottom-35">Economics</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac4} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/edouard-wemy/"
                  )
                }
              >
                Edouard Wemy, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Economics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac20} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/jacqueline-geoghegan/"
                  )
                }
              >
                Jackie Geoghegan, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Economics</div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac45} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/junfu-zhang/"
                  )
                }
              >
                Junfu Zhang, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Professor, Economics
              </div>
            </div>
            <h2 className="margin-bottom-35">Environmental Science</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac5} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/christopher-williams/"
                  )
                }
              >
                Christopher Williams, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Director, Environmental Science
                <br />
                Professor, Geography{" "}
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac18} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/timothy-downs/"
                  )
                }
              >
                Tim Downs, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Professor, Sustainability and
                <br /> Social Justice
              </div>
            </div>
            <h2 className="margin-bottom-35">Geography</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac7} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/lyndon-estes/"
                  )
                }
              >
                Lyndon Estes, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Geography
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac12} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/yelena-ogneva-himmelberger/"
                  )
                }
              >
                Yelena Ogneva-Himmelberger, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Professor, <br />
                Sustainability and Social Justice
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac34} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/robert-pontius/"
                  )
                }
              >
                Gil Pontius, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Geography</div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac36} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/john-rogan/"
                  )
                }
              >
                John Rogan, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Geography</div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac37} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/morgan-ruelle/"
                  )
                }
              >
                Morgan Ruelle, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Assistant Professor, Sustainability and Social Justice
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac38} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/florencia-sangermano/"
                  )
                }
              >
                Florencia Sangermano, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Assistant Professor, Geography
              </div>
            </div>
            
            <h2 className="margin-bottom-35">Interactive Media</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac19} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/elliot-epstein/"
                  )
                }
              >
                Elliot Epstein, M.S.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Assistant Teaching Professor, BECKER SCHOOL OF DESIGN/TECH
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac17} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/paul-cotnoir/"
                  )
                }
              >
                Paul Cotnoir, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Dean, Becker School of Design/Tech <br /> Professor of Practice,
                Becker School of Design/Tech
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac6} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/terrasa-ulm/"
                  )
                }
              >
                Terrasa Ulm, M.F.A.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
              Professor of Practice, BECKER SCHOOL OF DESIGN/TECH
              </div>
            </div>
            <h2 className="margin-bottom-35">Mathematics</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac9} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/michael-satz/"
                  )
                }
              >
                Michael Satz, M.S.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Teaching Professor, <br />
                Mathematics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac13} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/amir-babak-aazami/"
                  )
                }
              >
                Amir Aazami, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Mathematics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac24} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/aghil-alaee-khangha/"
                  )
                }
              >
                Aghil Alaee Khangha, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Assistant Professor, Mathematics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac26} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/ali-maalaoui/"
                  )
                }
              >
                Ali Maalaoui, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Mathematics
              </div>
            </div>
            <h2 className="margin-bottom-35">Physics</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac10} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/barbara-capogrosso-sansone/"
                  )
                }
              >
                Barbara Capogrosso Sansone, Ph.D.​
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Physics
              </div>
            </div>
            
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Agosta} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/Charles-Agosta/"
                  )
                }
              >
                Charles Agosta, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Physics</div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac15} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/michael-boyer/"
                  )
                }
              >
                Michael Boyer, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Physics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac25} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/arshad-kudrolli/"
                  )
                }
              >
                Arshad Kudrolli, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">Professor, Physics</div>
            </div>
           
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac28} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/ranjan-mukhopadhyay/"
                  )
                }
              >
                Ranjan Mukhopadhyay, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Associate Professor, Physics
              </div>
            </div>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac33} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/alexander-petroff/"
                  )
                }
              >
                Alexander Petroff, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                Assistant Professor, Physics
              </div>
            </div>

            <h2 className="margin-bottom-35">Psychology</h2>
            <div className="col-md-3 margin-bottom-35">
              <div className="img-wrapper">
                <img src={Fac11} className="image-cover" />
              </div>
              <h6
                className="mt-4 prof-name"
                onClick={() =>
                  openInNewTab(
                    "https://www.clarku.edu/faculty/profiles/andrew-stewart/"
                  )
                }
              >
                Andrew Stewart, Ph.D.
              </h6>
              <div class="line size-52px grow"></div>
              <div class="text-uppercase mt-2">
                <em>Primary Contact</em>
                <br />
                Associate Professor, <br />
                Psychology
              </div>
            </div>

            {/* <div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac16} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/mary-ellen-boyle/')}>Mary-Ellen Boyle</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Associate Professor, Business <br /> Associate Provost for Special Projects</div>
</div>




<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac21} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/frederic-green/')}>Frederic Green</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Senior Research Scientist, Computer Science</div>
</div>



<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac27} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/john-magee/')}>John Magee</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Dean of the College <br /> Associate Professor, Computer Science</div>
</div>


<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac30} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/thomas-murphy/')}>Tom Murphy</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Associate Professor of Practice, Business</div>
</div>

<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac32} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/olufemi-odegbile/')}>Olufemi Odegbile</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Assistant Professor, Computer Science</div>
</div>


<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac35} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/robert-ream/')}>Robert Ream</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Visiting Assistant Professor, Mathematics</div>
</div>




<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac40} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/peter-story/')}>Peter Story</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Assistant Professor, Computer Science</div>
</div>
<div className='col-md-3 margin-bottom-35'>
    <div className='img-wrapper'>
        <img src={Fac41} className='image-cover' />
    </div>
    <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/natalia-sternberg/')}>Natalia Sternberg</h6>
    <div class="line size-52px grow"></div>
    <div class="text-uppercase mt-2">Professor Emeritus, Mathematics</div>
</div> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Faculty;
