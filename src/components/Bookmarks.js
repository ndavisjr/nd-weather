import React from 'react';
import styled from 'styled-components';

function Bookmarks() {
    return (
        <Container>
           <h4>Quick Links</h4>
           <Content>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
                <Wrap>
                    <img alt="" src="http://forecast.weather.gov/wwamap/png/US.png" />
                </Wrap>
           </Content>
        </Container>
    )
}

export default Bookmarks

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover
    }

    &:hover {
        transform: scale(1.05);
        border: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`