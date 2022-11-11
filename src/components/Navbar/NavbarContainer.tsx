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

import Navbar from './Navbar'

//@ts-ignore
import s from './Navbar.module.scss'
import { getIsEndChapter, getNavbarIconsChapters } from '../../redux/education-selectors'

const navbar = require('../../assets/pictures/navbar.png')

type MapStateToPropsType = {
    isNavbarActive: boolean
    navbarItems: Array<ItemType>

    navbarIconsChapters: Array<string>
    isEndChapter: boolean
}

type MapDispatchToPropsType = {
    closeNavbar: () => void
    openNavbar: () => void
    openMenu: () => void
    closeMenu: () => void

    navbarChapter: (isNavbarChapter: boolean) => void
    onNavbarIconsChapter: (isNavbarIconsChapter: boolean) => void
    onMoveNavbarIconsChapters: (icon: string) => void
    menuChapters: (icon: string) => void
    endChapter: (isEndChapter: boolean) => void
}

type NavbarContainerProps = MapStateToPropsType & MapDispatchToPropsType

const NavbarContainer: FC<NavbarContainerProps> = ({ isNavbarActive, navbarItems, navbarIconsChapters, isEndChapter,
    closeNavbar, openNavbar, openMenu, closeMenu, navbarChapter, onNavbarIconsChapter, onMoveNavbarIconsChapters,
    menuChapters, endChapter
}) => {

    const onNavbarClick = () => {
        openNavbar()
        navbarChapter(false)
        onNavbarIconsChapter(true)
    }

    const onCrossClick = () => {
        closeNavbar()
        closeMenu()
    }

    const onMenuClick = (icon) => {
        openMenu()
        onNavbarIconsChapter(false)
        menuChapters(icon)

        if (isEndChapter) {
            endChapter(false)
        }
    }

    const MouseMove = (icon) => {
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
    }
}

export default connect(mapStateToProps, {
    closeNavbar, openNavbar, openMenu, closeMenu, navbarChapter, onNavbarIconsChapter,
    onMoveNavbarIconsChapters, menuChapters, endChapter
})(NavbarContainer)