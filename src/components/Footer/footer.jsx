import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="footer-title">Clark University</h5>
                        <p>Challenge Convention. Change Our World.</p>
                        <p><i className="fa fa-phone"></i> 508-793-7711</p>
                        <p><i className="fa fa-map-marker"></i> 950 Main Street Worcester, MA 01610</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className="footer-title">Helpful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Report a Concern</a></li>
                            <li><a href="#" className="text-white">Campus Safety</a></li>
                            <li><a href="#" className="text-white">Events</a></li>
                            <li><a href="#" className="text-white">Offices</a></li>
                            <li><a href="#" className="text-white">Employment</a></li>
                            <li><a href="#" className="text-white">Website Feedback</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5 className="footer-title">Follow Us</h5>
                        <div className="social-icons">
                            <a href="#" className="text-white"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-tiktok"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-youtube"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
                            <a href="#" className="text-white"><i className="fa fa-goodreads"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-outline-light mr-2">Apply Undergrad</button>
                    <button className="btn btn-outline-light mr-2">Apply Grad</button>
                    <button className="btn btn-outline-light mr-2">Give</button>
                    <button className="btn btn-outline-light">Contact Us</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
