import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <btn onClick={() => {props.handleClick(props.id)}}>
            <img alt={props.name} src={props.image} />
        </btn>
      </div>
      <div className="content">
        <ul>

        </ul>
      </div>
      
    </div>
  );
}

export default FriendCard;

