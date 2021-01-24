import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
}

export default Jumbotron;