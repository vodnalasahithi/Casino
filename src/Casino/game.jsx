import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@material-ui/core";
import DialogComponent from "./dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
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

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  slots: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

const Game = ({ show, onClose }) => {
  const classes = useStyles();
  const [slotValues, setSlotValues] = useState({
    slot1: "",
    slot2: "",
    slot3: "",
    id: 0,
    time: "",
  });
  const balance = localStorage.getItem("balance");

  const user = localStorage.getItem("userName");

  const calculateBalance = () => {
    if (
      slotValues.slot1 === 7 &&
      slotValues.slot2 === 7 &&
      slotValues.slot3 === 7
    ) {
      localStorage.setItem("balance", parseFloat(balance) + 10);
    } else if (
      slotValues.slot1 === slotValues.slot2 &&
      slotValues.slot2 === slotValues.slot3
    ) {
      localStorage.setItem("balance", parseFloat(balance) + 5);
    } else if (
      slotValues.slot1 === slotValues.slot2 ||
      slotValues.slot2 === slotValues.slot3
    ) {
      localStorage.setItem("balance", parseFloat(balance) + 0.5);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("balance", balance - 1);
    setSlotValues({
      id: Math.random(),
      slot1: Math.floor(Math.random() * 10),
      slot2: Math.floor(Math.random() * 10),
      slot3: Math.floor(Math.random() * 10),
      time: "8397478",
    });
  };

  const setFakeValues = () => {
    localStorage.setItem("balance", balance - 1);
    setSlotValues({
      id: Math.random(),
      slot1: 7,
      slot2: 7,
      slot3: 7,
      time: "8397478",
    });
  };

  useEffect(() => {
    if (slotValues.slot1 !== "") {
      calculateBalance();
      localStorage.setItem("slotValues", JSON.stringify(slotValues));
    }
  }, [slotValues]);

  return (
    <div>
      <DialogComponent show={show}>
        <DialogContent>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <span>X</span>
          </IconButton>
          <div>
            <DialogTitle id="customized-dialog-title">
              <h3>Casino</h3>
            </DialogTitle>
            <form className={classes.root} noValidate autoComplete="off">
              <div className={classes.slots}>
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  disabled
                  value={slotValues.slot1}
                  label="Slot 1"
                />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  disabled
                  value={slotValues.slot2}
                  label="Slot 2"
                />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  disabled
                  value={slotValues.slot3}
                  label="Slot 3"
                />
              </div>
              <div className={classes.slots}>
                <Button
                  type="button"
                  className={classes.submit}
                  onClick={() => handleSubmit()}
                >
                  Spin
                </Button>
                <Button
                  type="button"
                  className={classes.submit}
                  onClick={() => setFakeValues()}
                >
                  Debug
                </Button>
                <Button
                  type="button"
                  className={classes.submit}
                  onClick={() => onClose()}
                >
                  Close
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </DialogComponent>
    </div>
  );
};

export default Game;
