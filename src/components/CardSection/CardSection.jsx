import React from "react";
import Card from "./Card";
import "./CardSection.css";
import "./Card.css";
import diceImg from "./images/Dice.jpg";
import bookingImg from "./images/Booking.jpg";
import minecraftImg from "./images/MineCraft.jpg";

const CardSection = () => {
  return (
    <div id="card-Section">
      <h1 className="portfolio-h1">Portfolio</h1>

      <Card
        id="minecraft-image"
        title="Minecraft Game"
        image={minecraftImg}
        alt="minecraft-game-image"
        description="2D Minecraft game "
        githublink="https://github.com/Nickk91/MineCraft2D"
        netlifylink="https://rococo-capybara-23bd0e.netlify.app/"
      />
      <Card
        id="dice-image"
        title="Dice Game"
        image={diceImg}
        alt="dice-game-image"
        description="2D Dice multiplayer game"
        githublink="https://github.com/Nickk91/diceGame"
        netlifylink="https://starlit-hummingbird-3cc0ef.netlify.app/"
      />
      <Card
        id="booking-image"
        title="Booking"
        image={bookingImg}
        alt="flight-booking-site-image"
        description="Flight booking website"
        githublink="https://github.com/Nickk91/Flights"
        netlifylink="https://comforting-monstera-59044d.netlify.app/"
      />
    </div>
  );
};

export default CardSection;
