const CHANGE_PAINTBRUSH_COLOR = 'paint/CHANGE_PAINTBRUSH_COLOR'

const ON_PENSIL_MODE = 'paint/ON_PENSIL_MODE'
const OFF_PENSIL_MODE = 'paint/OFF_PENSIL_MODE'

const ON_LINE_MODE = 'paint/ON_LINE_MODE'
const OFF_LINE_MODE = 'paint/OFF_LINE_MODE'

type initialStateType = {
    paintbrushColor: string
    pensilMode: boolean
    lineMode: boolean
}

const initialState: initialStateType = {
    paintbrushColor: '#ffffff',
    pensilMode: false,
    lineMode: false
}

const paintReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case CHANGE_PAINTBRUSH_COLOR:
            return {
                ...state,
                paintbrushColor: action.color
            }

        case ON_PENSIL_MODE:
            return {
                ...state,
                pensilMode: true
            }

        case OFF_PENSIL_MODE:
            return {
                ...state,
                pensilMode: false
            }

        case ON_LINE_MODE:
            return {
                ...state,
                lineMode: true
            }

        case OFF_LINE_MODE:
            return {
                ...state,
                lineMode: false
            }

        default:
            return state
    }
}

type ActionsTypes = onChangePaintbrushColorType | onPensilModeType | offPensilModeType | onLineModeType | offLineModeType

type onChangePaintbrushColorType = {
    type: typeof CHANGE_PAINTBRUSH_COLOR
    color: string
}
export const onChangePaintbrushColor = (color: string): onChangePaintbrushColorType => ({ type: CHANGE_PAINTBRUSH_COLOR, color })

type onPensilModeType = {
    type: typeof ON_PENSIL_MODE
}
export const onPensilMode = (): onPensilModeType => ({ type: ON_PENSIL_MODE })

type offPensilModeType = {
    type: typeof OFF_PENSIL_MODE
}
export const offPensilMode = (): offPensilModeType => ({ type: OFF_PENSIL_MODE })

type onLineModeType = {
    type: typeof ON_LINE_MODE
}
export const onLineMode = (): onLineModeType => ({ type: ON_LINE_MODE })

type offLineModeType = {
    type: typeof OFF_LINE_MODE
}
export const offLineMode = (): offLineModeType => ({ type: OFF_LINE_MODE })

export default paintReducer