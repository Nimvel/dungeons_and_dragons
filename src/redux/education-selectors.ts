import { AppStateType } from './store'

export const getArrows = (state: AppStateType) => {
    return state.education.arrows
}

export const getIcons = (state: AppStateType) => {
    return state.education.icons
}

export const getIsIntroduction = (state: AppStateType) => {
    return state.education.isIntroduction
}

export const getIsNavbarChapter = (state: AppStateType) => {
    return state.education.isNavbarChapter
}

export const getIsNavbarIconsChapter = (state: AppStateType) => {
    return state.education.isNavbarIconsChapter
}

export const getNavbarIconsChapters = (state: AppStateType) => {
    return state.education.navbarIconsChapters
}

export const getNavbarMapChapter = (state: AppStateType) => {
    return state.education.map
}

export const getNavbarCreateMapChapter = (state: AppStateType) => {
    return state.education.createMap
}

export const getIsCreateMapDimentionsChapter = (state: AppStateType) => {
    return state.education.isCreateMapDimentionsChapter
}

export const getIsCreateMapFillChapter = (state: AppStateType) => {
    return state.education.isCreateMapFillChapter
}

export const getIsCreateMapItemsChapter = (state: AppStateType) => {
    return state.education.isCreateMapItemsChapter
}

export const getIsCreateMapMoveItemsChapter = (state: AppStateType) => {
    return state.education.isCreateMapMoveItemsChapter
}

export const getIsCreateMapFreeButtonChapter = (state: AppStateType) => {
    return state.education.isCreateMapFreeButtonChapter
}

export const getIsCreateMapFixButtonChapter = (state: AppStateType) => {
    return state.education.isCreateMapFixButtonChapter
}

export const getNavbarItemsChapter = (state: AppStateType) => {
    return state.education.items
}

export const getNavbarDiceChapter = (state: AppStateType) => {
    return state.education.dice
}

export const getIsAllDiceMenuChapter = (state: AppStateType) => {
    return state.education.isAllDiceMenuChapter
}

export const getIsChangeDiceMenuChapter = (state: AppStateType) => {
    return state.education.isChangeDiceMenuChapter
}

export const getChangeDiceButtons = (state: AppStateType) => {
    return state.education.changeDiceButtons
}

export const getDiceNames = (state: AppStateType) => {
    return state.education.diceNames
}

export const getDiceColor = (state: AppStateType) => {
    return state.education.diceColor
}

export const getDiceBorderColor = (state: AppStateType) => {
    return state.education.diceBorderColor
}

export const getDiceNumberColor = (state: AppStateType) => {
    return state.education.diceNumberColor
}

export const getNavbarPaintChapter = (state: AppStateType) => {
    return state.education.paint
}

export const getNavbarSettingsChapter = (state: AppStateType) => {
    return state.education.settings
}

export const getIsMapMenuChapter = (state: AppStateType) => {
    return state.education.isMapMenuChapter
}

export const getIsCreateMapMenuChapter = (state: AppStateType) => {
    return state.education.isCreateMapMenuChapter
}

export const getIsAddIconsMenuChapter = (state: AppStateType) => {
    return state.education.isAddIconsMenuChapter
}

export const getIsDiceMenuChapter = (state: AppStateType) => {
    return state.education.isDiceMenuChapter
}

export const getIsPaintMenuChapter = (state: AppStateType) => {
    return state.education.isPaintMenuChapter
}

export const getIsChangeColorLineChapter = (state: AppStateType) => {
    return state.education.isChangeColorLineChapter
}

export const getIsSettingsMenuChapter = (state: AppStateType) => {
    return state.education.isSettingsMenuChapter
}

export const getIsEndChapter = (state: AppStateType) => {
    return state.education.isEndChapter
}