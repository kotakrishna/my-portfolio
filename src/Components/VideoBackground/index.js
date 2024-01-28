import React from "react";
import video from "../../img/Video/video.mp4";
import { scroller, Link } from "react-scroll";
import Scroll from "../../img/emojis/staticScroll.png";

import {
  HeroBg,
  HeroP2,
  HeroContainer,
  ScrollHolder,
  ScrollImg,
  HeroContent,
  HeroH1,
  HeroItem,
  HeroList,
  HeroP,
  PersonalImageHolder,
  PersonalImg,
  VideoBg,
} from "./VideoElements";
export default function VideoBgTop() {
  const [controlState, setControlState] = React.useState(false);
  const ScrollToTheHome = () => {
    scroller.scrollTo("home", {
      duration: 1000,
      smooth: true,
      offset: -100,
      containerId: "home",
    });
    // console.log(scroller.getScrollPosition())
  };
  const controlHeader = () => {
    if (window.scrollY > 0) {
      // ScrollToTheHome();
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
    <HeroContainer onScroll={ScrollToTheHome()} state={controlState}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <PersonalImageHolder>
          <PersonalImg
            state={controlState}
            src={process.env.PUBLIC_URL + "/Me.jpg"}
            alt=""
          />
        </PersonalImageHolder>
        <Link to="home">
          <HeroH1 state={controlState}>Kota Sai Krishna Reddy</HeroH1>
        </Link>
        <HeroP state={controlState}>
          Full Stack Web Developer | Fitness Enthusiast <br /> Software Engineer
          | Curiosity Driven Person
        </HeroP>
        <HeroP2 state={controlState}>
          <span> Scroll Down </span>
          <ScrollHolder>
            <ScrollImg src={Scroll} alt="" />
          </ScrollHolder>
        </HeroP2>
        <HeroList state={controlState}>
          <HeroItem to="background" state={controlState}>
            Background
          </HeroItem>
          <HeroItem to="skills" state={controlState}>
            Skills
          </HeroItem>
          <HeroItem to="projects" state={controlState}>
            Projects
          </HeroItem>
          <HeroItem to="contact" state={controlState}>
            Contact
          </HeroItem>
        </HeroList>
        {/* <ResumeButton  state={controlState}>
            <Resume download="Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf" href={`${process.env.PUBLIC_URL}/Resume-FullStack Web Developer(Kota Sai Krishna Reddy).pdf`}>Download Resume</Resume>
        </ResumeButton> */}
        {/* <HeroList>
            </HeroList> */}
      </HeroContent>
    </HeroContainer>
  );
}
