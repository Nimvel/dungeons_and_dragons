import { combineReducers, legacy_createStore as createStore } from 'redux'
import appReducer from './app-reducer'
import mapReducer from './map-reducer'
import picturesReducer from './pictures-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    picturesPage: picturesReducer,
    mapPage: mapReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store

//@ts-ignore
window.store = store