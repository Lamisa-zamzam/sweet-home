import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Apartment from "../Apartment/Apartment";

const Apartments = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch("https://shrouded-meadow-58285.herokuapp.com/houses")
            .then((res) => res.json())
            .then((result) => {
                setHouses(result);
                console.log(result);
            });
    }, []);
    return (
        <div>
            <Container>
                <div className="section-heading">
                    <h2>Discover Our Apartment</h2>
                </div>
                <Row>
                    {houses.map((ap) => (
                        <Apartment key={ap.id} ap={ap}></Apartment>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Apartments;
