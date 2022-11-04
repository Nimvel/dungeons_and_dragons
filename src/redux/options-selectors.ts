import { AppStateType } from './store'

export const getBorders = (state: AppStateType) => {
    return state.options.borders
}

export const getBordersColor = (state: AppStateType) => {
    return state.options.bordersColor
}

export const getGrid = (state: AppStateType) => {
    return state.options.grid
}

export const getGridColor = (state: AppStateType) => {
    return state.options.gridColor
}

export const getGridSize = (state: AppStateType) => {
    return state.options.gridSize
}

export const getIsSameColors = (state: AppStateType) => {
    return state.options.isSameColors
}