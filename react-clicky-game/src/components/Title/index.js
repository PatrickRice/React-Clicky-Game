import React from "react";
import "./style.css";

function Title(props) {
  return (
<div className="title">{props.children}
  <nav className="navbar">
    <ul>
        <li className="brand">
            <a href="/">React Clicky Game</a>
        </li>
        <li className="">Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
    </ul>
   </nav>

<div className="row">
    <div className="col w-100">
    <header className="header">
        <h1>React Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any image more than once!</h2>
    </header>
    </div>
</div>
</div>
  )}

export default Title;



