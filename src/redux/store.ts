import { combineReducers, legacy_createStore as createStore } from 'redux'
import appReducer from './app-reducer'
import backgroundItemsReducer from './backgrounds-reducer'
import diceReducer from './dice-reducer'
import educationReducer from './education-reducer'
import itemImagesReducer from './itemImages-reducer'
import mapReducer from './map-reducer'
import navbarReducer from './navbar-reducer'
import optionsReducer from './options-reducer'
import paintReducer from './paint-reducer'
import picturesReducer from './pictures-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    navbar: navbarReducer,
    pictures: picturesReducer,
    backgroundItems: backgroundItemsReducer,
    items: itemImagesReducer,
    map: mapReducer,
    dice: diceReducer,
    options: optionsReducer,
    paint: paintReducer, 
    education: educationReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store

//@ts-ignore
window.store = store