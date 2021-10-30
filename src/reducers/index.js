import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import fileReducer from "./FileReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
