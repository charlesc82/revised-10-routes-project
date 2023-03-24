import React from "react";

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Welcome to My Home Page Friend</h1>
      <ul>
        {props.home.map((home, index) => (
          <li>
            <a href={`/views/home${index}`}>
              <strong>{home.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
