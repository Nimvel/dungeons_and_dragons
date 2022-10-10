import { combineReducers, legacy_createStore as createStore } from "redux";
import appReducer from "./app-reducer.ts";
import mapReducer from "./map-reducer.ts";
import picturesReducer from "./pictures-reducer.ts";

const reducers = combineReducers({
    app: appReducer,
    picturesPage: picturesReducer,
    mapPage: mapReducer
})

const store = createStore(reducers);

export default store;

window.store = store