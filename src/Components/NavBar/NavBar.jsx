import React from "react";
// import styled from "styled-components";
import {
  Main,
  Header,
  Body,
  Banner,
  Ul,
  Li,
  Logo,
  Nav,
  PersonalImg,
  A,
} from "./NavBarStyles";
import "./NavBar.module.css";

// const sticky = {
//   height: "80px",
// };

export default function NavBar() {
  const [controlState, setControlState] = React.useState(false);
  const controlHeader = () => {
    if (window.scrollY > 0) {
      setControlState(true);
    } else {
      setControlState(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);
  return (
    <Main>
      <Body>
        <Header state={controlState}>
          <Banner
            state={controlState}
            src="/landingpage2.png"
            alt="the handing img"
          />
          <Logo state={controlState}>
            <PersonalImg state={controlState} src="/Me.jpg" alt="" /> Kota.
          </Logo>
          <Nav>
            <Ul state={controlState}>
              <Li>
                <A>Home</A>
              </Li>
              <Li>
                <A>About</A>
              </Li>
            </Ul>
          </Nav>
        </Header>
      </Body>
    </Main>
  );
}
