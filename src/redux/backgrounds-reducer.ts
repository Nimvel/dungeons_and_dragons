const img1 = require('./../assets/backgrounds/background_1.png')
const img2 = require('./../assets/backgrounds/background_2.png')
const img3 = require('./../assets/backgrounds/background_3.png')
const img4 = require('./../assets/backgrounds/background_4.png')
const img5 = require('./../assets/backgrounds/background_5.png')
const img6 = require('./../assets/backgrounds/background_6.png')
const img7 = require('./../assets/backgrounds/background_7.png')
const img8 = require('./../assets/backgrounds/background_8.png')

const SAVE_NEW_BACKGROUND_ITEM = 'backgrounds/SAVE_NEW_BACKGROUND_ITEM'
const DELETE_BACKGROUND_ITEM = 'backgrounds/DELETE_BACKGROUND_ITEM'

export type BackgroundItemType = {
    id: number
    backgroundItem: string
}

type initialStateType = {
    backgroundItems: Array<BackgroundItemType>
}

const initialState = {
    backgroundItems: [
        { id: 0, backgroundItem: img1, backgroundItemImage: img1 },
        { id: 1, backgroundItem: img2, backgroundItemImage: img2 },
        { id: 2, backgroundItem: img3, backgroundItemImage: img3 },
        { id: 3, backgroundItem: img4, backgroundItemImage: img4 },
        { id: 4, backgroundItem: img5, backgroundItemImage: img5 },
        { id: 5, backgroundItem: img6, backgroundItemImage: img6 },
        { id: 6, backgroundItem: img7, backgroundItemImage: img7 },
        { id: 7, backgroundItem: img8, backgroundItemImage: img8 },
    ]
}

const backgroundItemsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_BACKGROUND_ITEM:
            return {
                ...state, backgroundItems: [...state.backgroundItems,
                { id: state.backgroundItems.length, 
                    backgroundItem: URL.createObjectURL(action.backgroundItem), 
                    backgroundItemImage: action.backgroundItem}]
                // { id: state.backgroundItems.length, backgroundItem: URL.createObjectURL(action.backgroundItem) }]
            }

        case DELETE_BACKGROUND_ITEM:
            return {
                ...state,
                backgroundItems: state.backgroundItems.filter(el => action.id !== el.id)
            }

        default:
            return state
    }
}

type ActionsTypes = saveNewBackgroundItemType | deleteBackgroundItemType

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

export default backgroundItemsReducer

