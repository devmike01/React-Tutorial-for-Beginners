import React, { ReactNode, useState } from "react";

interface Props {
  // children allow us to add values in between tags
  children: ReactNode;
  onDismiss: () => void;
}

const Alert = ({ children, onDismiss }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      ></button>
    </div>
  );
};

export default Alert;
