const CHANGE_PAINTBRUSH_COLOR = 'paint/CHANGE_PAINTBRUSH_COLOR'

const PENSIL_MODE = 'paint/PENSIL_MODE'
const LINE_MODE = 'paint/LINE_MODE'

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

            case PENSIL_MODE:
            return {
                ...state,
                pensilMode: !state.pensilMode
            }

        case LINE_MODE:
            return {
                ...state,
                lineMode: !state.lineMode
            }

        default:
            return state
    }
}

type ActionsTypes = onChangePaintbrushColorType | ChangePensilModeType | ChangeLineModeType

type onChangePaintbrushColorType = {
    type: typeof CHANGE_PAINTBRUSH_COLOR
    color: string
}
export const onChangePaintbrushColor = (color: string): onChangePaintbrushColorType => ({ type: CHANGE_PAINTBRUSH_COLOR, color })

type ChangePensilModeType = {
    type: typeof PENSIL_MODE
}
export const changePensilMode = (): ChangePensilModeType => ({ type: PENSIL_MODE })


type ChangeLineModeType = {
    type: typeof LINE_MODE
}
export const changeLineMode = (): ChangeLineModeType => ({ type: LINE_MODE })

export default paintReducer