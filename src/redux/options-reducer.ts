const BORDERS = 'options/BORDERS'
const CHANGE_BORDERS_COLOR = 'options/CHANGE_BORDERS_COLOR'

const GRID = 'options/GRID'
const CHANGE_GRID_COLOR = 'options/CHANGE_GRID_COLOR'
const CHANGE_GRID_SIZE = 'options/CHANGE_GRID_SIZE'

const ON_SAME_COLORS = 'options/ON_SAME_COLORS'
const CHANGE_BOTH_COLORS = 'options/CHANGE_BOTH_COLORS'

type initialStateType = {
    borders: boolean
    bordersColor: string

    grid: boolean
    gridColor: string
    gridSize: number

    isSameColors: boolean
    bothColors: string
}

const initialState: initialStateType = {
    borders: false,
    bordersColor: '#ffffff',

    grid: false,
    gridColor: '#ffffff',
    gridSize: 50,

    isSameColors: false,
    bothColors: '#ffffff'
}

const optionsReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case BORDERS:
            return {
                ...state,
                borders: !state.borders
            }

        case CHANGE_BORDERS_COLOR:
            return {
                ...state,
                bordersColor: action.color
            }

        case GRID:
            return {
                ...state,
                grid: !state.grid
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

        case CHANGE_BOTH_COLORS:
            return {
                ...state,
                bothColors: action.color
            }

        default:
            return state
    }
}

type ActionsTypes = OnBordersType | ChangeBordersColorType | OnGridType | ChangeGridColorType |
    ChangeGridSizeType | onSameColorsType | ChangeBothColorsType

type OnBordersType = {
    type: typeof BORDERS
}
export const onBorders = (): OnBordersType => ({ type: BORDERS })

type ChangeBordersColorType = {
    type: typeof CHANGE_BORDERS_COLOR
    color: string
}
export const changeBordersColor = (color: string): ChangeBordersColorType => ({ type: CHANGE_BORDERS_COLOR, color })

type OnGridType = {
    type: typeof GRID
}
export const onGrid = (): OnGridType => ({ type: GRID })

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

type ChangeBothColorsType = {
    type: typeof CHANGE_BOTH_COLORS
    color: string
}
export const changeBothColors = (color: string): ChangeBothColorsType => ({ type: CHANGE_BOTH_COLORS, color })


export default optionsReducer