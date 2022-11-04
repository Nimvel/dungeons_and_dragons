const SHOW_BORDERS = 'options/SHOW_BORDERS'
const HIDE_BORDERS = 'options/HIDE_BORDERS'
const CHANGE_BORDERS_COLOR = 'options/CHANGE_BORDERS_COLOR'

const SHOW_GRID = 'options/SHOW_GRID'
const HIDE_GRID = 'options/HIDE_GRID'
const CHANGE_GRID_COLOR = 'options/CHANGE_GRID_COLOR'
const CHANGE_GRID_SIZE = 'options/CHANGE_GRID_SIZE'

const ON_SAME_COLORS = 'options/ON_SAME_COLORS'

type initialStateType = {
    borders: boolean
    bordersColor: string

    grid: boolean
    gridColor: string
    gridSize: number

    isSameColors: boolean
}

const initialState: initialStateType = {
    borders: true,
    bordersColor: '#ffffff',

    grid: true,
    gridColor: '#ffffff',
    gridSize: 50,

    isSameColors: false
}

const optionsReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case SHOW_BORDERS:
            return {
                ...state,
                borders: true
            }

        case HIDE_BORDERS:
            return {
                ...state,
                borders: false
            }

        case CHANGE_BORDERS_COLOR:
            return {
                ...state,
                bordersColor: action.color
            }

        case SHOW_GRID:
            return {
                ...state,
                grid: true
            }

        case HIDE_GRID:
            return {
                ...state,
                grid: false
            }

        case CHANGE_GRID_COLOR:
            return {
                ...state,
                gridColor: action.color
            }

        case CHANGE_GRID_SIZE:
            return {
                ...state,
                gridSize: action.size
            }

        case ON_SAME_COLORS:
            return {
                ...state,
                isSameColors: !state.isSameColors
            }

        default:
            return state
    }
}

type ActionsTypes = ShowBordersType | HideBordersType | ChangeBordersColorType | 
ShowGridType | HideGridType | ChangeGridColorType | ChangeGridSizeType | onSameColorsType

type ShowBordersType = {
    type: typeof SHOW_BORDERS
}
export const showBorders = (): ShowBordersType => ({ type: SHOW_BORDERS })

type HideBordersType = {
    type: typeof HIDE_BORDERS
}
export const hideBorders = (): HideBordersType => ({ type: HIDE_BORDERS })

type ChangeBordersColorType = {
    type: typeof CHANGE_BORDERS_COLOR
    color: string
}
export const changeBordersColor = (color: string): ChangeBordersColorType => ({ type: CHANGE_BORDERS_COLOR, color })

type ShowGridType = {
    type: typeof SHOW_GRID
}
export const showGrid = (): ShowGridType => ({ type: SHOW_GRID })

type HideGridType = {
    type: typeof HIDE_GRID
}
export const hideGrid = (): HideGridType => ({ type: HIDE_GRID })

type ChangeGridColorType = {
    type: typeof CHANGE_GRID_COLOR
    color: string
}
export const changeGridColor = (color: string): ChangeGridColorType => ({ type: CHANGE_GRID_COLOR, color })

type ChangeGridSizeType = {
    type: typeof CHANGE_GRID_SIZE
    size: number
}
export const changeGridSize = (size: number): ChangeGridSizeType => ({ type: CHANGE_GRID_SIZE, size })

type onSameColorsType = {
    type: typeof ON_SAME_COLORS
}
export const onSameColors = (): onSameColorsType => ({ type: ON_SAME_COLORS })

export default optionsReducer