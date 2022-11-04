import { AppStateType } from './store'

export const getNavbarItems = (state: AppStateType) => {
    return state.navbar.items
}