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
const img13 = require('./../assets/backgrounds/background_13.png')
const img14 = require('./../assets/backgrounds/background_14.png')

const SAVE_NEW_BACKGROUND_ITEM = 'backgrounds/SAVE_NEW_BACKGROUND_ITEM'
const DELETE_BACKGROUND_ITEM = 'backgrounds/DELETE_BACKGROUND_ITEM'

const FREE_MOVEMENT = 'map/FREE_MOVEMENT'
const FIX_BACKGROUND_ITEMS = 'map/FIX_BACKGROUND_ITEMS'

export type BackgroundItemType = {
    id: number
    backgroundItem: string
}

type initialStateType = {
    backgroundItems: Array<BackgroundItemType>
    isFreeMovement: boolean
    isFixBackgroundItems: boolean
}

const initialState = {
    backgroundItems: [
        { id: 0, backgroundItem: img1 },
        { id: 1, backgroundItem: img2 },
        { id: 2, backgroundItem: img3 },
        { id: 3, backgroundItem: img4 },
        { id: 4, backgroundItem: img5 },
        { id: 5, backgroundItem: img6 },
        // { id: 6, backgroundItem: img7 },
        // { id: 7, backgroundItem: img8 },
        { id: 6, backgroundItem: img9 },
        { id: 7, backgroundItem: img10 },
        { id: 8, backgroundItem: img11 },
        { id: 9, backgroundItem: img12 },
        { id: 10, backgroundItem: img13 },
        { id: 11, backgroundItem: img14 },
    ],
    isFreeMovement: false,
    isFixBackgroundItems: false
}

const backgroundItemsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_BACKGROUND_ITEM:
            return {
                ...state, backgroundItems: [...state.backgroundItems,
                { id: state.backgroundItems.length, backgroundItem: URL.createObjectURL(action.backgroundItem) }]
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

        default:
            return state
    }
}

type ActionsTypes = saveNewBackgroundItemType | deleteBackgroundItemType | OnFixBackgroundItemsType |onFreeMovementType

type saveNewBackgroundItemType = {
    type: typeof SAVE_NEW_BACKGROUND_ITEM
    backgroundItem: Blob | MediaSource
}
export const saveNewBackgroundItem = (backgroundItem: Blob | MediaSource): saveNewBackgroundItemType =>
    ({ type: SAVE_NEW_BACKGROUND_ITEM, backgroundItem })

type deleteBackgroundItemType = {
    type: typeof DELETE_BACKGROUND_ITEM
    id: number
}
export const deleteBackgroundItem = (id: number): deleteBackgroundItemType => ({ type: DELETE_BACKGROUND_ITEM, id })

type onFreeMovementType = {
    type: typeof FREE_MOVEMENT
}
export const onFreeMovement = (): onFreeMovementType => ({ type: FREE_MOVEMENT })

type OnFixBackgroundItemsType = {
    type: typeof FIX_BACKGROUND_ITEMS
}
export const onFixBackgroundItems = (): OnFixBackgroundItemsType => ({ type: FIX_BACKGROUND_ITEMS })


export default backgroundItemsReducer

