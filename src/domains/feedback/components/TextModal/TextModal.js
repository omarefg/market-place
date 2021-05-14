import React from "react";
import { createPortal } from "react-dom";
import classes from "./TextModal.module.css";

export function TextModal(props) {
  const { open, text, portal, onClose } = props;

  if (open) {
    return createPortal(
      <div
        className={classes.portal}
        onClick={onClose}
        data-testid="TextModal_container"
      >
        <p data-testid="TextModal_content">{text}</p>
      </div>,
      portal
    );
  }
  return null;
}
