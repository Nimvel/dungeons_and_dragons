import { AppStateType } from './store'

export const getBackgroundsItems = (state: AppStateType) => {
    return state.backgroundItems.backgroundItems
}

export const getIsFreeMovement = (state: AppStateType) => {
    return state.backgroundItems.isFreeMovement
}

export const getIsFixBackgroundItems = (state: AppStateType) => {
    return state.backgroundItems.isFixBackgroundItems
}

export const getClickedItemId = (state: AppStateType) => {
    return state.backgroundItems.clickedItemId
}