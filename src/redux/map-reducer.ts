const img1 = require('../assets/pictures/img_1.jpg')
const SET_NEW_MAP = 'map/SET_NEW_MAP'
const UPDATE_MAP_DIMENSIONS = 'map/UPDATE_MAP_DIMENSIONS'
const CLEAN_MAP = 'map/CLEAN_MAP'

const ADD_NEW_BACKGROUND_ITEM = 'map/ADD_NEW_BACKGROUND_ITEM'
const UPDATE_BACKGROUND_ITEMS = 'map/UPDATE_BACKGROUND_ITEMS'

const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES'
const UPDATE_ITEMS = 'map/UPDATE_ITEMS'

export type BackgroundItemOnMapType = {
    backgroundItemOnMap: string
    x: number
    y: number
    id: string
}

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
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number
}

const initialState: initialStateType = {
    map: img1,
    mapWidth: 1000,
    mapHeight: 1000,
    backgroundItemsOnMap: [],
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

        case CLEAN_MAP:
            return {
                ...state,
                map: null
            }

        case UPDATE_MAP_DIMENSIONS:
            return {
                ...state,
                mapWidth: action.width,
                mapHeight: action.height
            }

        case ADD_NEW_BACKGROUND_ITEM:
            let item = {
                backgroundItemOnMap: action.backgroundItemOnMap,
                x: 0,
                y: 0,
                id: `background-${state.backgroundItemsOnMap.length}`
            }
            return {
                ...state,
                backgroundItemsOnMap: [...state.backgroundItemsOnMap, item]
            }

        case UPDATE_BACKGROUND_ITEMS:
            return {
                ...state,
                backgroundItemsOnMap: action.backgroundItemsOnMap
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

type ActionsTypes = SetNewMapType | CleanMapType | UpdateMapDimensionsType |
    AddNewBackgroundItemOnMapType | AddNewCircleType | UpdateItemsType | updateBackgroundItemsType

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

type CleanMapType = {
    type: typeof CLEAN_MAP
}
export const cleanMap = (): CleanMapType => ({ type: CLEAN_MAP })

type AddNewBackgroundItemOnMapType = {
    type: typeof ADD_NEW_BACKGROUND_ITEM
    backgroundItemOnMap: string
}
export const addNewBackgroundItemOnMap = (backgroundItemOnMap: string): AddNewBackgroundItemOnMapType =>
    ({ type: ADD_NEW_BACKGROUND_ITEM, backgroundItemOnMap })

type updateBackgroundItemsType = {
    type: typeof UPDATE_BACKGROUND_ITEMS
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
}
export const updateBackgroundItems = (backgroundItemsOnMap: Array<BackgroundItemOnMapType>): updateBackgroundItemsType =>
    ({ type: UPDATE_BACKGROUND_ITEMS, backgroundItemsOnMap })

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

