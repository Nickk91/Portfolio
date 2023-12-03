import "./Header.css";

import React from "react";

const NavbarButton = ({ name, href }) => {
  const handleClick = (event) => {
    event.preventDefault();

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <li>
      <a href={href} className="tab" onClick={handleClick}>
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <ul className="header">
      <NavbarButton name="About" href="#hero-container" />

      <NavbarButton name="Portfolio" href="#card-Section" />

      <NavbarButton name="Social Media" href="#social-container" />

      <NavbarButton name="Contact" href="#contact-section" />
    </ul>
  );
};

export default Header;
