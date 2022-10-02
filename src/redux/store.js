import { combineReducers, legacy_createStore as createStore } from "redux";
import mapReducer from "./map-reducer";
import picturesReducer from "./pictures-reducer";

const reducers = combineReducers({
    picturesPage: picturesReducer,
    mapPage: mapReducer
})

const store = createStore(reducers);

export default store;

window.store = store