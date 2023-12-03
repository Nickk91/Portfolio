import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <a href={props.netlifylink} id={props.id} className="img-container"></a>

      <div className="details-container">
        <h3>{props.title}</h3>
        <br />
        <p>{props.description}</p>
        <br />
        <a href={props.githublink} target="_blank">
          GitHub link{" "}
          <span>
            <img src="./images/Github_logo.png" alt="" />
          </span>
        </a>
        <br />
        <a href={props.netlifylink} target="_blank">
          Netlify link{" "}
          <span>
            <img src="./images/Github_logo.png" alt="" />
          </span>
        </a>
        <br />
      </div>
    </div>
  );
};

export default Card;
