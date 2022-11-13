import { FC } from 'react'
import { connect } from 'react-redux'

import { getIsNavbarActive } from '../../redux/app-selectors'
import { getNavbarItems } from '../../redux/navbar-selectors'
import { AppStateType } from '../../redux/store'

import { closeNavbar, openNavbar, openMenu, closeMenu } from '../../redux/app-reducer'
import {
    navbarChapter, onNavbarIconsChapter, onMoveNavbarIconsChapters, menuChapters,
    endChapter
} from '../../redux/education-reducer'
import { ItemType } from '../../redux/navbar-reducer'
import { setClickedItemId } from '../../redux/backgrounds-reducer'
import { updateMapDimensions, cleanMap, updateBackgroundItems, BackgroundItemOnMapType } from '../../redux/map-reducer'
import { cleanLines, changePensilMode, changeLineMode } from '../../redux/paint-reducer'
import {
    introduction, allDiceMenuChapter, changeDiceMenuChapter, changeColorLineChapter,
    createMapDimentionsChapter, createMapFillChapter, createMapItemsChapter,
    createMapMoveItemsChapter, createMapFreeButtonChapter, createMapFixButtonChapter
} from '../../redux/education-reducer'

import Navbar from './Navbar'

//@ts-ignore
import s from './Navbar.module.scss'
import {
    getIsAddIconsMenuChapter, getIsAllDiceMenuChapter, getIsChangeColorLineChapter, 
    getIsChangeDiceMenuChapter, getIsCreateMapDimentionsChapter, getIsCreateMapFillChapter, 
    getIsCreateMapFixButtonChapter, getIsCreateMapFreeButtonChapter, getIsCreateMapItemsChapter, 
    getIsCreateMapMenuChapter, getIsCreateMapMoveItemsChapter, getIsDiceMenuChapter,
    getIsEndChapter, getIsIntroduction, getIsMapMenuChapter, getIsNavbarChapter,
    getIsNavbarIconsChapter, getIsPaintMenuChapter, getIsSettingsMenuChapter, getNavbarIconsChapters
} from '../../redux/education-selectors'

const navbar = require('../../assets/pictures/navbar.png')

type MapStateToPropsType = {
    isNavbarActive: boolean
    navbarItems: Array<ItemType>

    navbarIconsChapters: Array<string>

    isIntroduction: boolean
    isNavbarChapter: boolean
    isNavbarIconsChapter: boolean
    isMapMenuChapter: boolean

    isCreateMapMenuChapter: boolean
    isCreateMapDimentionsChapter: boolean
    isCreateMapFillChapter: boolean
    isCreateMapItemsChapter: boolean
    isCreateMapMoveItemsChapter: boolean
    isCreateMapFreeButtonChapter: boolean
    isCreateMapFixButtonChapter: boolean

    isEndChapter: boolean
    isPaintMenuChapter: boolean
    isChangeColorLineChapter: boolean

    isSettingsMenuChapter: boolean

    isAddIconsMenuChapter: boolean

    isDiceMenuChapter: boolean
    isAllDiceMenuChapter: boolean
    isChangeDiceMenuChapter: boolean
}

type MapDispatchToPropsType = {
    closeNavbar: () => void
    openNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
    updateMapDimensions: (width: number, height: number) => void
    updateBackgroundItems: (items: Array<BackgroundItemOnMapType>) => void
    cleanMap: () => void
    cleanLines: () => void

    changePensilMode: (mode: boolean) => void
    changeLineMode: (mode: boolean) => void
    setClickedItemId: (clickedItemId: null | string) => void

    navbarChapter: (isNavbarChapter: boolean) => void
    onNavbarIconsChapter: (isNavbarIconsChapter: boolean) => void
    onMoveNavbarIconsChapters: (icon: string) => void
    menuChapters: (icon: string) => void
    endChapter: (isEndChapter: boolean) => void
    introduction: (isIntroduction: boolean) => void
    allDiceMenuChapter: (isAllDiceMenuChapter: boolean) => void
    changeDiceMenuChapter: (isIntroduction: boolean) => void
    changeColorLineChapter: (isChangeColorLineChapter: boolean) => void

    createMapDimentionsChapter: (isCreateMapDimentionsChapter: boolean) => void
    createMapFillChapter: (isCreateMapFillChapter: boolean) => void
    createMapItemsChapter: (isCreateMapItemsChapter: boolean) => void
    createMapMoveItemsChapter: (isCreateMapMoveItemsChapter: boolean) => void
    createMapFreeButtonChapter: (isCreateMapFreeButtonChapter: boolean) => void
    createMapFixButtonChapter: (isCreateMapFixButtonChapter: boolean) => void
}

type NavbarContainerProps = MapStateToPropsType & MapDispatchToPropsType

const NavbarContainer: FC<NavbarContainerProps> = ({
    isNavbarActive, navbarItems, navbarIconsChapters,
    
    isIntroduction, isNavbarChapter, isNavbarIconsChapter,
    isMapMenuChapter, isAddIconsMenuChapter, isDiceMenuChapter,
    isAllDiceMenuChapter, isChangeDiceMenuChapter, isEndChapter,
    isPaintMenuChapter, isChangeColorLineChapter, isSettingsMenuChapter, isCreateMapMenuChapter,

    isCreateMapDimentionsChapter, isCreateMapFillChapter, isCreateMapItemsChapter,
    isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter, isCreateMapFixButtonChapter,

    closeNavbar,
    openNavbar,
    openMenu,
    closeMenu,
    cleanMap,
    cleanLines,
    updateMapDimensions,
    updateBackgroundItems,

    changePensilMode,
    changeLineMode,
    setClickedItemId,

    navbarChapter,
    onNavbarIconsChapter,
    onMoveNavbarIconsChapters,
    menuChapters,
    endChapter,
    introduction,
    allDiceMenuChapter,
    changeDiceMenuChapter,
    changeColorLineChapter,

    createMapDimentionsChapter,
    createMapFillChapter,
    createMapItemsChapter,
    createMapMoveItemsChapter,
    createMapFreeButtonChapter,
    createMapFixButtonChapter,
}) => {

    const onNavbarClick = () => {
        openNavbar()
        navbarChapter(false)
        onNavbarIconsChapter(true)

        if (isIntroduction) {
            introduction(false)
        }
    }

    const onCrossClick = () => {
        closeNavbar()
        closeMenu()

        if (isMapMenuChapter || isCreateMapMenuChapter || isAddIconsMenuChapter ||
            isDiceMenuChapter || isPaintMenuChapter || isSettingsMenuChapter) {
            menuChapters('')
            navbarChapter(true)
        }
    }

    const onMenuClick = (icon: string) => {
        openMenu()
        changePensilMode(false)
        changeLineMode(false)
        setClickedItemId(null)

        if (isNavbarChapter || isNavbarIconsChapter || isMapMenuChapter || 
            isAddIconsMenuChapter || isDiceMenuChapter || isAllDiceMenuChapter || 
            isChangeDiceMenuChapter || isEndChapter || isPaintMenuChapter || 
            isChangeColorLineChapter || isSettingsMenuChapter || isCreateMapMenuChapter ||
        
            isCreateMapDimentionsChapter || isCreateMapFillChapter || isCreateMapItemsChapter ||
            isCreateMapMoveItemsChapter || isCreateMapFreeButtonChapter || isCreateMapFixButtonChapter) {

            onNavbarIconsChapter(false)
            menuChapters(icon)

            createMapDimentionsChapter(false)
            createMapFillChapter(false)
            createMapItemsChapter(false)
            createMapMoveItemsChapter(false)
            createMapFreeButtonChapter(false)
            createMapFixButtonChapter(false)

            allDiceMenuChapter(false)
            changeDiceMenuChapter(false)

            changeColorLineChapter(false)

            updateMapDimensions(250, 250)
            cleanMap()
            cleanLines()
            updateBackgroundItems([])
        }


        if (isEndChapter) {
            endChapter(false)
        }

    }

    const MouseMove = (icon: string) => {
        onMoveNavbarIconsChapters(icon)
    }

    const MouseLeave = () => {
        onMoveNavbarIconsChapters('leave')
    }

    if (!isIntroduction) {
        return <>
        {isNavbarActive
            ? <Navbar navbarItems={navbarItems} navbarIconsChapters={navbarIconsChapters}
                onCrossClick={onCrossClick} onMenuClick={onMenuClick} MouseMove={MouseMove} MouseLeave={MouseLeave} />
            : <img src={navbar} onClick={onNavbarClick} className={s.open} />
        }
    </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavbarActive: getIsNavbarActive(state),
        navbarItems: getNavbarItems(state),

        navbarIconsChapters: getNavbarIconsChapters(state),
        isIntroduction: getIsIntroduction(state),
        isNavbarChapter: getIsNavbarChapter(state),
        isNavbarIconsChapter: getIsNavbarIconsChapter(state),

        isMapMenuChapter: getIsMapMenuChapter(state),

        isCreateMapMenuChapter: getIsCreateMapMenuChapter(state),
        isCreateMapDimentionsChapter: getIsCreateMapDimentionsChapter(state),
        isCreateMapFillChapter: getIsCreateMapFillChapter(state),
        isCreateMapItemsChapter: getIsCreateMapItemsChapter(state),
        isCreateMapMoveItemsChapter: getIsCreateMapMoveItemsChapter(state),
        isCreateMapFreeButtonChapter: getIsCreateMapFreeButtonChapter(state),
        isCreateMapFixButtonChapter: getIsCreateMapFixButtonChapter(state),
        isEndChapter: getIsEndChapter(state),

        isAddIconsMenuChapter: getIsAddIconsMenuChapter(state),

        isDiceMenuChapter: getIsDiceMenuChapter(state),
        isAllDiceMenuChapter: getIsAllDiceMenuChapter(state),
        isChangeDiceMenuChapter: getIsChangeDiceMenuChapter(state),

        isPaintMenuChapter: getIsPaintMenuChapter(state),
        isChangeColorLineChapter: getIsChangeColorLineChapter(state),
        isSettingsMenuChapter: getIsSettingsMenuChapter(state)
    }
}

export default connect(mapStateToProps, {
    closeNavbar, openNavbar, openMenu, closeMenu, cleanMap,
    cleanLines, updateMapDimensions, updateBackgroundItems,

    changePensilMode, changeLineMode, setClickedItemId,

    navbarChapter, onNavbarIconsChapter, onMoveNavbarIconsChapters,
    menuChapters, endChapter, introduction, allDiceMenuChapter,
    changeDiceMenuChapter, changeColorLineChapter,

    createMapDimentionsChapter, createMapFillChapter, createMapItemsChapter,
    createMapMoveItemsChapter, createMapFreeButtonChapter, createMapFixButtonChapter
})(NavbarContainer)