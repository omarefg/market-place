import React from "react";
import classes from "./Footer.module.css";

export function Footer(props) {
  const { children } = props;
  return <footer className={classes.footer}>{children}</footer>;
}
