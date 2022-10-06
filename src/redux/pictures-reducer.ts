const img1 = require('./../assets/pictures/img_1.jpg');
const img2 = require('./../assets/pictures/img_2.jpg');
const img3 = require('./../assets/pictures/img_3.jpg');
const img4 = require('./../assets/pictures/img_4.jpg');
const img5 = require('./../assets/pictures/img_5.jpg');
const img6 = require('./../assets/pictures/img_6.jpg');

const SAVE_NEW_PICTURE = 'pictures/SAVE_NEW_PICTURE'
const DELETE_PICTURE = 'pictures/DELETE_PICTURE'

type initialStateType = {
    pictures: any[]
}

const initialState = {
    pictures: [
        {id: 0, picture: img1},
        {id: 1, picture: img2},
        {id: 2, picture: img3},
        {id: 3, picture: img4},
        {id: 4, picture: img5},
        {id: 5, picture: img6},
    ]
}

const picturesReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SAVE_NEW_PICTURE:
            return {...state, pictures: [...state.pictures, 
                {id: state.pictures.length, picture: URL.createObjectURL(action.picture)}]}

        case DELETE_PICTURE:
            return {...state, 
                pictures: state.pictures.filter( el => action.id !== el.id )}
    }
    return state
}

type saveNewPictureType = {
    type: typeof SAVE_NEW_PICTURE
    picture: string
}
export const saveNewPicture = (picture: string): saveNewPictureType => ({type: SAVE_NEW_PICTURE, picture});

type deletePictureType = {
    type: typeof DELETE_PICTURE
    id: number
}
export const deletePicture = (id: number): deletePictureType => ({type: DELETE_PICTURE, id});

export default picturesReducer;