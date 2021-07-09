import React, { useEffect, useState } from "react";
import db from "../firebase";
import styled from "styled-components";

function Severe() {
  const [bookmarks, setBookmarks] = useState([]);

  // grab the bookmarks for the specific category
  useEffect(() => {
    db.collection("bookmarks")
      .where("category", "==", "Severe")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          setBookmarks((bookmarks) => [...bookmarks, doc.data()]);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  console.log(bookmarks);

  return (
    <Container>
      <h4>Quick Links</h4>
      <Content>
        {bookmarks &&
          bookmarks.map((bookmark) => (
            <Wrap key={bookmark.id}>
              <a href={bookmark.url} target="_blank" rel="noreferrer">
                <img alt="" src={bookmark.backgroundImg} />
              </a>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Severe;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(./images/home-background.png) center center / cover
      no-repeat fixed;
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
