import { AppStateType } from './store'

export const getMap = (state: AppStateType) => {
    return state.map.map
}

export const getMapWidth = (state: AppStateType) => {
    return state.map.mapWidth
}

export const getMapHeight = (state: AppStateType) => {
    return state.map.mapHeight
}

export const getBackgroundItemOnMap = (state: AppStateType) => {
    return state.map.backgroundItemsOnMap
}

export const getItems = (state: AppStateType) => {
    return state.map.items
}

export const getItemColor = (state: AppStateType) => {
    return state.map.itemColor
}

export const getItemsQuantity = (state: AppStateType) => {
    return state.map.itemsQuantity
}