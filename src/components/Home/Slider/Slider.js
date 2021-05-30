import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../images/slider-1.jpg';
import slider2 from '../../../images/slider-2.jpg';
import slider3 from '../../../images/slider-3.jpg';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Fast & Quick Fix"
                    />
                    <Carousel.Caption>
                    <h3>Find Your Dream House By Us</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Luxurious and Suitable Home for you</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Luxurious and Suitable Home for you</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;