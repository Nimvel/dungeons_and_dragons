import { AppStateType } from './store'

export const getPaintbrushColor = (state: AppStateType) => {
    return state.paint.paintbrushColor
}

export const getPensilMode = (state: AppStateType) => {
    return state.paint.pensilMode
}

export const getLineMode = (state: AppStateType) => {
    return state.paint.lineMode
}