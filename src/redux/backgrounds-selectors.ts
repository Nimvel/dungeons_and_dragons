import { AppStateType } from './store'

export const getBackgroundsItems = (state: AppStateType) => {
    return state.backgroundItems.backgroundItems
}