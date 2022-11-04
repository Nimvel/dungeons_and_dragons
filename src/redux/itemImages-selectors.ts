import { AppStateType } from './store'

export const getItemImages = (state: AppStateType) => {
    return state.items.itemImages
}