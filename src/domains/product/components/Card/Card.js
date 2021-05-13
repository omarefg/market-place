import React from "react";
import classes from './Card.module.css'

export function Card(props) {
  const { img, alt, caption, onAddToCart, type, id } = props

  const handleOnAddToCart = () => {
    onAddToCart({ type, id })
  }

  return (
    <figure className={classes.root}>
      <img className={classes.cardImg} src={img} alt={alt} />
      <figcaption className={classes.caption}>{caption}</figcaption>
      <button onClick={handleOnAddToCart}>Add to cart</button>
    </figure>
  );
}
