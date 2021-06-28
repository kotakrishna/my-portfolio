import styled from "styled-components";
// import React from "react";
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;900&display=swap");

// const Scroll = window.scrollY > 0 ? "80px" : "100vh";

export const colorType = "#007a8b";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.9s;
  padding: 0 3%;
  font-family: "Apercu", "Times New Roman", Times, serif;
  z-index: 100;
  height: ${(prop) => (prop.state ? "60px" : "100vh")};
`;
//   ${(({ scroll }) => !scroll && `height: 100vh`) || `height:80px`};

export const Body = styled.section`
  min-height: 500px;
`;

export const Main = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Poppins", sans-serif; */
  padding-bottom: 20px;
`;

export const A = styled.a`
  color: #fff;
  display: inline-block;
  padding: 10px 15px;
  font-size: 1.2em;
  text-decoration: none;
  &:hover {
    color: #ff275f;
  }
`;

export const Banner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
  opacity: ${(props) => (props.state ? "0.5" : "1")};
  @media (max-width: 991px) {
    opacity: ${(props) => (props.state ? "0" : "1")};
  }
`;
export const Logo = styled.a`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.state ? "100px" : "55%")};
  transform: ${(props) =>
    props.state ? "translate(0, -50%)" : "translate(-50%, -50%)"};
  font-size: ${(props) => (props.state ? "2em" : "13vw")};
  color: #fff;
  font-weight: 700;
  transition: 1s;
  text-decoration: none;
  z-index: 1;
  @media (max-width: 991px) {
    left: ${(props) => (props.state ? "40px" : "25%")};
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  z-index: 1;
`;

export const PersonalImg = styled(Banner)`
  width: 1em;
  height: 1em;
  top: 10%;
  left: -45%;
  border-radius: 50%;
  transition: 1s;
  transform: ${(props) =>
    props.state ? "translate(0, 0%)" : "translate(0%, 0%)"};
  /* transform: translate(-50%, -50%); */
  opacity: ${(props) => (props.state ? "0" : "1")};
`;

export const Ul = styled.ul`
  position: relative;
  display: flex;
  transition: 0.25s;
  transition-delay: 0.75s;
  transform: ${(prop) => (prop.state ? "translateX(0)" : "translateX(50px)")};
  opacity: ${(prop) => (prop.state ? "1" : "0")};
  @media (min-width: 991px) {
    display: ${(prop) => (prop.state ? "none" : "flex")};
    opacity: 0;
    visibility: ${(prop) => (prop.state ? "hidden" : "hidden")};
  }
`;

export const Li = styled.li`
  list-style: none;
`;
