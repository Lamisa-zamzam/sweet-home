import React from 'react';
import { Container } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (
        <div className="search-bar">
            <Container>
                <div className="serach-area">
                    <input type="text" className="form-control" placeholder="Search Property"/>
                    <button className="apt-btn btn btn-primary">Find Now</button>
                </div>
            </Container>
        </div>
    );
};

export default Search;