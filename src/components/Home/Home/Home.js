import React from 'react';
import Header from '../../Shared/Header/Header';
import Slider from '../Slider/Slider';
import Search from '../Search/Search';
import Apartments from '../Apartments/Apartments';
import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
import Feature from '../Feature/Feature';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Slider></Slider>
            <Search></Search>
            <Apartments></Apartments>
            <Feature></Feature>
            <Footer></Footer>
        </div>
    );
};

export default Home;