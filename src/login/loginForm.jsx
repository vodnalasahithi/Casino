import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@material-ui/core";
import DialogComponent from "../components/dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
  },
  submit: {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    margin: "21px",
  },
  guestButton: {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    margin: "21px",
    width: "250px",
  },
  div: {
    textAlign: "center",
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  divider: {
    textAlign: "center",
  },
}));

const LoginForm = ({ show, onClose }) => {
  const classes = useStyles();
  localStorage.setItem("balance", 99.9);

  const [userName, setUserName] = useState("");
  const user = localStorage.getItem("userName");
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("userName", userName);
    setUserName("");
    onClose();
  }

  const setUserAsGuest = () => {
    localStorage.setItem("userName", "Guest");
    onClose();
  };

  return (
    <div>
     <DialogComponent show={show}>
        <DialogContent className={classes.div}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <span>X</span>
          </IconButton>
          {user !== "Guest" && (
            <div>
              <Button
                type="button"
                className={classes.guestButton}
                onClick={() => setUserAsGuest()}
              >
                Play as guest
              </Button>
              <h5 className={classes.divider}>OR</h5>
            </div>
          )}

          <div>
            <DialogTitle id="customized-dialog-title">Login</DialogTitle>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div>
                <TextField
                  id="standard-error-helper-text"
                  label="User Name"
                  placeholder="Enter your name"
                  required
                  value={userName}
                  onInput={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <Button type="submit" className={classes.submit}>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
        </DialogComponent >

    </div>
  );
};

export default LoginForm;
