import React from "react";
import classes from './Card.module.css'

export function Card({ img, alt, caption, href, onAddToCart }) {
  return (
    <figure className={classes.root}>
      <img className={classes.cardImg} src={img} alt={alt} />
      <figcaption className={classes.caption}>{caption}</figcaption>
      <button onClick={onAddToCart}>Add to cart</button>
    </figure>
  );
}
