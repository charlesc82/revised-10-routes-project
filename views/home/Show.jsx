import React from "react";

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.home.name}</h1>
      <p> {props.home.description}</p>
      <p>
        {" "}
        It's price is <strong>${props.home.price}</strong>
      </p>
      <a href="/views/home/Index.jsx">Back</a>
    </div>
  );
}

export default Show;
