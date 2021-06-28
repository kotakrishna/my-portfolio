import React from "react";
import nameCard from "../img/personal/GitnMail.svg";

export default function Cards() {
  return (
    <div
      style={{
        width: "500px",
        display: "grid",
        placeContent: "center",
        margin: "auto",
      }}
    >
      <img width="320px" src={nameCard} alt="the name card" />
    </div>
  );
}
