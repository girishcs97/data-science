import React from 'react';
import './footer.css';
import FooterImg from '../../images/footer-logo.svg'
const Footer = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <footer className="footer bg-dark text-white">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src={FooterImg} style={{ maxWidth: '200px', maxHeight: '58px', marginBottom: '20px' }} />
                        <p className='clark-title-con'>Challenge Convention.<br /> Change Our World.</p>
                        <p className='address-cl'><i className="fa fa-envelope" style={{ 'marginRight': '10px' }}></i>ds@clarku.edu</p>
                        <p className='address-cl'><i className="fa fa-map-marker" style={{ 'marginRight': '10px' }}></i> 950 Main Street Worcester, MA 01610</p>
                    </div>
                    <div className="col-md-5 mb-3 mt-4">
                        <h5 className="helpful-links">Helpful Links</h5>
                        <ul className="list-unstyled">
                        <div className='row'>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/report-a-concern/')}>Report a Concern</li>
    </div>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/offices/emergency-management-and-campus-assistance/')}>Campus Safety</li>
    </div>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/events/')}>Events</li><br />
    </div>
</div>
<div className='row'>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/offices/')}>Offices</li>
    </div>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/offices/human-resources/job-opportunities/')}>Employment</li>
    </div>
    <div className='col-md-4'>
        <li className='m-1' style={{cursor:'pointer'}} onClick={() => openInNewTab('https://www.clarku.edu/contactus/#website-feedback')}>Website Feedback</li>
    </div>
</div>

                        </ul>
                    </div>
                    <div className="col-md-3 mb-3 mt-4">
                        <h5 className="follow-u ml-4">Follow Us</h5>
                        <div className="social-icons text-center">
                            <a href="#" className="text-white"><i className="fa fa-facebook icon-dsgn"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-twitter icon-dsgn"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-instagram icon-dsgn"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-tiktok icon-dsgn"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-youtube icon-dsgn"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-linkedin icon-dsgn"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
