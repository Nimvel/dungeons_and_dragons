const ADD_D4 = 'dice/ADD_D4'
const DELETE_D4 = 'dice/DELETE_D4'

const ADD_D6 = 'dice/ADD_D6'
const DELETE_D6 = 'dice/DELETE_D6'

const ADD_D8 = 'dice/ADD_D8'
const DELETE_D8 = 'dice/DELETE_D8'

const ADD_D10 = 'dice/ADD_D10'
const DELETE_D10 = 'dice/DELETE_D10'

const ADD_D12 = 'dice/ADD_D12'
const DELETE_D12 = 'dice/DELETE_D12'

const ADD_D20 = 'dice/ADD_D20'
const DELETE_D20 = 'dice/DELETE_D20'

const ADD_D100 = 'dice/ADD_D100'
const DELETE_D100 = 'dice/DELETE_D100'

const CHANGE_DICE_COLOR = 'dice/CHANGE_DICE_COLOR'
const CHANGE_DICE_COLOR_FACE = 'dice/CHANGE_DICE_COLOR_FACE'
const CHANGE_DICE_NUMBER_COLOR = 'dice/CHANGE_DICE_NUMBER_COLOR'

type initialStateType = {
    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

    diceColor: string
    diceColorFace: string
    diceNumberColor: string
}

const initialState: initialStateType = {
    D4: true,
    D6: true,
    D8: true,
    D10: true,
    D12: true,
    D20: true,
    D100: true,

    diceColor: '#cb9d9d',
    diceColorFace: '#ffffff',
    diceNumberColor: '#ffffff'
}

const diceReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_D4:
            return {
                ...state,
                D4: true
            }
        case DELETE_D4:
            return {
                ...state,
                D4: false
            }

        case ADD_D6:
            return {
                ...state,
                D6: true
            }
        case DELETE_D6:
            return {
                ...state,
                D6: false
            }

        case ADD_D8:
            return {
                ...state,
                D8: true
            }
        case DELETE_D8:
            return {
                ...state,
                D8: false
            }

        case ADD_D10:
            return {
                ...state,
                D10: true
            }
        case DELETE_D10:
            return {
                ...state,
                D10: false
            }

        case ADD_D12:
            return {
                ...state,
                D12: true
            }
        case DELETE_D12:
            return {
                ...state,
                D12: false
            }

        case ADD_D20:
            return {
                ...state,
                D20: true
            }
        case DELETE_D20:
            return {
                ...state,
                D20: false
            }

        case ADD_D100:
            return {
                ...state,
                D100: true
            }
        case DELETE_D100:
            return {
                ...state,
                D100: false
            }

        case CHANGE_DICE_COLOR:
            return {
                ...state,
                diceColor: action.color
            }

        case CHANGE_DICE_COLOR_FACE:
            return {
                ...state,
                diceColorFace: action.color
            }

        case CHANGE_DICE_NUMBER_COLOR:
            return {
                ...state,
                diceNumberColor: action.color
            }

        default:
            return state
    }
}

type ActionsTypes = addD4Type | deleteD4Type | addD6Type | deleteD6Type | addD8Type | deleteD8Type | addD10Type | deleteD10Type |
    addD12Type | deleteD12Type | addD20Type | deleteD20Type | addD100Type | deleteD100Type | 
    changeDiceColorType | changeDiceColorFaceType | changeDiceNumberColorType

type addD4Type = {
    type: typeof ADD_D4
}
export const addD4 = (): addD4Type => ({ type: ADD_D4 })

type deleteD4Type = {
    type: typeof DELETE_D4
}
export const deleteD4 = (): deleteD4Type => ({ type: DELETE_D4 })

type addD6Type = {
    type: typeof ADD_D6
}
export const addD6 = (): addD6Type => ({ type: ADD_D6 })

type deleteD6Type = {
    type: typeof DELETE_D6
}
export const deleteD6 = (): deleteD6Type => ({ type: DELETE_D6 })

type addD8Type = {
    type: typeof ADD_D8
}
export const addD8 = (): addD8Type => ({ type: ADD_D8 })

type deleteD8Type = {
    type: typeof DELETE_D8
}
export const deleteD8 = (): deleteD8Type => ({ type: DELETE_D8 })

type addD10Type = {
    type: typeof ADD_D10
}
export const addD10 = (): addD10Type => ({ type: ADD_D10 })

type deleteD10Type = {
    type: typeof DELETE_D10
}
export const deleteD10 = (): deleteD10Type => ({ type: DELETE_D10 })

type addD12Type = {
    type: typeof ADD_D12
}
export const addD12 = (): addD12Type => ({ type: ADD_D12 })

type deleteD12Type = {
    type: typeof DELETE_D12
}
export const deleteD12 = (): deleteD12Type => ({ type: DELETE_D12 })

type addD20Type = {
    type: typeof ADD_D20
}
export const addD20 = (): addD20Type => ({ type: ADD_D20 })

type deleteD20Type = {
    type: typeof DELETE_D20
}
export const deleteD20 = (): deleteD20Type => ({ type: DELETE_D20 })

type addD100Type = {
    type: typeof ADD_D100
}
export const addD100 = (): addD100Type => ({ type: ADD_D100 })

type deleteD100Type = {
    type: typeof DELETE_D100
}
export const deleteD100 = (): deleteD100Type => ({ type: DELETE_D100 })

type changeDiceColorType = {
    type: typeof CHANGE_DICE_COLOR
    color: string
}
export const changeDiceColor = (color: string): changeDiceColorType => ({ type: CHANGE_DICE_COLOR, color })

type changeDiceColorFaceType = {
    type: typeof CHANGE_DICE_COLOR_FACE
    color: string
}
export const changeDiceColorFace = (color: string): changeDiceColorFaceType => ({ type: CHANGE_DICE_COLOR_FACE, color })

type changeDiceNumberColorType = {
    type: typeof CHANGE_DICE_NUMBER_COLOR
    color: string
}
export const changeDiceNumberColor = (color: string): changeDiceNumberColorType => ({ type: CHANGE_DICE_NUMBER_COLOR, color })

export default diceReducer