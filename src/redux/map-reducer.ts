// import img1 from '../assets/pictures/img_1.jpg';

// const SET_NEW_MAP = 'map/SET_NEW_MAP';
// const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES';
// const UPDATE_ITEMS = 'map/UPDATE_ITEMS';

// const SHOW_GRID = 'map/SHOW_GRID';
// const HIDE_GRID = 'map/HIDE_GRID';
// const CHANGE_GRID_COLOR = 'map/CHANGE_GRID_COLOR';

// const initialState = {
//     map: img1,
//     items: [],
//     color: '#cb9d9d',
//     quantity: 0,
//     grid: false,
//     gridColor: '#ffffff'
// }

// const mapReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_NEW_MAP:
//             return {
//                 ...state,
//                 map: action.map
//             }

//         case ADD_NEW_CIRCLES:
//             return {
//                 ...state,
//                 quantity: action.quantity,
//                 color: action.color
//             }

//         case UPDATE_ITEMS:
//             return {
//                 ...state,
//                 items: action.items
//             }

//         case SHOW_GRID:
//             return {
//                 ...state,
//                 grid: true
//             }

//         case HIDE_GRID:
//             return {
//                 ...state,
//                 grid: false
//             }

//         case CHANGE_GRID_COLOR:
//             return {
//                 ...state,
//                 gridColor: action.color
//             }
//     }
//     return state
// }

// export const setNewMap = (map) => ({ type: SET_NEW_MAP, map });
// export const addNewCircle = (quantity, color) => ({type: ADD_NEW_CIRCLES, quantity, color});
// export const updateItems = (items) => ({type: UPDATE_ITEMS, items});

// export const showGrid = () => ({type: SHOW_GRID });
// export const hideGrid = () => ({type: HIDE_GRID });
// export const changeGridColor = (color) => ({type: CHANGE_GRID_COLOR, color });

// export default mapReducer;

// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")

const img1 = require('../assets/pictures/img_1.jpg')
const SET_NEW_MAP = 'map/SET_NEW_MAP'
const UPDATE_MAP_DIMENSIONS = 'map/UPDATE_MAP_DIMENSIONS'
const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES'
const UPDATE_ITEMS = 'map/UPDATE_ITEMS'
// const UPDATE_ACTIVE_CIRCLE_ID = 'map/UPDATE_ACTIVE_CIRCLE_ID'

const SHOW_GRID = 'map/SHOW_GRID'
const HIDE_GRID = 'map/HIDE_GRID'
const CHANGE_GRID_COLOR = 'map/CHANGE_GRID_COLOR'
const CHANGE_GRID_SIZE = 'map/CHANGE_GRID_SIZE'

const ADD_D4 = 'map/ADD_D4'
const DELETE_D4 = 'map/DELETE_D4'

const ADD_D6 = 'map/ADD_D6'
const DELETE_D6 = 'map/DELETE_D6'

const ADD_D8 = 'map/ADD_D8'
const DELETE_D8 = 'map/DELETE_D8'

const ADD_D10 = 'map/ADD_D10'
const DELETE_D10 = 'map/DELETE_D10'

const ADD_D12 = 'map/ADD_D12'
const DELETE_D12 = 'map/DELETE_D12'

const ADD_D20 = 'map/ADD_D20'
const DELETE_D20 = 'map/DELETE_D20'

const ADD_D100 = 'map/ADD_D100'
const DELETE_D100 = 'map/DELETE_D100'

export type ItemType = {
    x: number
    y: number
    id: string
    color: string
}

export type initialStateType = {
    map: string
    mapWidth: number
    mapHeight: number
    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number
    // activeCircleId: null | string
    grid: boolean
    gridColor: string
    gridSize: number

    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean
}

const initialState: initialStateType = {
    map: img1,
    mapWidth: 0,
    mapHeight: 0,
    items: [],
    itemColor: '#cb9d9d',
    itemsQuantity: 0,
    // activeCircleId: null,
    grid: false,
    gridColor: '#ffffff',
    gridSize: 50,

    D4: true,
    D6: true,
    D8: true,
    D10: true,
    D12: true,
    D20: true,
    D100: true
}

const mapReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case SET_NEW_MAP:
            return {
                ...state,
                map: action.map
            }

        case UPDATE_MAP_DIMENSIONS:
            return {
                ...state,
                mapWidth: action.width,
                mapHeight: action.height
            }

        case ADD_NEW_CIRCLES:
            return {
                ...state,
                itemsQuantity: action.quantity,
                itemColor: action.color
            }

        case UPDATE_ITEMS:
            return {
                ...state,
                items: action.items
            }

        // case UPDATE_ACTIVE_CIRCLE_ID:
        //     return {
        //         ...state,
        //         activeCircleId: action.activeCircleId
        //     }

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

        case ADD_D4:
            return {
                ...state,
                D4: true
            }
        case DELETE_D4:
            return {
                ...state,
                D4: false
            }

        case ADD_D6:
            return {
                ...state,
                D6: true
            }
        case DELETE_D6:
            return {
                ...state,
                D6: false
            }

        case ADD_D8:
            return {
                ...state,
                D8: true
            }
        case DELETE_D8:
            return {
                ...state,
                D8: false
            }

        case ADD_D10:
            return {
                ...state,
                D10: true
            }
        case DELETE_D10:
            return {
                ...state,
                D10: false
            }

        case ADD_D12:
            return {
                ...state,
                D12: true
            }
        case DELETE_D12:
            return {
                ...state,
                D12: false
            }

        case ADD_D20:
            return {
                ...state,
                D20: true
            }
        case DELETE_D20:
            return {
                ...state,
                D20: false
            }

        case ADD_D100:
            return {
                ...state,
                D100: true
            }
        case DELETE_D100:
            return {
                ...state,
                D100: false
            }

        default:
            return state
    }
}

type ActionsTypes = SetNewMapType | UpdateMapDimensionsType | AddNewCircleType |
    UpdateItemsType |
    // updateActiveCircleIdType | 
    ShowGridType | HideGridType | ChangeGridColorType | ChangeGridSizeType |
    addD4Type | deleteD4Type | addD6Type | deleteD6Type | addD8Type | deleteD8Type | addD10Type | deleteD10Type |
    addD12Type | deleteD12Type | addD20Type | deleteD20Type | addD100Type | deleteD100Type 

type SetNewMapType = {
    type: typeof SET_NEW_MAP
    map: string
}
export const setNewMap = (map: string): SetNewMapType => ({ type: SET_NEW_MAP, map })

type UpdateMapDimensionsType = {
    type: typeof UPDATE_MAP_DIMENSIONS
    width: number
    height: number
}
export const updateMapDimensions = (width: number, height: number): UpdateMapDimensionsType => ({ type: UPDATE_MAP_DIMENSIONS, width, height })

type AddNewCircleType = {
    type: typeof ADD_NEW_CIRCLES
    quantity: number
    color: string
}
export const addNewCircle = (quantity: number, color: string): AddNewCircleType => ({ type: ADD_NEW_CIRCLES, quantity, color })

type UpdateItemsType = {
    type: typeof UPDATE_ITEMS
    items: Array<ItemType>
}
export const updateItems = (items: Array<ItemType>): UpdateItemsType => ({ type: UPDATE_ITEMS, items })

// type updateActiveCircleIdType = {
//     type: typeof UPDATE_ACTIVE_CIRCLE_ID
//     activeCircleId: string
// }
// export const updateActiveCircleId = (activeCircleId: string): updateActiveCircleIdType => ({ type: UPDATE_ACTIVE_CIRCLE_ID, activeCircleId })

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

type addD4Type = {
    type: typeof ADD_D4
}
export const addD4 = (): addD4Type => ({ type: ADD_D4 })

type deleteD4Type = {
    type: typeof DELETE_D4
}
export const deleteD4 = (): deleteD4Type => ({ type: DELETE_D4 })

type addD6Type = {
    type: typeof ADD_D6
}
export const addD6 = (): addD6Type => ({ type: ADD_D6 })

type deleteD6Type = {
    type: typeof DELETE_D6
}
export const deleteD6 = (): deleteD6Type => ({ type: DELETE_D6 })

type addD8Type = {
    type: typeof ADD_D8
}
export const addD8 = (): addD8Type => ({ type: ADD_D8 })

type deleteD8Type = {
    type: typeof DELETE_D8
}
export const deleteD8 = (): deleteD8Type => ({ type: DELETE_D8 })

type addD10Type = {
    type: typeof ADD_D10
}
export const addD10 = (): addD10Type => ({ type: ADD_D10 })

type deleteD10Type = {
    type: typeof DELETE_D10
}
export const deleteD10 = (): deleteD10Type => ({ type: DELETE_D10 })

type addD12Type = {
    type: typeof ADD_D12
}
export const addD12 = (): addD12Type => ({ type: ADD_D12 })

type deleteD12Type = {
    type: typeof DELETE_D12
}
export const deleteD12 = (): deleteD12Type => ({ type: DELETE_D12 })

type addD20Type = {
    type: typeof ADD_D20
}
export const addD20 = (): addD20Type => ({ type: ADD_D20 })

type deleteD20Type = {
    type: typeof DELETE_D20
}
export const deleteD20 = (): deleteD20Type => ({ type: DELETE_D20 })

type addD100Type = {
    type: typeof ADD_D100
}
export const addD100 = (): addD100Type => ({ type: ADD_D100 })

type deleteD100Type = {
    type: typeof DELETE_D100
}
export const deleteD100 = (): deleteD100Type => ({ type: DELETE_D100 })

export default mapReducer