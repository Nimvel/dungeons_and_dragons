const arrow_1 = require('../assets/education/arrow_1.png')
const arrow_2 = require('../assets/education/arrow_2.png')
const arrow_3 = require('../assets/education/arrow_3.png')
const arrow_4 = require('../assets/education/arrow_4.png')
const arrow_5 = require('../assets/education/arrow_5.png')
const arrow_6 = require('../assets/education/arrow_6.png')
const arrow_7 = require('../assets/education/arrow_7.png')
const arrow_8 = require('../assets/education/arrow_8.png')

const arrow_1_small = require('../assets/education/arrow_1_small.png')
const arrow_2_small = require('../assets/education/arrow_2_small.png')
const arrow_3_small = require('../assets/education/arrow_3_small.png')
const arrow_4_small = require('../assets/education/arrow_4_small.png')
const arrow_5_small = require('../assets/education/arrow_5_small.png')
const arrow_6_small = require('../assets/education/arrow_6_small.png')
const arrow_7_small = require('../assets/education/arrow_7_small.png')

const bracket_1 = require('../assets/education/bracket_1.png')
const bracket_2 = require('../assets/education/bracket_2.png')
const bracket_3 = require('../assets/education/bracket_3.png')

const firework_1 = require('../assets/education/firework_1.png')
const firework_2 = require('../assets/education/firework_2.png')

const INTRODUCTION = 'education/INTRODUCTION'
const NAVBAR_CHAPTER = 'education/NAVBAR_CHAPTER'
const NAVBAR_ICONS_CHAPTER = 'education/NAVBAR_ICONS_CHAPTER'
const NAVBAR_ICONS_CHAPTERS = 'education/NAVBAR_ICONS_CHAPTERS'
const MENU_CHAPTERS = 'education/MENU_CHAPTERS'

const CREATE_MAP_DIMENTIONS_CHAPTER = 'education/CREATE_MAP_DIMENTIONS_CHAPTER'
const CREATE_MAP_FILL_CHAPTER = 'education/CREATE_MAP_FILL_CHAPTER'
const CREATE_MAP_ITEMS_CHAPTER = 'education/CREATE_MAP_ITEMS_CHAPTER'
const CREATE_MAP_MOVE_ITEMS_CHAPTER = 'education/CREATE_MAP_MOVE_ITEMS_CHAPTER'
const CREATE_MAP_FREE_BUTTON_CHAPTER = 'education/CREATE_MAP_FREE_BUTTON_CHAPTER'
const CREATE_MAP_FIX_BUTTON_CHAPTER = 'education/CREATE_MAP_FIX_BUTTON_CHAPTER'

const ALL_DICE_CHAPTER = 'education/ALL_DICE_CHAPTER'
const CHANGE_DICE_CHAPTER = 'education/CHANGE_DICE_CHAPTER'
const CHANGE_DICE_BUTTONS = 'education/CHANGE_DICE_BUTTONS'

const CHANGE_COLOR_LINE_CHAPTER = 'education/CHANGE_COLOR_LINE_CHAPTER'

const END_CHAPTER = 'education/END_CHAPTER'

type initialStateType = {
    arrows: Array<string>
    smallArrows: Array<string>
    icons: Array<string>

    isIntroduction: boolean
    isNavbarChapter: boolean
    isNavbarIconsChapter: boolean

    navbarIconsChapters: Array<string>

    map: boolean
    createMap: boolean
    items: boolean
    dice: boolean
    paint: boolean
    settings: boolean

    isMapMenuChapter: boolean

    isCreateMapMenuChapter: boolean
    isCreateMapDimentionsChapter: boolean
    isCreateMapFillChapter: boolean
    isCreateMapItemsChapter: boolean
    isCreateMapMoveItemsChapter: boolean
    isCreateMapFreeButtonChapter: boolean
    isCreateMapFixButtonChapter: boolean

    isAddIconsMenuChapter: boolean

    isDiceMenuChapter: boolean
    isAllDiceMenuChapter: boolean
    isChangeDiceMenuChapter: boolean

    changeDiceButtons: Array<string>
    diceNames: boolean
    diceColor: boolean
    diceBorderColor: boolean
    diceNumberColor: boolean

    isPaintMenuChapter: boolean
    isChangeColorLineChapter: boolean

    isSettingsMenuChapter: boolean

    isEndChapter: boolean
}

const initialState = {
    arrows: [arrow_1, bracket_1, arrow_2, arrow_3, arrow_4, arrow_5, arrow_6, arrow_7, bracket_2, bracket_3, arrow_8],
    smallArrows: [arrow_1_small, arrow_2_small, arrow_3_small, arrow_4_small, arrow_5_small, arrow_6_small, arrow_7_small],
    icons: [firework_1, firework_2],
    
    isIntroduction: true,
    isNavbarChapter: false,
    isNavbarIconsChapter: false,
    navbarIconsChapters: ['map', 'createMap', 'items', 'dice', 'paint', 'settings'],

    map: false,
    createMap: false,
    items: false,
    dice: false,
    paint: false,
    settings: false,

    isMapMenuChapter: false,

    isCreateMapMenuChapter: false,
    isCreateMapDimentionsChapter: false,
    isCreateMapFillChapter: false,
    isCreateMapItemsChapter: false,
    isCreateMapMoveItemsChapter: false,
    isCreateMapFreeButtonChapter: false,
    isCreateMapFixButtonChapter: false,

    isAddIconsMenuChapter: false,

    isDiceMenuChapter: false,
    isAllDiceMenuChapter: false,
    isChangeDiceMenuChapter: false,

    changeDiceButtons: ['diceNames', 'diceColor', 'diceBorderColor', 'diceNumberColor'],
    diceNames: false,
    diceColor: false,
    diceBorderColor: false,
    diceNumberColor: false,

    isPaintMenuChapter: false,
    isChangeColorLineChapter: false,

    isSettingsMenuChapter: false,

    isEndChapter: false

}

const educationReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INTRODUCTION:
            return { ...state, isIntroduction: action.isIntroduction }

        case NAVBAR_CHAPTER:
            return { ...state, isNavbarChapter: action.isNavbarChapter }

        case NAVBAR_ICONS_CHAPTER:
            return { ...state, isNavbarIconsChapter: action.isNavbarIconsChapter }

        case NAVBAR_ICONS_CHAPTERS:
            return action.icon === state.navbarIconsChapters[0]
                ? {
                    ...state,
                    map: true,
                    createMap: false,
                    items: false,
                    dice: false,
                    paint: false,
                    settings: false
                }
                : action.icon === state.navbarIconsChapters[1]
                    ? {
                        ...state,
                        map: false,
                        createMap: true,
                        items: false,
                        dice: false,
                        paint: false,
                        settings: false
                    }
                    : action.icon === state.navbarIconsChapters[2]
                        ? {
                            ...state,
                            map: false,
                            createMap: false,
                            items: true,
                            dice: false,
                            paint: false,
                            settings: false
                        }
                        : action.icon === state.navbarIconsChapters[3]
                            ? {
                                ...state,
                                map: false,
                                createMap: false,
                                items: false,
                                dice: true,
                                paint: false,
                                settings: false
                            }
                            : action.icon === state.navbarIconsChapters[4]
                                ? {
                                    ...state,
                                    map: false,
                                    createMap: false,
                                    items: false,
                                    dice: false,
                                    paint: true,
                                    settings: false
                                }
                                : action.icon === state.navbarIconsChapters[5]
                                    ? {
                                        ...state,
                                        map: false,
                                        createMap: false,
                                        items: false,
                                        dice: false,
                                        paint: false,
                                        settings: true
                                    }
                                    : {
                                        ...state,
                                        map: false,
                                        createMap: false,
                                        items: false,
                                        dice: false,
                                        paint: false,
                                        settings: false
                                    }


        case MENU_CHAPTERS:
            return action.icon === state.navbarIconsChapters[0]
                ? {
                    ...state,
                    isIntroduction: false,
                    isMapMenuChapter: true,
                    isCreateMapMenuChapter: false,
                    isAddIconsMenuChapter: false,
                    isDiceMenuChapter: false,
                    isPaintMenuChapter: false,
                    isSettingsMenuChapter: false
                }
                : action.icon === state.navbarIconsChapters[1]
                    ? {
                        ...state,
                        isIntroduction: false,
                        isMapMenuChapter: false,
                        isCreateMapMenuChapter: true,
                        isAddIconsMenuChapter: false,
                        isDiceMenuChapter: false,
                        isPaintMenuChapter: false,
                        isSettingsMenuChapter: false
                    }
                    : action.icon === state.navbarIconsChapters[2]
                        ? {
                            ...state,
                            isIntroduction: false,
                            isMapMenuChapter: false,
                            isCreateMapMenuChapter: false,
                            isAddIconsMenuChapter: true,
                            isDiceMenuChapter: false,
                            isPaintMenuChapter: false,
                            isSettingsMenuChapter: false
                        }
                        : action.icon === state.navbarIconsChapters[3]
                            ? {
                                ...state,
                                isIntroduction: false,
                                isMapMenuChapter: false,
                                isCreateMapMenuChapter: false,
                                isAddIconsMenuChapter: false,
                                isDiceMenuChapter: true,
                                isPaintMenuChapter: false,
                                isSettingsMenuChapter: false
                            }
                            : action.icon === state.navbarIconsChapters[4]
                                ? {
                                    ...state,
                                    isIntroduction: false,
                                    isMapMenuChapter: false,
                                    isCreateMapMenuChapter: false,
                                    isAddIconsMenuChapter: false,
                                    isDiceMenuChapter: false,
                                    isPaintMenuChapter: true,
                                    isSettingsMenuChapter: false
                                }
                                : action.icon === state.navbarIconsChapters[5]
                                ? {
                                    ...state,
                                    isIntroduction: false,
                                    isMapMenuChapter: false,
                                    isCreateMapMenuChapter: false,
                                    isAddIconsMenuChapter: false,
                                    isDiceMenuChapter: false,
                                    isPaintMenuChapter: false,
                                    isSettingsMenuChapter: true
                                }
                                : {
                                    ...state,
                                    isIntroduction: false,
                                    isMapMenuChapter: false,
                                    isCreateMapMenuChapter: false,
                                    isAddIconsMenuChapter: false,
                                    isDiceMenuChapter: false,
                                    isPaintMenuChapter: false,
                                    isSettingsMenuChapter: false
                                }

        case CREATE_MAP_DIMENTIONS_CHAPTER:
            return { ...state, isCreateMapDimentionsChapter: action.isCreateMapDimentionsChapter }

        case CREATE_MAP_FILL_CHAPTER:
            return { ...state, isCreateMapFillChapter: action.isCreateMapFillChapter }

        case CREATE_MAP_ITEMS_CHAPTER:
            return { ...state, isCreateMapItemsChapter: action.isCreateMapItemsChapter }

        case CREATE_MAP_MOVE_ITEMS_CHAPTER:
            return { ...state, isCreateMapMoveItemsChapter: action.isCreateMapMoveItemsChapter }

        case CREATE_MAP_FREE_BUTTON_CHAPTER:
            return { ...state, isCreateMapFreeButtonChapter: action.isCreateMapFreeButtonChapter }

        case CREATE_MAP_FIX_BUTTON_CHAPTER:
            return { ...state, isCreateMapFixButtonChapter: action.isCreateMapFixButtonChapter }

        case END_CHAPTER:
            return { ...state, isEndChapter: action.isEndChapter }

        case ALL_DICE_CHAPTER:
            return { ...state, isAllDiceMenuChapter: action.isAllDiceMenuChapter }

        case CHANGE_DICE_CHAPTER:
            return { ...state, isChangeDiceMenuChapter: action.isChangeDiceMenuChapter }

        case CHANGE_DICE_BUTTONS:
            return action.button === state.changeDiceButtons[0]
                ? {
                    ...state,
                    diceNames: true,
                    diceColor: false,
                    diceBorderColor: false,
                    diceNumberColor: false
                }
                : action.button === state.changeDiceButtons[1]
                    ? {
                        ...state,
                        diceNames: false,
                        diceColor: true,
                        diceBorderColor: false,
                        diceNumberColor: false
                    }
                    : action.button === state.changeDiceButtons[2]
                        ? {
                            ...state,
                            diceNames: false,
                            diceColor: false,
                            diceBorderColor: true,
                            diceNumberColor: false
                        }
                        : action.button === state.changeDiceButtons[3]
                            ? {
                                ...state,
                                diceNames: false,
                                diceColor: false,
                                diceBorderColor: false,
                                diceNumberColor: true
                            }
                            : {
                                ...state,
                                diceNames: false,
                                diceColor: false,
                                diceBorderColor: false,
                                diceNumberColor: false
                            }

        case CHANGE_COLOR_LINE_CHAPTER:
            return { ...state, isChangeColorLineChapter: action.isChangeColorLineChapter }

        default:
            return state
    }
}

type ActionsTypes = IntroductionType | NavbarChapterType |
    NavbarIconsChapterType | MoveNavbarIconsChaptersType | MenuChaptersType |
    CreateMapDimentionsChapterType | CreateMapFillChapterType | CreateMapItemsChapterType |
    CreateMapMoveItemsChapterType | CreateMapFreeButtonChapterType |
    CreateMapFixButtonChapterType  | AllDiceMenuChapterType | 
    ChangeDiceMenuChapterType | OnChangeDiceButtonsMoveType | 
    ChangeColorLineChapterType |
    EndChapterType
// MapMenuChapterType |
//     CreateMapMenuChapterType | AddIconsMenuChapterType | DiceMenuChapterType | PaintMenuChapterType | SettingsMenuChapter

type IntroductionType = {
    type: typeof INTRODUCTION
    isIntroduction: boolean
}
export const introduction = (isIntroduction: boolean): IntroductionType => ({ type: INTRODUCTION, isIntroduction })

type NavbarChapterType = {
    type: typeof NAVBAR_CHAPTER
    isNavbarChapter: boolean
}
export const navbarChapter = (isNavbarChapter: boolean): NavbarChapterType => ({ type: NAVBAR_CHAPTER, isNavbarChapter })

type NavbarIconsChapterType = {
    type: typeof NAVBAR_ICONS_CHAPTER
    isNavbarIconsChapter: boolean
}
export const onNavbarIconsChapter = (isNavbarIconsChapter: boolean): NavbarIconsChapterType =>
    ({ type: NAVBAR_ICONS_CHAPTER, isNavbarIconsChapter })

type MoveNavbarIconsChaptersType = {
    type: typeof NAVBAR_ICONS_CHAPTERS
    icon: string
}
export const onMoveNavbarIconsChapters = (icon: string): MoveNavbarIconsChaptersType =>
    ({ type: NAVBAR_ICONS_CHAPTERS, icon })

type MenuChaptersType = {
    type: typeof MENU_CHAPTERS
    icon: string
}
export const menuChapters = (icon: string): MenuChaptersType =>
    ({ type: MENU_CHAPTERS, icon })

type CreateMapDimentionsChapterType = {
    type: typeof CREATE_MAP_DIMENTIONS_CHAPTER
    isCreateMapDimentionsChapter: boolean
}
export const createMapDimentionsChapter = (isCreateMapDimentionsChapter: boolean): CreateMapDimentionsChapterType =>
    ({ type: CREATE_MAP_DIMENTIONS_CHAPTER, isCreateMapDimentionsChapter })

type CreateMapFillChapterType = {
    type: typeof CREATE_MAP_FILL_CHAPTER
    isCreateMapFillChapter: boolean
}
export const createMapFillChapter = (isCreateMapFillChapter: boolean): CreateMapFillChapterType =>
    ({ type: CREATE_MAP_FILL_CHAPTER, isCreateMapFillChapter })

type CreateMapItemsChapterType = {
    type: typeof CREATE_MAP_ITEMS_CHAPTER
    isCreateMapItemsChapter: boolean
}
export const createMapItemsChapter = (isCreateMapItemsChapter: boolean): CreateMapItemsChapterType =>
    ({ type: CREATE_MAP_ITEMS_CHAPTER, isCreateMapItemsChapter })

type CreateMapMoveItemsChapterType = {
    type: typeof CREATE_MAP_MOVE_ITEMS_CHAPTER
    isCreateMapMoveItemsChapter: boolean
}
export const createMapMoveItemsChapter = (isCreateMapMoveItemsChapter: boolean): CreateMapMoveItemsChapterType =>
    ({ type: CREATE_MAP_MOVE_ITEMS_CHAPTER, isCreateMapMoveItemsChapter })

type CreateMapFreeButtonChapterType = {
    type: typeof CREATE_MAP_FREE_BUTTON_CHAPTER
    isCreateMapFreeButtonChapter: boolean
}
export const createMapFreeButtonChapter = (isCreateMapFreeButtonChapter: boolean): CreateMapFreeButtonChapterType =>
    ({ type: CREATE_MAP_FREE_BUTTON_CHAPTER, isCreateMapFreeButtonChapter })

type CreateMapFixButtonChapterType = {
    type: typeof CREATE_MAP_FIX_BUTTON_CHAPTER
    isCreateMapFixButtonChapter: boolean
}
export const createMapFixButtonChapter = (isCreateMapFixButtonChapter: boolean): CreateMapFixButtonChapterType =>
    ({ type: CREATE_MAP_FIX_BUTTON_CHAPTER, isCreateMapFixButtonChapter })

type AllDiceMenuChapterType = {
    type: typeof ALL_DICE_CHAPTER
    isAllDiceMenuChapter: boolean
}
export const allDiceMenuChapter = (isAllDiceMenuChapter: boolean): AllDiceMenuChapterType =>
    ({ type: ALL_DICE_CHAPTER, isAllDiceMenuChapter })

type ChangeDiceMenuChapterType = {
    type: typeof CHANGE_DICE_CHAPTER
    isChangeDiceMenuChapter: boolean
}
export const changeDiceMenuChapter = (isChangeDiceMenuChapter: boolean): ChangeDiceMenuChapterType =>
    ({ type: CHANGE_DICE_CHAPTER, isChangeDiceMenuChapter })

type OnChangeDiceButtonsMoveType = {
    type: typeof CHANGE_DICE_BUTTONS
    button: string
}
export const onChangeDiceButtonsMove = (button: string): OnChangeDiceButtonsMoveType =>
    ({ type: CHANGE_DICE_BUTTONS, button })

type ChangeColorLineChapterType = {
    type: typeof CHANGE_COLOR_LINE_CHAPTER
    isChangeColorLineChapter: boolean
}
export const changeColorLineChapter = (isChangeColorLineChapter: boolean): ChangeColorLineChapterType =>
    ({ type: CHANGE_COLOR_LINE_CHAPTER, isChangeColorLineChapter })

// type MapMenuChapterType = {
//     type: typeof MAP_MENU_CHAPTER
//     isMapMenuChapter: boolean
// }
// export const mapMenuChapter = (isMapMenuChapter: boolean): MapMenuChapterType =>
//     ({ type: MAP_MENU_CHAPTER, isMapMenuChapter })

// type CreateMapMenuChapterType = {
//     type: typeof CREATE_MAP_MENU_CHAPTER
//     isCreateMapMenuChapter: boolean
// }
// export const createMapMenuChapter = (isCreateMapMenuChapter: boolean): CreateMapMenuChapterType =>
//     ({ type: CREATE_MAP_MENU_CHAPTER, isCreateMapMenuChapter })

// type AddIconsMenuChapterType = {
//     type: typeof ADD_ICONS_MENU_CHAPTER
//     isAddIconsMenuChapter: boolean
// }
// export const addIconsMenuChapter = (isAddIconsMenuChapter: boolean): AddIconsMenuChapterType =>
//     ({ type: ADD_ICONS_MENU_CHAPTER, isAddIconsMenuChapter })

// type DiceMenuChapterType = {
//     type: typeof DICE_MENU_CHAPTER
//     isDiceMenuChapter: boolean
// }
// export const diceMenuChapter = (isDiceMenuChapter: boolean): DiceMenuChapterType =>
//     ({ type: DICE_MENU_CHAPTER, isDiceMenuChapter })

// type PaintMenuChapterType = {
//     type: typeof PAINT_MENU_CHAPTER
//     isPaintMenuChapter: boolean
// }
// export const paintMenuChapter = (isPaintMenuChapter: boolean): PaintMenuChapterType =>
//     ({ type: PAINT_MENU_CHAPTER, isPaintMenuChapter })

// type SettingsMenuChapter = {
//     type: typeof SETTINGS_MENU_CHAPTER
//     isSettingsMenuChapter: boolean
// }
// export const settingsMenuChapter = (isSettingsMenuChapter: boolean): SettingsMenuChapter =>
//     ({ type: SETTINGS_MENU_CHAPTER, isSettingsMenuChapter })


type EndChapterType = {
    type: typeof END_CHAPTER
    isEndChapter: boolean
}
export const endChapter = (isEndChapter: boolean): EndChapterType =>
    ({ type: END_CHAPTER, isEndChapter })


export default educationReducer




