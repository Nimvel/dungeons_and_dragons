import { AppStateType } from './store'

export const getGrid = (state: AppStateType) => {
    return state.options.grid
}

export const getGridColor = (state: AppStateType) => {
    return state.options.gridColor
}

export const getGridSize = (state: AppStateType) => {
    return state.options.gridSize
}