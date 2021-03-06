import React from 'react';
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
            </Wrap>
            <Wrap>
                <img alt="" src="https://www.spc.noaa.gov/products/activity_loop.gif" />
                
            </Wrap>
            <Wrap>
                <img alt="" src="https://www.spc.noaa.gov/products/outlook/day1probotlk_1630_torn.gif" />
            </Wrap>
            <Wrap>
                <img alt="" src="http://www.nhc.noaa.gov/xgtwo/two_atl_5d0.png" />
            </Wrap>
            <Wrap>
                <img alt="" src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/13/GOES16-TAW-13-900x540.gif" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.55);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        img
    }
`