import { AppStateType } from './store'

export const getAllDice = (state: AppStateType) => {
    return state.dice.allDice
}

export const getD4 = (state: AppStateType) => {
    return state.dice.D4
}

export const getD6 = (state: AppStateType) => {
    return state.dice.D6
}

export const getD8 = (state: AppStateType) => {
    return state.dice.D8
}

export const getD10 = (state: AppStateType) => {
    return state.dice.D10
}

export const getD12 = (state: AppStateType) => {
    return state.dice.D12
}

export const getD20 = (state: AppStateType) => {
    return state.dice.D20
}

export const getD100 = (state: AppStateType) => {
    return state.dice.D100
}

export const getIsTypesOfDice = (state: AppStateType) => {
    return state.dice.isTypesOfDice
}

export const getDiceColor = (state: AppStateType) => {
    return state.dice.diceColor
}

export const getDiceColorFace = (state: AppStateType) => {
    return state.dice.diceColorFace
}

export const getDiceNumberColor = (state: AppStateType) => {
    return state.dice.diceNumberColor
}