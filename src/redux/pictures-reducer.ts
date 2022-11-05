// const img1 = require('./../assets/pictures/img_1.jpg')
const img2 = require('./../assets/pictures/img_2.jpg')
// const img3 = require('./../assets/pictures/img_3.jpg')
const img4 = require('./../assets/pictures/img_4.jpg')
const img5 = require('./../assets/pictures/img_5.jpg')
const img6 = require('./../assets/pictures/img_6.jpg')
const img7 = require('./../assets/pictures/img_7.jpg')
const img8 = require('./../assets/pictures/img_8.jpg')
const img9 = require('./../assets/pictures/img_9.jpg')
// const img10 = require('./../assets/pictures/img_10.jpg')
const img11 = require('./../assets/pictures/img_11.jpg')
// const img12 = require('./../assets/pictures/img_12.jpg')
const img13 = require('./../assets/pictures/img_13.jpg')
// const img14 = require('./../assets/pictures/img_14.jpg')
// const img15 = require('./../assets/pictures/img_15.jpg')
const img16 = require('./../assets/pictures/img_16.jpg')
const img17 = require('./../assets/pictures/img_17.jpg')
// const img18 = require('./../assets/pictures/img_18.jpg')
// const img19 = require('./../assets/pictures/img_19.jpg')
// const img20 = require('./../assets/pictures/img_20.jpg')

const SAVE_NEW_PICTURE = 'pictures/SAVE_NEW_PICTURE'
const DELETE_PICTURE = 'pictures/DELETE_PICTURE'

export type PicturesType = {
    id: number
    picture: string
}

type initialStateType = {
    pictures: Array<PicturesType>
}

const initialState = {
    pictures: [
        // { id: 0, picture: img1 },
        { id: 1, picture: img2 },
        // { id: 2, picture: img3 },
        { id: 3, picture: img4 },
        { id: 4, picture: img5 },
        { id: 5, picture: img6 },
        { id: 6, picture: img7 },
        { id: 7, picture: img8 },
        { id: 8, picture: img9 },
        // { id: 9, picture: img10 },
        { id: 10, picture: img11 },
        // { id: 11, picture: img12 },
        { id: 12, picture: img13 },
        // { id: 13, picture: img14 },
        // { id: 14, picture: img15 },
        { id: 15, picture: img16 },
        { id: 16, picture: img17 },
        // { id: 17, picture: img18 },
        // { id: 18, picture: img19 },
        // { id: 19, picture: img20 },
    ]
}

const picturesReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_PICTURE:
            return {
                ...state, pictures: [...state.pictures,
                { id: state.pictures.length, picture: URL.createObjectURL(action.picture) }]
            }

        case DELETE_PICTURE:
            return {
                ...state,
                pictures: state.pictures.filter(el => action.id !== el.id)
            }

        default:
            return state
    }
}

type ActionsTypes = saveNewPictureType | deletePictureType

type saveNewPictureType = {
    type: typeof SAVE_NEW_PICTURE
    picture: Blob | MediaSource
}
export const saveNewPicture = (picture: Blob | MediaSource): saveNewPictureType => ({ type: SAVE_NEW_PICTURE, picture })

type deletePictureType = {
    type: typeof DELETE_PICTURE
    id: number
}
export const deletePicture = (id: number): deletePictureType => ({ type: DELETE_PICTURE, id })

export default picturesReducer