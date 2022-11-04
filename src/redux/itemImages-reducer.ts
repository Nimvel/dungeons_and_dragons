const img1 = require('./../assets/itemImages/itemImage_1.png')
const img2 = require('./../assets/itemImages/itemImage_2.png')
const img3 = require('./../assets/itemImages/itemImage_3.png')
const img4 = require('./../assets/itemImages/itemImage_4.png')
const img5 = require('./../assets/itemImages/itemImage_5.png')

const SAVE_NEW_ITEM_IMAGE = 'itemImage/SAVE_NEW_ITEM_IMAGE'
const DELETE_ITEM_IMAGE = 'itemImage/DELETE_ITEM_IMAGE'

export type itemImagesType = {
    id: number
    itemImage: string
}

type initialStateType = {
    itemImages: Array<itemImagesType>
}

const initialState = {
    itemImages: [
        { id: 0, itemImage: img1 },
        { id: 1, itemImage: img2 },
        { id: 2, itemImage: img3 },
        { id: 3, itemImage: img4 },
        { id: 4, itemImage: img5 }
    ]
}

const itemImagesReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_ITEM_IMAGE:
            return {
                ...state, itemImages: [...state.itemImages,
                { id: state.itemImages.length, itemImage: URL.createObjectURL(action.itemImage) }]
            }

        case DELETE_ITEM_IMAGE:
            return {
                ...state,
                itemImages: state.itemImages.filter(el => action.id !== el.id)
            }

        default:
            return state
    }
}

type ActionsTypes = SaveNewItemImageType | DeleteItemImageType

type SaveNewItemImageType = {
    type: typeof SAVE_NEW_ITEM_IMAGE
    itemImage: Blob | MediaSource
}
export const saveNewItemImage = (itemImage: Blob | MediaSource): SaveNewItemImageType => 
({ type: SAVE_NEW_ITEM_IMAGE, itemImage })

type DeleteItemImageType = {
    type: typeof DELETE_ITEM_IMAGE
    id: number
}
export const deleteItemImage = (id: number): DeleteItemImageType => ({ type: DELETE_ITEM_IMAGE, id })

export default itemImagesReducer

