import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div id="social-container">
      <h1>Please Follow Me on Social Media</h1>
      <div className="social-links">
        <a
          href="https://github.com/Nickk91"
          target="_blank"
          className="github icon"
        ></a>
        <a
          href="https://www.linkedin.com/in/nikolai-kaploon-655bb2130/"
          target="_blank"
          className="linkedin icon"
        ></a>
      </div>
    </div>
  );
};

export default Social;
