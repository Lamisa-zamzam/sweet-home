import React from 'react';
import Header from '../../Shared/Header/Header';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import data from '../../../data.json';
import { useParams } from 'react-router-dom';
import './ApartmentDetails.css'
import Footer from '../../Shared/Footer/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ApartmentDetails = () => {
    const {id} = useParams();
    const result = data.find(ap => ap.id == id);
    return (
        <div className="apartment-details">
            <HeaderTop></HeaderTop>
            <Header></Header>
            <div className="apartment-header">
                <h1>{result.title}</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="apartment-detail">
                            <img src={result.img} alt="Apartment Image"/>
                            <div className="apartment-title">
                                <h3>{result.title}</h3>
                                <h4>{result.price}</h4>
                            </div>
                            <p>{result.address}</p>
                            <p>{result.shortDesc}</p>
                            <p>{result.description}</p>
                            <h4 className="price-detail">Price Details-</h4>
                            <p>Rent/Month{result.price}</p>
                            <p>service Charge: {result.serviceCharge}</p>
                            <p>security Deposit: {result.securityDeposit}</p>
                            <h4 className="price-detail">Property Details-</h4>
                            <p>Address & Area: {result.address}</p>
                            <p>Floor: {result.floor}</p>
                            <p>Flat Size: {result.flatSize}</p>
                            <p>Room Category: {result.roomCategory}</p>
                            <p>Facilities: {result.facilities}</p>
                            <p>Additional Facilities: {result.addFacilities}</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="sidebar">
                        <Form>
                            <Form.Group controlId="formBasicEmail"><Form.Control type="text" placeholder="Your Name" /></Form.Group>
                            <Form.Group controlId="formBasicPassword"><Form.Control type="text" placeholder="Phone Number" /></Form.Group>
                            <Form.Group controlId="formBasicEmail"><Form.Control type="email" placeholder="Email Address" /></Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1"><Form.Control as="textarea" rows={3} placeholder="Message..." /></Form.Group>
                            <Button className="apt-btn" variant="primary" type="submit">Submit</Button>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ApartmentDetails;