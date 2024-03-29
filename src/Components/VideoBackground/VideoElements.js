import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  /* height: 800px; */
  width: 100%;
  transition: 0.9s; /* position: relative; */
  position: fixed;
  z-index: 1;
  /* margin-bottom:300px ; */
  height: ${(prop) => (prop.state ? "60px" : "100vh")};
  /* width: ${(prop) => (prop.state ? "60px" : "100vh")}; */
`;

export const HeroBg = styled.div`
  /* min-height: 500px; */
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 110%;
  }
  @media screen and (max-width: 480px) {
    height: 110%;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 120%;
  -o-object-fit: cover;
  object-fit: cover;
  /* min-height: 500px; */
  background: #232a34;
  opacity: 0.6;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  transition: 1s;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  transform: ${(props) =>
    props.state ? "translate(-150%,140%)" : "translate(0%, 70%)"};
  font-size: ${(props) => (props.state ? "2em" : "48px")};
  transition: 1s;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    transform: ${(props) =>
      props.state ? "translate(-10%, 100%)" : "translate(-0%, 3rem)"};
  }
  @media screen and (max-width: 480px) {
    margin-left: -10%;
    font-size: 25px;
    transform: ${(props) =>
      props.state ? "translate(-10%, 2rem)" : "translate(-5%, 3rem)"};
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  opacity: ${(props) => (props.state ? "0" : "1")};
  max-width: 600px;
  transition: 1s;
  transform: ${(props) =>
    props.state ? "translate(-10%, 6.5rem)" : "translate(-0%, 50%)"};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    margin-left: -15%;
    font-size: 17px;
  }
`;
export const HeroP2 = styled(HeroP)`
  margin-top: 10%;
  font-size: 16px;
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonalImageHolder = styled.div`
  /* margin-left: -10%; */
  padding-right: 10px;
  transition: 1s;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin-left: -10%;
    /* visibility: hidden; */
  }
  @media screen and (max-width: 480px) {
    margin-left: -10%;
    /* display: none; */
    /* visibility: hidden; */
  }
`;

export const PersonalImg = styled.img`
  top: 0;
  left: 0;
  object-fit: cover;
  /* justify-content: center; */
  transition: 1s;
  opacity: ${(props) => (props.state ? "0.5" : "1")};
  width: 15em;
  height: 15em;
  border-radius: 50%;
  transition: 1s;
  transform: ${(props) =>
    props.state ? "translate(0, 0%)" : "translate(0%, 25%)"};
  /* transform: translate(-50%, -50%); */
  opacity: ${(props) => (props.state ? "0" : "1")};
`;

export const HeroList = styled.ul`
  /* display: ${(props) => (props.state ? "block" : "none")}; */
  margin-top: 24px;
  color: #fff;
  width: fit-content;
  font-size: 24px;
  transition: 1s;
  transform: ${(props) =>
    props.state ? "translate(50%, -12rem)" : "translate(-0%, 10%)"};
  opacity: ${(props) => (props.state ? "1" : "0")};
  display: flex;
  list-style-type: none;
  flex-direction: row;
`;
export const HeroItem = styled(LinkS)`
  min-width: 120px;
  text-align: center;
  width: fit-content;
  text-decoration: none;
  transition: 1s;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transform: ${(props) =>
    props.state ? "translate(190%, -420%)" : "translate(-10%, -0%)"};
  opacity: ${(props) => (props.state ? "1" : "0")};
  @media screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
  @media screen and (max-width: 480px) {
    display: none;
    visibility: hidden;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const ScrollHolder = styled.p`
  background-color: transparent;
`;

export const ScrollImg = styled.img`
  background-color: transparent;
`;

export const ResumeButton = styled.button`
  background-color: white;
  text-align: center;
  border: none;
  transition: 1s;
  padding: 0.7rem;
  border-radius: 10px;
  opacity: ${(props) => (props.state ? "1" : "0")};
  transform: ${(props) =>
    props.state ? "translate(40rem, -21.5rem)" : "translate(-10%, -0%)"};
`;

export const Resume = styled.a`
  font-size: 15px;
  color: #18356d;
  text-decoration: none;
  transition: 1s;
  opacity: ${(props) => (props.state ? "0" : "1")};
`;
