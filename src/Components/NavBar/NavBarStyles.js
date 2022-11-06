import styled from "styled-components";

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

export const PersonalImageHolder = styled.div`
    padding-right: 10px;
`


export  const VideoBg = styled.video`
width: 200%;
height: 100%;
-object-fit: cover;
-o-object-fit:cover;
background-color: black;
`
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
export const Logo = styled.div`
  
  display:grid;
  grid-template-rows: 2.5em  10vh auto;
  place-items: center; 
  
  padding-left:${(props)=>(props.state?"20vh":"3em")};
  
  transform: ${(props) =>
    props.state ? "translate(-70%, -30%)" : "translate(-50%, -50%)"};
  font-size: ${(props) => (props.state ? "2em" : "13vw")};
  color: #fff;
  font-weight: 700;
  transition: 1s;
  text-decoration: none;
  .textTop{
    /* display: none; */
    /* visibility: hidden; */
  }
  z-index: 1;
  @media (min-width: 891px) {
    padding-left:${(props)=>(props.state?"10em":"5em")};
    font-size: ${(props) => (props.state ? "2em" : "7vw")};
    left: ${(props) => (props.state ? "10%" : "25%")};
    /* p{
      display: none;
      opacity: ${(props)=>(props.state?0:1)};
      visibility: hidden;
      top:100px
    }
    span{ 
      display: none;
      opacity: ${(props)=>(props.state?0:1)};
      visibility: hidden;
      top:100px
    } */
  transform: ${(props) =>
    props.state ? "translate(-50%, -30%)" : "translate(-80%, -20vh)"};
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  z-index: 1;
`;


export const PersonalImg = styled.img`
  top: 0;
  left: 0;
  object-fit: cover;
  /* justify-content: center; */
  transition: 1s;
  opacity: ${(props) => (props.state ? "0.5" : "1")};
  width: 2em;
  height: 2em;
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
  /* @media (min-width: 991px) {
    display: ${(prop) => (prop.state ? "none" : "flex")};
    opacity: 0;
    visibility: ${(prop) => (prop.state ? "hidden" : "hidden")};
  } */
`;

export const Li = styled.li`
  list-style: none;
`;

// export const TextTop = styled.ReactTypingEffect`
//   display: none;
// `


export const Scroll = styled.a`
opacity: ${(props) => (props.state ? "0" : "1")};
height: auto;
transform:translate(0%, 300px);
font-size: 15px;
@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
`
