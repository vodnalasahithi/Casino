import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

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
  { field: "id", headerName: "ID", width: 230 },
  { field: "slot1", headerName: "Slot 1", width: 230, sortable: false },
  { field: "slot2", headerName: "Slot 2", width: 230, sortable: false },
  { field: "slot3", headerName: "Slot 3", width: 230, sortable: false },
  { field: "time", headerName: "Time", width: 230 },
];

const DataTable = (props) => {
  const classes = useStyles();

  return (
    <div
      style={{
        height: 400,
        textAlign: "center",
        padding: "20px",
      }}
    >
      <DataGrid
        className={classes.table}
        rows={props.rows}
        columns={columns}
        pageSize={6}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { rows: state.casino.rows };
};

export default connect(mapStateToProps, {})(DataTable);
