import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import AdminBookings from "./AdminBookings";
import UserBookings from "./UserBookings";

const Bookings = () => {
    const [orders, setOrders] = useState([]);
    const loggedInEmail = sessionStorage.getItem("email");
    const [isAdmin, setIsAdmin] = useState(false);
    const [noOrder, setNoOrder] = useState(false);

    useEffect(() => {
        fetch(
            `https://shrouded-meadow-58285.herokuapp.com/checkIfAdmin?email=${loggedInEmail}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setIsAdmin(true);
                }
            });
    }, [loggedInEmail]);

    useEffect(() => {
        fetch(
            `https://shrouded-meadow-58285.herokuapp.com/bookings/${loggedInEmail}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setOrders(data);
                } else {
                    setNoOrder(true);
                }
            });
    }, [loggedInEmail]);

    const handleStatusChange = (e, id) => {
        const newStatus = { status: e.target.value };

        fetch(`https://shrouded-meadow-58285.herokuapp.com/updateOrder/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(newStatus),
        })
            .then((res) => res.json())
            .then((result) => {});
    };

    return (
        <div className="tableContainer">
            <Sidebar />
            <Container className="bookingsContainer">
                {isAdmin && (
                    <Row className="headerRow">
                        <Col md={2}>Name</Col>
                        <Col md={3}>Email</Col>
                        <Col md={2}>Service</Col>
                        <Col md={3}>Payed With</Col>
                        <Col md={2}>Status</Col>
                    </Row>
                )}
                {isAdmin &&
                    orders.map((order) => (
                        <AdminBookings
                            key={order._id}
                            order={order}
                            handleStatusChange={handleStatusChange}
                        />
                    ))}
                {!isAdmin &&
                    !noOrder &&
                    orders.map((order) => (
                        <Row key={order._id}>
                            <UserBookings order={order} key={order._id} />
                        </Row>
                    ))}
                {noOrder && (
                    <h3
                        className="text-secondary text-center"
                        style={{ marginTop: "20%" }}
                    >
                        You have no orders yet!!! Go back and get one today!!
                    </h3>
                )}
            </Container>
        </div>
    );
};

export default Bookings;
