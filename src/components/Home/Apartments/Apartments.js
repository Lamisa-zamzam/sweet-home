import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Apartments = () => {
    return (
        <div>
            <Container>
                <div className="section-heading">
                    <h2>Discover Our Apartment</h2>
                </div>
                <Row>
                    <Col xs={12} md={4}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Apartments;