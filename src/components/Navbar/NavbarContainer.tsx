import { FC } from 'react'
import { connect } from 'react-redux'
import { closeNavbar, openNavbar, openMenu, closeMenu } from '../../redux/app-reducer'
import { getIsNavbarActive } from '../../redux/app-selectors'
import { ItemType } from '../../redux/navbar-reducer'
import { getNavbarItems } from '../../redux/navbar-selectors'
import { AppStateType } from '../../redux/store'
import Navbar from './Navbar'

//@ts-ignore
import s from './Navbar.module.scss'

const navbar = require('../../assets/pictures/navbar.png')

type MapStateToPropsType = {
    isNavbarActive: boolean
    items: Array<ItemType>
}

type MapDispatchToPropsType = {
    closeNavbar: () => void
    openNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
}

type NavbarContainerProps = MapStateToPropsType & MapDispatchToPropsType

const NavbarContainer: FC<NavbarContainerProps> = ({isNavbarActive, items, closeNavbar, openNavbar, openMenu, closeMenu}) => {

    const onNavbarClick = () => {
        openNavbar()
    }

    return <>
        {isNavbarActive
            ? <Navbar closeNavbar={closeNavbar} openMenu={openMenu} closeMenu={closeMenu} items={items} />
            : <img src={navbar} onClick={onNavbarClick} className={s.open} />
        }
    </>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavbarActive: getIsNavbarActive(state),
        items: getNavbarItems(state)
    }
}

export default connect(mapStateToProps, { closeNavbar, openNavbar, openMenu, closeMenu })(NavbarContainer)