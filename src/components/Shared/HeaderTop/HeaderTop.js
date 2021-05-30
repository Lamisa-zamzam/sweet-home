import React from 'react';
import './HeaderTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';

const HeaderTop = () => {
    return (
        <div className="header-top-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="top-bar-menu">
                            <ul>
                                <li><a href="#"><span><FontAwesomeIcon icon={faEnvelope} /></span> info@webmail.com</a></li>
                                <li><a href="#"><span><FontAwesomeIcon icon={faPhone} /></span> +8801700 000 000</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-right">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;