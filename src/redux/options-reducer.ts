const SHOW_GRID = 'options/SHOW_GRID'
const HIDE_GRID = 'options/HIDE_GRID'
const CHANGE_GRID_COLOR = 'options/CHANGE_GRID_COLOR'
const CHANGE_GRID_SIZE = 'options/CHANGE_GRID_SIZE'

type initialStateType = {
    grid: boolean
    gridColor: string
    gridSize: number
}

const initialState: initialStateType = {
    grid: false,
    gridColor: '#ffffff',
    gridSize: 50
}

const optionsReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
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

        default:
            return state
    }
}

type ActionsTypes = ShowGridType | HideGridType | ChangeGridColorType | ChangeGridSizeType

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

export default optionsReducer