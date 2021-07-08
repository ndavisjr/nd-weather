import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CallToAction>
                <CTALogoOne src="/images/logo.png"/>
                <SignIn>Sign In</SignIn>
                <DescriptionOne>
                    Forgot Password?
                </DescriptionOne>
                <DescriptionTwo>
                    If you feel you need access, contact me.
                </DescriptionTwo>
            </CallToAction>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url(./images/login-background.jpg);
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.4;
    }
`

const CallToAction = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img``

const SignIn = styled.a`
    width: 100%;
    background-color: #2e75c7;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const DescriptionOne = styled.a`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    cursor: pointer;
`

const DescriptionTwo = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-top: 30px;
`