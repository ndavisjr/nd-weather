import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img alt='' src="/images/slider-1-v1.jpg" />
            </Wrap>
            <Wrap>
                <img alt='' src="/images/slider-2-v1.jpg" />
            </Wrap>
            <Wrap>
                <img alt='' src="/images/slider-3-v1.jpg" />
            </Wrap>
            <Wrap>
                <img alt='' src="/images/slider-4-v1.jpg" />
            </Wrap>
        </Carousel>   
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    border: 5px solid transparent;

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 2px solid transparent;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(259, 249, 249, 0.8);
        }
    }
`
