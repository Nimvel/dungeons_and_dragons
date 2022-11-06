const CHANGE_PAINTBRUSH_COLOR = 'paint/CHANGE_PAINTBRUSH_COLOR'
const CHANGE_STROKE_WIDTH = 'paint/CHANGE_STROKE_WIDTH'

const PENSIL_MODE = 'paint/PENSIL_MODE'
const LINE_MODE = 'paint/LINE_MODE'

const DRAW_LINE = 'map/DRAW_LINE'
const DELETE_LINE = 'map/DELETE_LINE'
const CLEAN_LINES = 'map/CLEAN_LINES'

export type LineType = {
    points: number[] | Int8Array | Uint8Array | Uint8ClampedArray | 
    Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array
    id: string
    color: null | string
    strokeWidth: number
}

type initialStateType = {
    paintbrushColor: string
    strokeWidth: number
    pensilMode: boolean
    lineMode: boolean
    lines: Array<LineType>
}

const initialState: initialStateType = {
    paintbrushColor: '#ffffff',
    strokeWidth: 1,
    pensilMode: false,
    lineMode: false,
    lines: []
}

const paintReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case CHANGE_PAINTBRUSH_COLOR:
            return {
                ...state,
                paintbrushColor: action.color
            }

        case CHANGE_STROKE_WIDTH:
            return {
                ...state,
                strokeWidth: action.strokeWidth
            }

            case PENSIL_MODE:
            return {
                ...state,
                pensilMode: action.pensilMode
            }

        case LINE_MODE:
            return {
                ...state,
                lineMode: action.lineMode
            }
            
        case DRAW_LINE:
            return {
                ...state,
                lines: [...state.lines, action.line]
            }

        case DELETE_LINE:
            state.lines.pop()
            return {
                ...state,
                lines: [...state.lines]
            }

        case CLEAN_LINES:
            return {
                ...state,
                lines: []
            }

        default:
            return state
    }
}

type ActionsTypes = ChangePaintbrushColorType | UpdateStrokeWidthType | ChangePensilModeType | ChangeLineModeType |
DrawLineType | DeleteLineType | CleanLinesType

type ChangePaintbrushColorType = {
    type: typeof CHANGE_PAINTBRUSH_COLOR
    color: string
}
export const changePaintbrushColor = (color: string): ChangePaintbrushColorType => ({ type: CHANGE_PAINTBRUSH_COLOR, color })

type UpdateStrokeWidthType = {
    type: typeof CHANGE_STROKE_WIDTH
    strokeWidth: number
}
export const updateStrokeWidth = (strokeWidth: number): UpdateStrokeWidthType => ({ type: CHANGE_STROKE_WIDTH, strokeWidth })

type ChangePensilModeType = {
    type: typeof PENSIL_MODE
    pensilMode: boolean
}
export const changePensilMode = (pensilMode: boolean): ChangePensilModeType => ({ type: PENSIL_MODE, pensilMode })


type ChangeLineModeType = {
    type: typeof LINE_MODE
    lineMode: boolean
}
export const changeLineMode = (lineMode: boolean): ChangeLineModeType => ({ type: LINE_MODE, lineMode })

type DrawLineType = {
    type: typeof DRAW_LINE
    line: any
}
export const drawLine = (line: any): DrawLineType => ({ type: DRAW_LINE, line })

type DeleteLineType = {
    type: typeof DELETE_LINE
}
export const deleteLine = (): DeleteLineType => ({ type: DELETE_LINE })

type CleanLinesType = {
    type: typeof CLEAN_LINES
}
export const cleanLines = (): CleanLinesType => ({ type: CLEAN_LINES })

export default paintReducer