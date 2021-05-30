import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AdminBookings = ({ order, handleStatusChange }) => {
    const { name, email, serviceName, payedWith, status, _id } = order;
    return (
        <Row>
            <Col md={2}>
                <p className="colP">{name}</p>
            </Col>
            <Col md={2}>
                <p className="colP">{email}</p>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
                <p className="colP">{serviceName}</p>
            </Col>
            <Col md={2}>
                <p className="colP">{payedWith}</p>
            </Col>
            <Col md={2} className="statusCol">
                {" "}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                        as="select"
                        onChange={(event) => handleStatusChange(event, _id)}
                    >
                        <option>{status}</option>
                        <option>
                            {status !== "ongoing" ? "ongoing" : "pending"}
                        </option>
                        <option>
                            {status !== "done" ? "done" : "pending"}
                        </option>
                    </Form.Control>
                </Form.Group>
            </Col>
            <hr />
        </Row>
    );
};

export default AdminBookings;
