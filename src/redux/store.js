import { compose, createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import addRowReducer from "./reducer";

const rootreducer = combineReducers({
  casino: addRowReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

let store = createStore(persistedReducer, composeEnhancers());
let persistor = persistStore(store);
export { store, persistor };
