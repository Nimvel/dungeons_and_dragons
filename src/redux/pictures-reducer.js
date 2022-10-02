import img1 from './../assets/pictures/img_1.jpg';
import img2 from './../assets/pictures/img_2.jpg';
import img3 from './../assets/pictures/img_3.jpg';
import img4 from './../assets/pictures/img_4.jpg';
import img5 from './../assets/pictures/img_5.jpg';
import img6 from './../assets/pictures/img_6.jpg';

const SAVE_NEW_PICTURE = 'pictures/SAVE_NEW_PICTURE'
const DELETE_PICTURE = 'pictures/DELETE_PICTURE'

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

const picturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NEW_PICTURE:
            return {...state, 
            //     pictures: [...state.pictures, 
            //         ...action.pictures.map(p => ({id: state.pictures.length, picture: URL.createObjectURL(p)}) )
            //     ]
            // }
                pictures: [...state.pictures, {id: state.pictures.length, picture: URL.createObjectURL(action.picture)}]}

        case DELETE_PICTURE:
            return {...state, 
                pictures: state.pictures.filter( el => action.id !== el.id )}
    }
    return state
}

export const saveNewPicture = (picture) => ({type: SAVE_NEW_PICTURE, picture});
export const deletePicture = (id) => ({type: DELETE_PICTURE, id});

export default picturesReducer;