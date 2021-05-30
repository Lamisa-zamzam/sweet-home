import React from 'react';
import Header from '../../Shared/Header/Header';
import Slider from '../Slider/Slider';
import Search from '../Search/Search';
import Apartments from '../Apartments/Apartments';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';

const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Slider></Slider>
            <Search></Search>
            <Apartments></Apartments>
        </div>
    );
};

export default Home;
