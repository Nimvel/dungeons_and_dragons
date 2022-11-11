import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ItemType } from '../../redux/navbar-reducer'

//@ts-ignore
import s from './Navbar.module.scss'

type NavbarProps = {
    navbarItems: Array<ItemType>
    navbarIconsChapters: Array<string>

    // closeNavbar: () => void
    // openMenu: () => void
    // closeMenu: () => void

    onCrossClick: () => void
    onMenuClick: (icon: string) => void
    MouseMove: (icon: string) => void
    MouseLeave: () => void

    // onNavbarIconsChapter: (isNavbarIconsChapter: boolean) => void
    // onMoveNavbarIconsChapters: (icon: string) => void
}

const Navbar: FC<NavbarProps> = ({ navbarItems, navbarIconsChapters,
 onCrossClick, onMenuClick, MouseMove, MouseLeave }) => {

    return <div className='navbar'>
        <div className={s.closeModal} onClick={onCrossClick} />
        <div onClick={e => onMenuClick(navbarIconsChapters[0])} onMouseMove={e => MouseMove(navbarIconsChapters[0])} onMouseLeave={MouseLeave} >
            <NavLink to='/ready_maps' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[0].item} />
            </NavLink>
        </div>
        <div onClick={e => onMenuClick(navbarIconsChapters[1])} onMouseMove={e => MouseMove(navbarIconsChapters[1])} onMouseLeave={MouseLeave}>
            <NavLink to='/create_map' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[1].item} /></NavLink>
        </div>
        <div onClick={e => onMenuClick(navbarIconsChapters[2])} onMouseMove={e => MouseMove(navbarIconsChapters[2])} onMouseLeave={MouseLeave}>
            <NavLink to='/items' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[2].item} />
            </NavLink>
        </div>
        <div onClick={e => onMenuClick(navbarIconsChapters[3])} onMouseMove={e => MouseMove(navbarIconsChapters[3])} onMouseLeave={MouseLeave}>
            <NavLink to='/dice' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[3].item} />
            </NavLink>
        </div>
        <div onClick={e => onMenuClick(navbarIconsChapters[4])} onMouseMove={e => MouseMove(navbarIconsChapters[4])} onMouseLeave={MouseLeave}>
            <NavLink to='/paint' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[4].item} />
            </NavLink>
        </div>
        <div onClick={e => onMenuClick(navbarIconsChapters[5])} onMouseMove={e => MouseMove(navbarIconsChapters[5])} onMouseLeave={MouseLeave}>
            <NavLink to='/settings' className={linkActive => linkActive.isActive ? s.active : s.item} >
                <img src={navbarItems[5].item} />
            </NavLink>
        </div>
    </div>
}

export default Navbar