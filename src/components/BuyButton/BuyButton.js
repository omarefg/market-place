import React from "react";
import cartIcon from "../../assets/shoppingCart.svg";
import classes from "./BuyButton.module.css";

export function BuyButton({ total, onClick, disabled }) {
  return (
    <button className={classes.root} onClick={onClick} disabled={disabled}>
      <span className={classes.badgeContainer}>
        <img className={classes.icon} src={cartIcon} alt="Cart Icon" />
        <span className={classes.badge}>{total}</span>
      </span>
      Comprar
    </button>
  );
}
