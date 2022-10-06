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


const img1 = require('../assets/pictures/img_1.jpg');

const SET_NEW_MAP = 'map/SET_NEW_MAP';
const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES';
const UPDATE_ITEMS = 'map/UPDATE_ITEMS';

const SHOW_GRID = 'map/SHOW_GRID';
const HIDE_GRID = 'map/HIDE_GRID';
const CHANGE_GRID_COLOR = 'map/CHANGE_GRID_COLOR';

export type initialStateType = {
    map: string
    items: any[]
    color: string
    quantity: number
    grid: boolean
    gridColor: string
}

const initialState: initialStateType = {
    map: img1,
    items: [],
    color: '#cb9d9d',
    quantity: 0,
    grid: false,
    gridColor: '#ffffff'
}

const mapReducer = (state = initialState, action: any) : initialStateType => {
    switch (action.type) {
        case SET_NEW_MAP:
            return {
                ...state,
                map: action.map
            }

        case ADD_NEW_CIRCLES:
            return {
                ...state,
                quantity: action.quantity,
                color: action.color
            }

        case UPDATE_ITEMS:
            return {
                ...state,
                items: action.items
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
    }
    return state
}

type setNewMapType = {
    type: typeof SET_NEW_MAP
    map: string
}

export const setNewMap = (map: string): setNewMapType => ({ type: SET_NEW_MAP, map });
export const addNewCircle = (quantity: number, color: string) => ({type: ADD_NEW_CIRCLES, quantity, color});
export const updateItems = (items: any[]) => ({type: UPDATE_ITEMS, items});

export const showGrid = () => ({type: SHOW_GRID });
export const hideGrid = () => ({type: HIDE_GRID });
export const changeGridColor = (color: string) => ({type: CHANGE_GRID_COLOR, color });

export default mapReducer;