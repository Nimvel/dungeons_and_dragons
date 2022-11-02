import { FC } from 'react'
import { NavLink } from 'react-router-dom'

//@ts-ignore
import s from './Navbar.module.scss'

type NavbarProps = {
    closeNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
}

const Navbar: FC<NavbarProps> = ({ closeNavbar, openMenu, closeMenu }) => {

    const onCrossClick = () => {
        closeNavbar()
        closeMenu()
    }

    const onMenuClick = () => {
        openMenu()
    }

    return <div className='navbar'>
                <div className={s.navbar_links}>
                    <div className={s.closeModal} onClick={onCrossClick} />
                    <div onClick={onMenuClick}>
                        <NavLink to='/pictures' className={linkActive => linkActive.isActive ? s.active : s.item} >Maps</NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/items' className={linkActive => linkActive.isActive ? s.active : s.item} >Items</NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/dice' className={linkActive => linkActive.isActive ? s.active : s.item} >Dice</NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/options' className={linkActive => linkActive.isActive ? s.active : s.item} >Options</NavLink>
                    </div>
                </div>
            </div>
}

export default Navbar