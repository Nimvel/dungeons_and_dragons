import { AppStateType } from './store'

export const getPaintbrushColor = (state: AppStateType) => {
    return state.paint.paintbrushColor
}

export const getStrokeWidth = (state: AppStateType) => {
    return state.paint.strokeWidth
}

export const getPensilMode = (state: AppStateType) => {
    return state.paint.pensilMode
}

export const getLineMode = (state: AppStateType) => {
    return state.paint.lineMode
}

export const getLines = (state: AppStateType) => {
    return state.paint.lines
}