import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div className="main-header">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home"><img src={logo} alt="WeFix Logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Services</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/admin">Admin</Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;