import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Bookmarks from "./Bookmarks";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setBookmarks } from "../features/bookmark/bookmarkSlice";

function Home() {
  const dispatch = useDispatch();

  // useEffect gets called when this component loads
  useEffect(() => {
    // get bookmarks from firebase db
    db.collection("bookmarks").onSnapshot((snapshot) => {
      let tempBookmarks = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      // set the bookmarks for the store, for the global state
      dispatch(setBookmarks(tempBookmarks));
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Bookmarks />
    </Container>
  );
}

export default Home;

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
