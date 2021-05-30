import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import featureImg from '../../../images/21.png'
import './Feature.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
    return (
        <div className="features">
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <div className="feature-img">
                            <img src={featureImg} alt="Feature Img" className="img-fluid"/>
                        </div>
                    </Col>                   
                    <Col xs={12} md={7}>
                        <div className="feature-area">
                            <h3>We never compromize with quality work...</h3>
                            <p className="conten">Sweet Home is one of the most popular apartment rental company all around WORLD. You can find your dream house.</p>
                            <div className="feature">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <div className="single-fea single-fea-1">
                                            <div className="icon">
                                            <span><FontAwesomeIcon icon={faTags} /></span>
                                            </div>
                                            <div className="fea-text">
                                                <h4>Minimum Cost</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className="single-fea single-fea-2">
                                            <div className="icon">
                                            <span><FontAwesomeIcon icon={faPoll} /></span>
                                            </div>
                                            <div className="fea-text">
                                                <h4>Best Marketing</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className="single-fea single-fea-3">
                                            <div className="icon">
                                            <span><FontAwesomeIcon icon={faSearch} /></span>
                                            </div>
                                            <div className="fea-text">
                                                <h4>Easy to Search</h4>
                                                <p>You can find your property to simply and easy way</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <div className="single-fea single-fea-4">
                                            <div className="icon">
                                            <span><FontAwesomeIcon icon={faLock} /></span>
                                            </div>
                                            <div className="fea-text">
                                                <h4>24/7 Security</h4>
                                                <p>Privide low cost that help all more build real estate</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;