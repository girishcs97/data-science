import React from "react";
import './bgvideo.css';
import { BsPlayCircle } from "react-icons/bs";

export default function BackgroundVideo() {
    return (
        <div className="container-fluid">
            <header id="header-bg">
                <div className="intro-bg">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-2 intro-text">
                                    <div className="d-flex justify-content-center">
                                        <BsPlayCircle className="play-btn" />
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