import React from 'react';
import Fac1 from '../../images/Li Han.jpg';
import Fac2 from '../../images/Javier.jpg';
import Fac3 from '../../images/Charles.png';
import Fac4 from '../../images/Edouard.jpg';
import Fac5 from '../../images/Christopher.jpeg';
import Fac6 from '../../images/Terrasa-Ulm.jpg';
import Fac7 from '../../images/Lyndon.png';
import Fac8 from '../../images/Hamidreza.jpeg';
import Fac9 from '../../images/Michael.jpg';
import Fac10 from '../../images/Barbara.jpg';
import Fac11 from '../../images/Andrew.jpeg';
import Fac12 from '../../images/Yelena.jpg';
import Fade from "react-reveal/Fade";
import './faculty.css'


const Faculty = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    
    return (
        <div className="container margin-top-40" id='opportunities'>
            <div className="row">
                <div className='col-md-5'>
                    <p className="display-1">Meet our Staff</p>
                </div>
                <div className='col-md-7'>
                    <p className="display-p">Explore our diverse and talented faculty and staff who are committed to excellence in teaching, research, and student support. Meet the individuals who bring expertise, passion, and innovation to our university community, shaping the future of education and discovery.</p>
                </div>
                <div className='row margin-top-40'>
                 <Fade bottom duration={800}>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac11} className='image-cover' /></div>
                            <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/andrew-stewart/')}>Andrew Stewart</h6>
                            <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br/>Psychology</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac10} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/barbara-capogrosso-sansone/')}>Barbara Capagrosso Sansone​</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br/>Physics</div>
                    </div>
                   <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac3} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/charles-jakobsche/')}>Charles Jakobsche​</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br />Chemistry</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac5} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/christopher-williams/')}>Christopher Williams</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Professor, <br/>Geography </div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac4} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name'onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/edouard-wemy/')}>Edouard Wemy​</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br/>Economics</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac8} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/hamidreza-ahady-dolatsara/')}>Hamidreza Ahady Dolatsara</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Assistant Professor, <br/>School of Management</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac2} className='image-cover' /></div>
                            <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/javier-tabima-restrepo/')}>Javier Tabima Restrepo​</h6>
                            <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br/>Biology</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac1} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/li-han/')}>Li Han​</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Professor,<br/> Computer Science</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac7} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/lyndon-estes/')}>Lyndon Estes​</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, <br/>Geography</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac9} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/michael-satz/')}>Michael Satz</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Teaching Professor, <br/>Mathematics</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac6} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name'onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/terrasa-ulm/')}>Terrasa Ulm</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor,<br/> Computer Science</div>
                    </div>
                    <div className='col-md-3 margin-bottom-35'>
                        <div className='img-wrapper'>
                            <img src={Fac12} className='image-cover' /></div>
                        <h6 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/yelena-ogneva-himmelberger/')}>Yelena Ogneva-Himmelberger</h6>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Professor, <br/>Sustainability and Social Justice</div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
export default Faculty;