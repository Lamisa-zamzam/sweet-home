import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const UserBookings = ({ order }) => {
    const { serviceName, status } = order;
    const [chosenService, setChosenService] = useState({});

    useEffect(() => {
        fetch(
            `https://shrouded-meadow-58285.herokuapp.com/service?serviceName=${serviceName}`
        )
            .then((res) => res.json())
            .then((data) => {
                setChosenService(data[0]);
            });
    }, [serviceName]);

    return (
        <Col
            md={6}
            style={{
                boxShadow: "5px 5px 10px gray",
                borderRadius: "5px",
                padding: "1%",
                marginTop: "3%",
                marginLeft: "20%",
                border: "1px solid gray",
            }}
        >
            <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
                <img
                    src={chosenService && chosenService.imageURL}
                    alt=""
                    style={{ width: "80%", borderRadius: "100%" }}
                />
                <h2
                    style={{
                        marginLeft: "40%",
                        color:
                            status === "pending"
                                ? "red"
                                : status === "done"
                                ? "green"
                                : "orange",
                    }}
                >
                    <strong>{status}</strong>
                </h2>
            </div>
            <h3>{serviceName}</h3>
            <p>{chosenService && chosenService.detail}</p>
        </Col>
    );
};

export default UserBookings;
