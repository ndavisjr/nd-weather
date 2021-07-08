import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <Container>
            <Background>
                <img alt="" src="/images/about-background.jpg" />
            </Background>
            <TitlePic>
                <img alt="" src="/images/avatar.jpg" />
            </TitlePic>
            <Contact>
                <EmailButton>
                    <img alt="" src="/images/email-icon-black.png" />
                    <span>EMAIL</span>
                </EmailButton>
                <InstagramButton>
                    <img alt="" src="/images/instagram-icon.png" />
                </InstagramButton>
                <TwitterButton>
                    <img alt="" src="/images/twitter-icon.png" />
                </TwitterButton>
                <YoutubeButton>
                    <img alt="" src="/images/youtube-icon.png" />
                </YoutubeButton>
            </Contact>

            <SubHeading>
                Last Updated: 7/28/2018 by ndavisjr
            </SubHeading>
            <Description>
                Software developer. Storm chaser. Sunset hunter.  Wx Photography. Computer Science and Engineering Alumni of THE Ohio State University. 
            </Description>
        </Container>
    )
}

export default About

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const TitlePic = styled.div`
    margin-top: 60px;;
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const EmailButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

    img {
        height: 45px;
        padding-right: 20px;
    }
`

const InstagramButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-item: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;
   
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
     
    &:hover {
        background: rgba(198, 198, 198, 0.6);
    }
    
`

const TwitterButton = styled(InstagramButton)``

const YoutubeButton = styled(InstagramButton)``

const SubHeading = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`