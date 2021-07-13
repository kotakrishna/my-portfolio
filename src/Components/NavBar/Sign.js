import React from "react";
import styled from "styled-components";
import styles from "./NavBar.module.scss"
import "./NavBar.css"
import { ReactComponent as ImportedComponent } from "../../img/logo/signOfDeveloper.svg";
const StyledSVG = styled(ImportedComponent)`
  display: block;
  margin: auto;
  width: 25em;
  height: 25em;
`;

export const Sign =()=>{
    return(
        <StyledSVG />
    )
}