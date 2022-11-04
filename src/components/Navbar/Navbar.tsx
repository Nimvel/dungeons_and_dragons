import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ItemType } from '../../redux/navbar-reducer'

//@ts-ignore
import s from './Navbar.module.scss'

type NavbarProps = {
    items: Array<ItemType>

    closeNavbar: () => void
    openMenu: () => void
    closeMenu: () => void
}

const Navbar: FC<NavbarProps> = ({ items, closeNavbar, openMenu, closeMenu }) => {

    const onCrossClick = () => {
        closeNavbar()
        closeMenu()
    }

    const onMenuClick = () => {
        openMenu()
    }

    return <div className='navbar'>
                {/* <div className={s.navbar_links}> */}
                    <div className={s.closeModal} onClick={onCrossClick} />
                    <div onClick={onMenuClick}>
                        <NavLink to='/pictures' className={linkActive => linkActive.isActive ? s.active : s.item} >
                            <img src={items[0].item} />
                        </NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/create_map' className={linkActive => linkActive.isActive ? s.active : s.item} >
                        <img src={items[1].item} /></NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/items' className={linkActive => linkActive.isActive ? s.active : s.item} >
                            <img src={items[2].item} />
                        </NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/dice' className={linkActive => linkActive.isActive ? s.active : s.item} >
                            <img src={items[3].item} />
                        </NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/paint' className={linkActive => linkActive.isActive ? s.active : s.item} >
                            <img src={items[4].item} />
                        </NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/options' className={linkActive => linkActive.isActive ? s.active : s.item} >
                            <img src={items[5].item} />
                        </NavLink>
                    </div>
                {/* </div> */}
            </div>
}

export default Navbar