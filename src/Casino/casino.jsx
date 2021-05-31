import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Game from "./game";
import DataTable from "../components/table";

const Casino = () => {
  const [popup, setPopup] = useState(false);
  const openDialog = () => {
    setPopup(true);
  };

  const closeDialog = () => {
    setPopup(false);
  };

  return (
    <div>
      <div className="start-new-game-container">
        <Button
          type="button"
         color="primary"
          onClick={() => openDialog()}
        >
          Start a new game
        </Button>
      </div>
      <DataTable />
      {popup && <Game show={popup} onClose={closeDialog} />}
    </div>
  );
};

export default Casino;
