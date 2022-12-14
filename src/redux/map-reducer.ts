const SET_NEW_MAP = 'map/SET_NEW_MAP'
const UPDATE_MAP_DIMENSIONS = 'map/UPDATE_MAP_DIMENSIONS'
const CLEAN_MAP = 'map/CLEAN_MAP'

const ADD_NEW_BACKGROUND_ITEM = 'map/ADD_NEW_BACKGROUND_ITEM'
const UPDATE_BACKGROUND_ITEMS = 'map/UPDATE_BACKGROUND_ITEMS'

const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES'
const ADD_NEW_ITEM_WITH_IMAGE = 'map/ADD_NEW_CIRCLE_WITH_IMAGE'
const UPDATE_ITEMS = 'map/UPDATE_ITEMS'

const SET_URI = 'map/SET_URI'

export type BackgroundItemOnMapType = {
    backgroundItemOnMap: string
    x: number
    y: number
    id: string
    clickedItemId: string
}

export type ItemType = {
    x: number
    y: number
    id: string
    color: null | string
    image: null | string
}

export type initialStateType = {
    map: null | string
    uri: string
    mapWidth: number
    mapHeight: number
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
    items: Array<ItemType>
    itemColor: string
    itemsQuantity: number
}

const initialState: initialStateType = {
    map: null,
    uri: '',
    mapWidth: 300,
    mapHeight: 400,
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
            let backgroundItemOnMap = {
                backgroundItemOnMap: action.backgroundItemOnMap,
                x: action.x,
                y: action.y,
                id: `background-${state.backgroundItemsOnMap.length}`,
                clickedItemId: action.clickedItemId
            }
            return {
                ...state,
                backgroundItemsOnMap: [...state.backgroundItemsOnMap, backgroundItemOnMap]
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

        case ADD_NEW_ITEM_WITH_IMAGE:
            let item = {
                image: action.itemImage,
                color: null,
                x: 25,
                y: 25,
                id: `itemWithImage-${state.items.length}`
            }
            return {
                ...state,
                items: [...state.items, item]
            }

        case UPDATE_ITEMS:
            return {
                ...state,
                items: action.items
            }

        case SET_URI:
            return {
                ...state,
                uri: action.uri
            }

        default:
            return state
    }
}

type ActionsTypes = SetNewMapType | CleanMapType | UpdateMapDimensionsType |
    AddNewBackgroundItemOnMapType | UpdateBackgroundItemsType | 
    AddNewCircleType | AddNewItemWithImageType | UpdateItemsType |SetURIType

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
    x: number
    y: number
    clickedItemId: string
}
export const addNewBackgroundItemOnMap = (backgroundItemOnMap: string, x: number, y: number, clickedItemId: string): AddNewBackgroundItemOnMapType =>
    ({ type: ADD_NEW_BACKGROUND_ITEM, backgroundItemOnMap, x, y, clickedItemId})

type UpdateBackgroundItemsType = {
    type: typeof UPDATE_BACKGROUND_ITEMS
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
}
export const updateBackgroundItems = (backgroundItemsOnMap: Array<BackgroundItemOnMapType>): UpdateBackgroundItemsType =>
    ({ type: UPDATE_BACKGROUND_ITEMS, backgroundItemsOnMap })

type AddNewCircleType = {
    type: typeof ADD_NEW_CIRCLES
    quantity: number
    color: string
}
export const addNewCircle = (quantity: number, color: string): AddNewCircleType => ({ type: ADD_NEW_CIRCLES, quantity, color })

type AddNewItemWithImageType = {
    type: typeof ADD_NEW_ITEM_WITH_IMAGE
    itemImage: string
}
export const addNewItemWithImage = (itemImage: string): AddNewItemWithImageType =>
    ({ type: ADD_NEW_ITEM_WITH_IMAGE, itemImage })

type UpdateItemsType = {
    type: typeof UPDATE_ITEMS
    items: Array<ItemType>
}
export const updateItems = (items: Array<ItemType>): UpdateItemsType => ({ type: UPDATE_ITEMS, items })

type SetURIType = {
    type: typeof SET_URI
    uri: string
}
export const setURI = (uri: string): SetURIType => ({ type: SET_URI, uri })

export default mapReducer

