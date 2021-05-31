export const initialState = {
  rows: [],
};

export default function addRowReducer(state = initialState, action) {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case "ADD_ROW":
      return { ...state.rows, rows: state.rows.concat(action.payload) };

    default:
      return state;
  }
}
