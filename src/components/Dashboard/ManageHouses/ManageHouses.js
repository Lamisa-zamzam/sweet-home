import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const ManageHouses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-meadow-58285.herokuapp.com/houses")
            .then((res) => res.json())
            .then((result) => {
                setHouses(result);
            });
    }, []);

    const handleHouseDelete = (_id) => {
        fetch(
            `https://shrouded-meadow-58285.herokuapp.com/deletehouse/${_id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Your House has been deleted.");
                    window.location.reload();
                } else {
                    alert("Something unexpected happened. Please try again.");
                }
            });
    };

    return (
        <div className="tableContainer">
            <Sidebar />
            <Container className="bookingsContainer">
                <Row className="headerRow">
                    <Col md={2}></Col>
                    <Col md={3} style={{ marginLeft: "-3%" }}>
                        House Name
                    </Col>
                    <Col md={4} style={{ marginLeft: "6%" }}>
                        Detail
                    </Col>
                    <Col md={2}>Price</Col>
                    <Col md={1}></Col>
                </Row>
                <br />
                {houses.map((house) => (
                    <Row key={house._id}>
                        <Col md={2}>
                            <img
                                src={house.imageURL}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </Col>
                        <Col md={2}>
                            <p className="colP">
                                <strong>{house.houseName}</strong>
                            </p>
                        </Col>
                        <Col md={4}>
                            <p className="colP">{house.detail}</p>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={1}>
                            <p className="colP">
                                <strong>{house.price}</strong>
                            </p>
                        </Col>
                        <Col md={2} className="statusCol">
                            <Button
                                style={{
                                    backgroundColor: "red",
                                    border: "none",
                                }}
                                onClick={() => handleHouseDelete(house._id)}
                            >
                                Delete
                            </Button>
                        </Col>
                        <hr />
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default ManageHouses;
