import React from "react";
import classes from "./BuyButton.module.css";

export function BuyButton(props) {
  const {
    total,
    onClick,
    disabled,
    isLoading,
    error,
    feedbackComponents,
    cartIcon,
  } = props;
  const { Loader, ErrorComponent } = feedbackComponents;

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return <ErrorComponent error={error} retry={onClick} />;
  }

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
