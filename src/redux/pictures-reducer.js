const SAVE_NEW_PICTURE = 'pictures/SAVE_NEW_PICTURE'

const initialState = {
    pictures: []
}

const picturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_NEW_PICTURE:
            return {...state, 
                pictures: [...state.pictures, {id: state.pictures.length, picture: action.picture}]}
            //  return {...state, pictures: action.picture}
    }
    return state
}

export const saveNewPicture = (picture) => ({type: SAVE_NEW_PICTURE, picture})

export default picturesReducer;