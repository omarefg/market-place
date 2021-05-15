import React from "react";
import classes from "./Footer.module.css";

export function Footer(props) {
  const { children } = props;
  return (
    <footer data-testid="Footer_root" className={classes.footer}>
      {children}
    </footer>
  );
}
