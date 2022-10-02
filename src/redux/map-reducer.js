import img1 from '../assets/pictures/img_1.jpg';

const SET_NEW_MAP = 'map/SET_NEW_MAP'

const initialState = {
    map: img1
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_MAP:
            return {...state, 
                map: action.map}
    }
    return state
}

export const setNewMap = (map) => ({type: SET_NEW_MAP, map})

export default mapReducer;