import React from 'react';
import Slider from 'react-slick';
import './Slide.css'

class PosterSlide extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            className: 'posterSlide',
            dotsClass: 'posterSlide__dots'
        }
        return (
            <Slider {...settings}>
                <div>
                    <img className="posterSlide__image" src="/source/slide/slide1.jpeg" alt="" />
                </div>
                <div>
                    <img className="posterSlide__image" src="/source/slide/slide2.jpeg" alt="" />
                </div>
                <div>
                    <img className="posterSlide__image" src="/source/slide/slide3.jpeg" alt="" />
                </div>
                <div>
                    <img className="posterSlide__image" src="/source/slide/slide4.jpeg" alt="" />
                </div>
                <div>
                    <img className="posterSlide__image" src="/source/slide/slide5.jpeg" alt="" />
                </div>
            </Slider>
        )
    }

}
export default PosterSlide;
