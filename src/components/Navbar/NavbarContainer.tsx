import { FC } from 'react'
import { connect } from 'react-redux'
import { closeNavbar, openNavbar, openMenu, closeMenu } from '../../redux/app-reducer'
import { getIsMenuActive } from '../../redux/app-selectors'
import { AppStateType } from '../../redux/store'
import Navbar from './Navbar'

//@ts-ignore
import s from './Navbar.module.scss'

const navbar = require('../../assets/pictures/navbar.png')

type MapStateToPropsType = {
    isNavbarActive: boolean
}

type MapDispatchToPropsType = {
    closeNavbar: () => void
    openNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
}

type NavbarContainerProps = MapStateToPropsType & MapDispatchToPropsType

const NavbarContainer: FC<NavbarContainerProps> = ({isNavbarActive, closeNavbar, openNavbar, openMenu, closeMenu}) => {

    const onNavbarClick = () => {
        openNavbar()
    }

    return <>
        {isNavbarActive
            ? <Navbar closeNavbar={closeNavbar} openMenu={openMenu} closeMenu={closeMenu} />
            : <img src={navbar} onClick={onNavbarClick} className={s.open} />
        }
    </>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isNavbarActive: getIsMenuActive(state)
    }
}

export default connect(mapStateToProps, { closeNavbar, openNavbar, openMenu, closeMenu })(NavbarContainer)