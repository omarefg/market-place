import React from "react";
import classes from "./CardsContainer.module.css";

export function CardsContainer(props) {
  const { children, title } = props;
  return (
    <>
      <h2>{title}</h2>
      <div className={classes.cardsContainer}>{children}</div>
    </>
  );
}