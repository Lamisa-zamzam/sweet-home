import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import HeaderTop from "../../Shared/HeaderTop/HeaderTop";
import { useParams } from "react-router-dom";
import "./ApartmentDetails.css";
import Footer from "../../Shared/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Book from "../../Dashboard/Book/Book/Book";

const ApartmentDetails = () => {
    const [chosenHouse, setChosenHouse] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`https://shrouded-meadow-58285.herokuapp.com/house/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setChosenHouse(data[0]);
                console.log(data);
            });
    }, [id]);

    return (
        <div className="apartment-details">
            <HeaderTop></HeaderTop>
            <Header></Header>
            <div className="apartment-header">
                <h1>{chosenHouse.title}</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="apartment-detail">
                            <img src={chosenHouse.img} alt="Apartment" />
                            <div className="apartment-title">
                                <h3>{chosenHouse.title}</h3>
                                <h4>{chosenHouse.price}</h4>
                            </div>
                            <p>{chosenHouse.address}</p>
                            <p>{chosenHouse.shortDesc}</p>
                            <p>{chosenHouse.description}</p>
                            <h4 className="price-detail">Price Details-</h4>
                            <p>Rent/Month:{chosenHouse.price}</p>
                            <p>service Charge: {chosenHouse.serviceCharge}</p>
                            <p>
                                security Deposit: {chosenHouse.securityDeposit}
                            </p>
                            <h4 className="price-detail">Property Details-</h4>
                            <p>Address & Area: {chosenHouse.address}</p>
                            <p>Floor: {chosenHouse.floor}</p>
                            <p>Flat Size: {chosenHouse.flatSize}</p>
                            <p>Room Category: {chosenHouse.roomCategory}</p>
                            <p>Facilities: {chosenHouse.facilities}</p>
                            <p>
                                Additional Facilities:{" "}
                                {chosenHouse.addFacilities}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="sidebar">
                            <Book />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ApartmentDetails;
