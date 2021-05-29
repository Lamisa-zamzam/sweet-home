import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNavbar.css";

const MyNavbar = () => {
    const id = "60799c3a92b36b4d686c1d80";
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home" className="brandName">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4qERDnuFM9cBrqRQdDv-fVwKcHHIQQ3lDQ&usqp=CAU"
                    alt="Globetrotter"
                    className="navLogo"
                />
                <h3 className="agencyName">Zamzam International</h3>
                <p className="brandSlogan">Trusted Visa Service Agency</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/dashboard/bookings"
                        className="navLink"
                    >
                        Orders
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to={`/dashboard/book/${id}`}
                        className="navLink"
                    >
                        Book
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home" className="navLink">
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard" className="navLink">
                        Dashboard
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/dashboard/giveReview"
                        className="navLink"
                    >
                        Feedback
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
