import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import msu from './ms1.jpg'
import meteor from './meteor.jpg'
import html from './html&css.jpg'
import bootstrap from './bootstrap.jpg'
import './style.css'

export default class DemoCarousel extends Component {
    render() {
        return (
          <div className='carousel-wrapper'>
             <h1>Projects</h1>
            <Carousel autoPlay interval="3000" transitionTime="800">
                <div className='card'>
                    <img src="https://github.com/selvajayarose/Product_Card_VanillaJS/blob/main/img/Screenshot_2021-01-13%20Product%20Card.png?raw=true" />
                    <a className="legend" href='https://github.com/selvajayarose/Product_Card_VanillaJS'>View on github</a>
                </div>
                <div className='card'>
                    <img src={msu} />
                    <a className="legend" href='https://github.com/selvajayarose/MS-University'>View on github</a>
                </div>
                <div className='card'>
                    <img src={bootstrap} />
                    <a className="legend" href='https://github.com/selvajayarose/BootstrapProject'>View on github</a>
                </div>
                <div className='card'>
                    <img src={meteor} />
                    <a className="legend" href='https://github.com/selvajayarose/Meteor-Agency'>View on github</a>
                </div>
                <div className='card'>
                    <img src={html} />
                    <a className="legend" href='https://github.com/selvajayarose/Responsive_Website_HTML_CSS'>View on github</a>
                </div>
                {/* <div className='card'>
                    <img src={} />
                    <a className="legend" href='https://github.com/selvajayarose/MERN_TodoList'>View on github</a>
                </div> */}
            </Carousel>
            </div>
        );
    }
};
