import { AppStateType } from './store'

export const getIsEducationActive = (state: AppStateType) => {
    return state.app.isEducationActive
}

export const getIsNavbarActive = (state: AppStateType) => {
    return state.app.isNavbarActive
}

export const getIsMenuActive = (state: AppStateType) => {
    return state.app.isMenuActive
}