import React from "react";
import './bgvideo.css';
import { BsPlayCircle } from "react-icons/bs";

export default function BackgroundVideo() {
    const videoUrl = "https://www.youtube.com/embed/bqHZ-fiztq8";

    const openVideoPopup = () => {
        const width = window.innerWidth * 0.8;
        const height = window.innerHeight * 0.8;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        window.open(
            videoUrl,
            "_blank",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );
    };
    return (
        <div className="container-fluid">
            <header id="header-bg">
                <div className="intro-bg">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-2 intro-text">
                                    <div className="d-flex justify-content-center">
                                        <BsPlayCircle className="play-btn" onClick={openVideoPopup}/>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h3>
                                            Listen to what Program Director has for you!
                                        </h3>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p>
                                            The program director has an exciting plan lined up for you! Get ready to dive into new projects and opportunities.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}