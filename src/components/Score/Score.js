import React from "react";
import "./Score.css";

//stateless component
const Score = props => (
  <div className="playerScore">
    <h1 className="score">Try and click each one a single time! Your Score :{props.total}</h1>
    <h1 className="status">{props.status}</h1>
  </div>
);

export default Score;