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

// export const getIsMenuActive = (state: AppStateType) => {
//     return state.app.isMenuActive
// }

export const getItems = (state: AppStateType) => {
    return state.mapPage.items
}

export const getItemColor = (state: AppStateType) => {
    return state.mapPage.itemColor
}

export const getItemsQuantity = (state: AppStateType) => {
    return state.mapPage.itemsQuantity
}

// export const getActiveCircleId = (state: AppStateType) => {
//     return state.mapPage.activeCircleId
// }

export const getGrid = (state: AppStateType) => {
    return state.mapPage.grid
}

export const getGridColor = (state: AppStateType) => {
    return state.mapPage.gridColor
}

export const getGridSize = (state: AppStateType) => {
    return state.mapPage.gridSize
}

export const getD4 = (state: AppStateType) => {
    return state.mapPage.D4
}

export const getD6 = (state: AppStateType) => {
    return state.mapPage.D6
}

export const getD8 = (state: AppStateType) => {
    return state.mapPage.D8
}

export const getD10 = (state: AppStateType) => {
    return state.mapPage.D10
}

export const getD12 = (state: AppStateType) => {
    return state.mapPage.D12
}

export const getD20 = (state: AppStateType) => {
    return state.mapPage.D20
}

export const getD100 = (state: AppStateType) => {
    return state.mapPage.D100
}