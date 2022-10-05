import img1 from '../assets/pictures/img_1.jpg';

const SET_NEW_MAP = 'map/SET_NEW_MAP';
const ADD_NEW_CIRCLES = 'map/ADD_NEW_CIRCLES'
const UPDATE_ITEMS = 'map/UPDATE_ITEMS'

const initialState = {
    map: img1,
    items: [],
    color: '#cb9d9d',
    quantity: 0
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_MAP:
            return {
                ...state,
                map: action.map
            }

        case ADD_NEW_CIRCLES:
            return {
                ...state,
                quantity: action.quantity,
                color: action.color
            }

        case UPDATE_ITEMS:
            return {
                ...state,
                items: action.items
            }
    }
    return state
}

export const setNewMap = (map) => ({ type: SET_NEW_MAP, map });
export const addNewCircle = (quantity, color) => ({type: ADD_NEW_CIRCLES, quantity, color});
export const updateItems = (items) => ({type: UPDATE_ITEMS, items});

export default mapReducer;