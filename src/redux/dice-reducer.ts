const ALL_DICE = 'dice/ALL_DICE'

const DICE_4 = 'dice/D4'
const DICE_6 = 'dice/D6'
const DICE_8 = 'dice/D8'
const DICE_10 = 'dice/D10'
const DICE_12 = 'dice/D12'
const DICE_20 = 'dice/D20'
const DICE_100 = 'dice/D100'

const TYPES_OF_DICE = 'dice/TYPE_OF_DICE'

const CHANGE_DICE_COLOR = 'dice/CHANGE_DICE_COLOR'
const CHANGE_DICE_COLOR_FACE = 'dice/CHANGE_DICE_COLOR_FACE'
const CHANGE_DICE_NUMBER_COLOR = 'dice/CHANGE_DICE_NUMBER_COLOR'

type initialStateType = {
    allDice: boolean
    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

    isTypesOfDice: boolean

    diceColor: string
    diceColorFace: string
    diceNumberColor: string
}

const initialState: initialStateType = {
    allDice: false,
    D4: false,
    D6: false,
    D8: false,
    D10: false,
    D12: false,
    D20: false,
    D100: false,

    isTypesOfDice: false,

    diceColor: '#1c1824',
    diceColorFace: '#ffffff',
    diceNumberColor: '#ffffff'
}

const diceReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ALL_DICE:
            return {
                ...state,
                allDice: !state.allDice,
                D4: !state.D4,
                D6: !state.D6,
                D8: !state.D8,
                D10: !state.D10,
                D12: !state.D12,
                D20: !state.D20,
                D100: !state.D100,
            }

        case DICE_4:
            return {
                ...state,
                D4: !state.D4
            }

        case DICE_6:
            return {
                ...state,
                D6: !state.D6
            }

        case DICE_8:
            return {
                ...state,
                D8: !state.D8
            }

        case DICE_10:
            return {
                ...state,
                D10: !state.D10
            }

        case DICE_12:
            return {
                ...state,
                D12: !state.D12
            }

        case DICE_20:
            return {
                ...state,
                D20: !state.D20
            }

        case DICE_100:
            return {
                ...state,
                D100: !state.D100
            }

        case TYPES_OF_DICE:
            return {
                ...state,
                isTypesOfDice: !state.isTypesOfDice
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

type ActionsTypes = AllDiceType | D4Type | D6Type | D8Type | D10Type | D12Type | D20Type | D100Type | OnTypesOfDiceType |
    changeDiceColorType | changeDiceColorFaceType | changeDiceNumberColorType

type AllDiceType = {
    type: typeof ALL_DICE
}
export const onAllDice = (): AllDiceType => ({ type: ALL_DICE })

type D4Type = {
    type: typeof DICE_4
}
export const onD4 = (): D4Type => ({ type: DICE_4 })

type D6Type = {
    type: typeof DICE_6
}
export const onD6 = (): D6Type => ({ type: DICE_6 })

type D8Type = {
    type: typeof DICE_8
}
export const onD8 = (): D8Type => ({ type: DICE_8 })

type D10Type = {
    type: typeof DICE_10
}
export const onD10 = (): D10Type => ({ type: DICE_10 })

type D12Type = {
    type: typeof DICE_12
}
export const onD12 = (): D12Type => ({ type: DICE_12 })

type D20Type = {
    type: typeof DICE_20
}
export const onD20 = (): D20Type => ({ type: DICE_20 })

type D100Type = {
    type: typeof DICE_100
}
export const onD100 = (): D100Type => ({ type: DICE_100 })

type OnTypesOfDiceType = {
    type: typeof TYPES_OF_DICE
}
export const onTypesOfDice = (): OnTypesOfDiceType => ({ type: TYPES_OF_DICE })

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