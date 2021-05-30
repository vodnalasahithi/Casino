import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
  table: {
    textAlign: "center",
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
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "slot1", headerName: "Slot 1", width: 130, sortable: false },
  { field: "slot2", headerName: "Slot 2", width: 130, sortable: false },
  { field: "slot3", headerName: "Slot 3", width: 130, sortable: false },
  { field: "time", headerName: "Time", width: 130 },
];

// let rows = [];

export default function DataTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("slotValues") !== null) {
      setRows(rows => [...rows, JSON.parse(localStorage.getItem("slotValues"))]);
    }
  }, [localStorage.getItem("slotValues")]);

  return (
    <div
      style={{
        height: 450,
        textAlign: "center",
        padding: "20px",
      }}
    >
      <DataGrid
        className={classes.table}
        rows={rows}
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
