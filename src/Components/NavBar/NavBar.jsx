import React from "react";
import ProgressiveImage from "react-progressive-image";
import ReactTypingEffect from 'react-typing-effect';
// import styled from "styled-components";

// import {Sign} from "./Sign"
// import  {ReactComponent as Sign} from "../../img/logo/signOfDeveloper.svg"
import {
  Main,
  Header,
  Body,
  Banner,
  Ul,
  Scroll,
  // Li,
  Logo,
  Nav,
  PersonalImg,
  PersonalImageHolder,
  LogoText,
  TextTop,
  // A,
} from "./NavBarStyles";
// import Background from "public\background.jpg";
// import "./NavBar.module.css";

// const sticky = {
//   height: "80px",
// };

export default function NavBar() {
  const [controlState, setControlState] = React.useState(true);
  const controlHeader = () => {
    if (window.scrollY > 0) {
      setControlState(true);
    } else {
      setControlState(false);
    }
  };

  const IMAGE = `${process.env.PUBLIC_URL}/background.jpg`;

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
        {/* <ProgressiveImage
            delay={3000}
            src={IMAGE}
            placeholder="tiny-image.jpg"
          >
            {src => <Banner state={controlState} src={src} alt="the handing img" />}
          </ProgressiveImage> */}
          {/* <Banner state={controlState} src={IMAGE} alt="the handing img" /> */}
          <Logo state={controlState}>
           <PersonalImageHolder >
              <PersonalImg
              state={controlState}
              src={process.env.PUBLIC_URL + "/Me.jpg"}
              alt=""
              />
              </PersonalImageHolder>
            <h3>
              Kota.
              </h3> 
          
          <Scroll state={controlState} >Scroll Down</Scroll>
          </Logo>
        </Header>
      </Body>
    </Main>
  );
}
