import React from "react";
import { createPortal } from "react-dom";
import classes from './TextModal.module.css'

export function TextModal(props) {
  const { open, text, portal, onClose } = props;
  if (open) {
    return createPortal(
      <div className={classes.portal} onClick={onClose}>
        <p>{text}</p>
      </div>,
      portal
    );
  }
  return null;
}
