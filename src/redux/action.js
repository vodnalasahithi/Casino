import { store } from "./store";

export const addRow = (row) => {
  return store.dispatch({ type: "ADD_ROW", payload: row });
};
