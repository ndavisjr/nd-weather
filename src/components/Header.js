import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src={process.env.PUBLIC_URL + '/images/logo.png'} />
            <NavMenu>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/home-icon.png'} />
                    <span>HOME</span>
                </a>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/search-icon.png'} />
                    <span>SEARCH</span>
                </a>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/satellite-icon.png'} />
                    <span>SATELLITE</span>
                </a>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/models-icon.png'} />
                    <span>TROPICAL</span>
                </a>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/severe-icon.png'} />
                    <span>SEVERE</span>
                </a>
                <a href="/#" style={{color: "white", textDecoration:'none'}}>
                    <img alt="" src={process.env.PUBLIC_URL + '/images/about-icon.png'} />
                    <span>ABOUT</span>
                </a>
            </NavMenu>
            <UserImg src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 150px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 25px;
        cursor: pointer;

        img {
            height: 15px;
            padding-right: 5px;
        }

        span {
            font-size: 15px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom:-6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`