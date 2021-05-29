import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Apartment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Apartment = ({ap}) => {
    return (
        <>
            <Col xs={12} md={4}>
                <Card className="apartment">
                    <Card.Img variant="top" src={ap.img} />
                    <Card.Title>{ap.title}</Card.Title>
                    <Card.Body> 
                        <p><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {ap.address}</p>                      
                        <Card.Text>{ap.shortDesc}</Card.Text>
                    </Card.Body>
                    <div className="apartment-footer">
                        <h4 className="price">{ap.price}</h4>
                        <Button className="apt-btn" variant="primary">View Details</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default Apartment;