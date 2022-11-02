import { combineReducers, legacy_createStore as createStore } from 'redux'
import appReducer from './app-reducer'
import diceReducer from './dice-reducer'
import mapReducer from './map-reducer'
import optionsReducer from './options-reducer'
import paintReducer from './paint-reducer'
import picturesReducer from './pictures-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    picturesPage: picturesReducer,
    mapPage: mapReducer,
    dice: diceReducer,
    options: optionsReducer,
    paint: paintReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store

//@ts-ignore
window.store = store