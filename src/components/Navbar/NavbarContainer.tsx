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
import { updateMapDimensions, cleanMap } from '../../redux/map-reducer'
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
    getIsAddIconsMenuChapter, getIsCreateMapMenuChapter, getIsDiceMenuChapter,
    getIsEndChapter, getIsIntroduction, getIsMapMenuChapter,
    getIsPaintMenuChapter, getIsSettingsMenuChapter, getNavbarIconsChapters
} from '../../redux/education-selectors'

const navbar = require('../../assets/pictures/navbar.png')

type MapStateToPropsType = {
    isNavbarActive: boolean
    navbarItems: Array<ItemType>

    navbarIconsChapters: Array<string>
    isEndChapter: boolean
    isCreateMapMenuChapter: boolean
    isIntroduction: boolean
    isMapMenuChapter: boolean
    isAddIconsMenuChapter: boolean
    isDiceMenuChapter: boolean
    isPaintMenuChapter: boolean
    isSettingsMenuChapter: boolean
}

type MapDispatchToPropsType = {
    closeNavbar: () => void
    openNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
    updateMapDimensions: (width: number, height: number) => void
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

const NavbarContainer: FC<NavbarContainerProps> = ({ isNavbarActive, navbarItems, navbarIconsChapters, isEndChapter,
    isCreateMapMenuChapter, 
    updateMapDimensions, cleanMap, cleanLines,
    isMapMenuChapter, isAddIconsMenuChapter, isDiceMenuChapter, isPaintMenuChapter, isSettingsMenuChapter,
    isIntroduction, introduction, allDiceMenuChapter, changeDiceMenuChapter,
    changeColorLineChapter, closeNavbar, openNavbar, openMenu, closeMenu, navbarChapter, onNavbarIconsChapter, onMoveNavbarIconsChapters,
    menuChapters, endChapter, createMapDimentionsChapter, createMapFillChapter, createMapItemsChapter, createMapMoveItemsChapter,
    createMapFreeButtonChapter, createMapFixButtonChapter, changePensilMode, changeLineMode, setClickedItemId
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

            changePensilMode(false)
            changeLineMode(false)
            setClickedItemId(null)

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

    return <>
        {isNavbarActive
            ? <Navbar onCrossClick={onCrossClick} onMenuClick={onMenuClick} MouseMove={MouseMove} navbarItems={navbarItems}
                navbarIconsChapters={navbarIconsChapters} MouseLeave={MouseLeave} />
            : <img src={navbar} onClick={onNavbarClick} className={s.open} />
        }
    </>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavbarActive: getIsNavbarActive(state),
        navbarItems: getNavbarItems(state),
        navbarIconsChapters: getNavbarIconsChapters(state),
        isEndChapter: getIsEndChapter(state),
        isCreateMapMenuChapter: getIsCreateMapMenuChapter(state),
        isIntroduction: getIsIntroduction(state),
        isMapMenuChapter: getIsMapMenuChapter(state),
        isAddIconsMenuChapter: getIsAddIconsMenuChapter(state),
        isDiceMenuChapter: getIsDiceMenuChapter(state),
        isPaintMenuChapter: getIsPaintMenuChapter(state),
        isSettingsMenuChapter: getIsSettingsMenuChapter(state)
    }
}

export default connect(mapStateToProps, {
    closeNavbar, openNavbar, openMenu, closeMenu, navbarChapter, onNavbarIconsChapter,
    onMoveNavbarIconsChapters, menuChapters, endChapter, introduction,
    updateMapDimensions, cleanMap, cleanLines, allDiceMenuChapter, changeDiceMenuChapter,
    changeColorLineChapter, createMapDimentionsChapter, createMapFillChapter, createMapItemsChapter, 
    createMapMoveItemsChapter, createMapFreeButtonChapter, createMapFixButtonChapter, 
    changePensilMode, changeLineMode, setClickedItemId
})(NavbarContainer)