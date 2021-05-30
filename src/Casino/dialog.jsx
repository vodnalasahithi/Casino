import React from "react";
import { Dialog } from "@material-ui/core";

const DialogComponent = ({ show, children }) => {
  return (
    <div>
      <Dialog
        title="Dialog With Custom Width"
        open={show}
        aria-labelledby="customized-dialog-title"
        id="customized-dialog-title"
      >
        {children}
      </Dialog>
    </div>
  );
};

export default DialogComponent;
