import { AppStateType } from './store'

export const getMap = (state: AppStateType) => {
    return state.mapPage.map
}

export const getMapWidth = (state: AppStateType) => {
    return state.mapPage.mapWidth
}

export const getMapHeight = (state: AppStateType) => {
    return state.mapPage.mapHeight
}

export const getBackgroundItemOnMap = (state: AppStateType) => {
    return state.mapPage.backgroundItemsOnMap
}

export const getItems = (state: AppStateType) => {
    return state.mapPage.items
}

export const getItemColor = (state: AppStateType) => {
    return state.mapPage.itemColor
}

export const getItemsQuantity = (state: AppStateType) => {
    return state.mapPage.itemsQuantity
}