import React from 'react';
import Fac1 from '../../images/Amir-Aazami.jpg';
import Fac2 from '../../images/Ali-Maalaoui.jpg';
import './faculty.css'
import Fac3 from '../../images/John-Magee.jpg';

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
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac1} className='image-cover' /></div>
                            <h4 className='mt-4 prof-name' onClick={() => openInNewTab('https://www.clarku.edu/faculty/profiles/lyndon-estes/')}>Amir Aazami</h4>
                            <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Mathematics</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac2} className='image-cover' /></div>
                        <h4 className='mt-4 prof-name'>Ali Maalaoui</h4>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Mathematics</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac3} className='image-cover' /></div>
                        <h4 className='mt-4 prof-name'>John Magee</h4>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Computer Science</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac3} className='image-cover' /></div>
                        <h4 className='mt-4 prof-name'>John Magee</h4>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Computer Science</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac3} className='image-cover' /></div>
                        <h4 className='mt-4 prof-name'>John Magee</h4>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Computer Science</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='img-wrapper'>
                            <img src={Fac3} className='image-cover' /></div>
                        <h4 className='mt-4 prof-name'>John Magee</h4>
                        <div class="line size-52px grow"></div>
                        <div class="text-uppercase mt-2">Associate Professor, Computer Science</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faculty;