import { connect } from 'react-redux'
import { closeNavbar, openNavbar, openMenu, closeMenu } from '../../redux/app-reducer.ts'
import Navbar from './Navbar.tsx'
import s from './Navbar.module.scss'

const navbar = require('../../assets/pictures/navbar.png')

const NavbarContainer = (props): any => {
    const onNavbarClick = () => {
        props.openNavbar()
    }

    return <>
        {props.isNavbarActive
            ? <Navbar closeNavbar={props.closeNavbar} openNavbar={props.openNavbar}
                openMenu={props.openMenu} closeMenu={props.closeMenu} />
            : <img src={navbar} onClick={onNavbarClick} className={s.open} />
        }
    </>
}

const mapStateToProps = (state): any => {
    return {
        isNavbarActive: state.app.isNavbarActive
        // isMenuActive: state.app.isMenuActive
    }
}

export default connect(mapStateToProps, { closeNavbar, openNavbar, openMenu, closeMenu })(NavbarContainer);