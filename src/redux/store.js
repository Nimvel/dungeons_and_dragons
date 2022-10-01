import { combineReducers, legacy_createStore as createStore } from "redux";
import picturesReducer from "./pictures-reducer";

const reducers = combineReducers({
    picturesPage: picturesReducer
})

const store = createStore(reducers);

export default store;

window.store = store