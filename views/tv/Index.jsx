import React from "react";

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/views/tv">Tv Home Page</a>
      </h4>
      Index View
      <h1></h1>
      <ul>
        {props.tv.map((tv, index) => (
          <li>
            <a href={`/views/tv/${index}`}>
              <strong>{tv.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
