import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    // state is gone when refreshed so we need to persist thru a page refresh
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src={process.env.PUBLIC_URL + "/images/logo.png"} />

      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Sign In</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="/#" style={{ color: "white", textDecoration: "none" }}>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/home-icon.png"}
              />
              <span>HOME</span>
            </a>

            <a
              href="/satellite"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/satellite-icon.png"}
              />
              <span>SATELLITE</span>
            </a>
            <a
              href="/tropical"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/models-icon.png"}
              />
              <span>TROPICAL</span>
            </a>
            <a
              href="/severe"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/severe-icon.png"}
              />
              <span>SEVERE</span>
            </a>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/about-icon.png"}
              />
              <span>ABOUT</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 150px;
`;

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
        bottom: -6px;
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
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
