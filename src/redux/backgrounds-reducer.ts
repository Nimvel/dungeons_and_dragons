const img1 = require('./../assets/backgrounds/background_1.png')
const img2 = require('./../assets/backgrounds/background_2.png')
const img3 = require('./../assets/backgrounds/background_3.png')
const img4 = require('./../assets/backgrounds/background_4.png')
const img5 = require('./../assets/backgrounds/background_5.png')
const img6 = require('./../assets/backgrounds/background_6.png')
// const img7 = require('./../assets/backgrounds/background_7.png')
// const img8 = require('./../assets/backgrounds/background_8.png')
const img9 = require('./../assets/backgrounds/background_9.png')
const img10 = require('./../assets/backgrounds/background_10.png')
const img11 = require('./../assets/backgrounds/background_11.png')
const img12 = require('./../assets/backgrounds/background_12.png')
const horizontal_road = require('./../assets/backgrounds/horizontal_road.png')
const vertical_road = require('./../assets/backgrounds/vertical_road.png')
const right_bottom_turn = require('./../assets/backgrounds/right_bottom_turn.png')
const bottom_left_turn = require('./../assets/backgrounds/bottom_left_turn.png')
const top_right_turn = require('./../assets/backgrounds/top_right_turn.png')
const left_top_turn = require('./../assets/backgrounds/left_top_turn.png')
const crossroads = require('./../assets/backgrounds/crossroads.png')

const SAVE_NEW_BACKGROUND_ITEM = 'backgrounds/SAVE_NEW_BACKGROUND_ITEM'
const DELETE_BACKGROUND_ITEM = 'backgrounds/DELETE_BACKGROUND_ITEM'

const FREE_MOVEMENT = 'map/FREE_MOVEMENT'
const FIX_BACKGROUND_ITEMS = 'map/FIX_BACKGROUND_ITEMS'

const SET_CLICKED_ITEM_ID = 'map/SET_CLICKED_ITEM_ID'

export type BackgroundItemType = {
    id: string
    backgroundItem: string
}

type initialStateType = {
    backgroundItems: Array<BackgroundItemType>
    isFreeMovement: boolean
    isFixBackgroundItems: boolean
    clickedItemId: null | string
}

const initialState = {
    backgroundItems: [
        { id: 'background-1', backgroundItem: img1 },
        { id: 'background-2', backgroundItem: img2 },
        { id: 'background-3', backgroundItem: img3 },
        { id: 'background-4', backgroundItem: img4 },
        { id: 'background-5', backgroundItem: img5 },
        { id: 'background-6', backgroundItem: img6 },
        // { id: 6, backgroundItem: img7 },
        // { id: 7, backgroundItem: img8 },
        { id: 'background-7', backgroundItem: img9 },
        { id: 'background-8', backgroundItem: img10 },
        { id: 'background-9', backgroundItem: img11 },
        { id: 'background-10', backgroundItem: img12 },
        { id: 'background-11', backgroundItem: horizontal_road },
        { id: 'background-12', backgroundItem: vertical_road },
        { id: 'background-13', backgroundItem: right_bottom_turn },
        { id: 'background-14', backgroundItem: bottom_left_turn },
        { id: 'background-15', backgroundItem: top_right_turn },
        { id: 'background-16', backgroundItem: left_top_turn },
        { id: 'background-17', backgroundItem: crossroads },
    ],
    isFreeMovement: true,
    isFixBackgroundItems: false,
    clickedItemId: null
}

const backgroundItemsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_BACKGROUND_ITEM:
            return {
                ...state, backgroundItems: [...state.backgroundItems,
                { id: `background-${state.backgroundItems.length}`, backgroundItem: URL.createObjectURL(action.backgroundItem) }]
            }

        case DELETE_BACKGROUND_ITEM:
            return {
                ...state,
                backgroundItems: state.backgroundItems.filter(el => action.id !== el.id)
            }

        case FREE_MOVEMENT:
            return {
                ...state,
                isFreeMovement: !state.isFreeMovement
            }

        case FIX_BACKGROUND_ITEMS:
            return {
                ...state,
                isFixBackgroundItems: !state.isFixBackgroundItems
            }

        case SET_CLICKED_ITEM_ID:
            return {
                ...state,
                clickedItemId: action.clickedItemId
            }

        default:
            return state
    }
}

type ActionsTypes = saveNewBackgroundItemType | deleteBackgroundItemType | OnFixBackgroundItemsType |
    OnFreeMovementType | SetClickedItemIdType

type saveNewBackgroundItemType = {
    type: typeof SAVE_NEW_BACKGROUND_ITEM
    backgroundItem: Blob | MediaSource
}
export const saveNewBackgroundItem = (backgroundItem: Blob | MediaSource): saveNewBackgroundItemType =>
    ({ type: SAVE_NEW_BACKGROUND_ITEM, backgroundItem })

type deleteBackgroundItemType = {
    type: typeof DELETE_BACKGROUND_ITEM
    id: string
}
export const deleteBackgroundItem = (id: string): deleteBackgroundItemType => ({ type: DELETE_BACKGROUND_ITEM, id })

type OnFreeMovementType = {
    type: typeof FREE_MOVEMENT
}
export const onFreeMovement = (): OnFreeMovementType => ({ type: FREE_MOVEMENT })

type OnFixBackgroundItemsType = {
    type: typeof FIX_BACKGROUND_ITEMS
}
export const onFixBackgroundItems = (): OnFixBackgroundItemsType => ({ type: FIX_BACKGROUND_ITEMS })

type SetClickedItemIdType = {
    type: typeof SET_CLICKED_ITEM_ID
    clickedItemId: null | string
}
export const setClickedItemId = (clickedItemId: null | string): SetClickedItemIdType => ({ type: SET_CLICKED_ITEM_ID, clickedItemId })


export default backgroundItemsReducer

