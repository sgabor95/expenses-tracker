import "./Card.css";
import React from "react";

const Card = (props) => {
  const clases = "card " + props.className;
  return (
    <div key={props.key} className={clases}>
      {props.children}
    </div>
  );
};

export default Card;
