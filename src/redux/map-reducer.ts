const img1 = require('../assets/pictures/img_1.jpg')
const SET_NEW_MAP = 'map/SET_NEW_MAP'
const UPDATE_MAP_DIMENSIONS = 'map/UPDATE_MAP_DIMENSIONS'
const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES'
const UPDATE_ITEMS = 'map/UPDATE_ITEMS'

export type ItemType = {
    x: number
    y: number
    id: string
    color: string
}

export type initialStateType = {
    map: null | string
    mapWidth: number
    mapHeight: number
    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number
}

const initialState: initialStateType = {
    map: img1, 
    mapWidth: 0,
    mapHeight: 0,
    items: [],
    itemColor: '#cb9d9d',
    itemsQuantity: 0
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

        default:
            return state
    }
}

type ActionsTypes = SetNewMapType | UpdateMapDimensionsType | AddNewCircleType | UpdateItemsType

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

export default mapReducer