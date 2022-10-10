import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

const Navbar = (props) => {
    const onCrossClick = () => {
        props.closeNavbar()
    }

    const onMenuClick = () => {
        props.openMenu()
    }

    return <div className='navbar'>
                <div className={s.navbar_links}>
                    <div className={s.closeModal} onClick={onCrossClick} />
                    <div onClick={onMenuClick}>
                        <NavLink to='/pictures' className={linkActive => linkActive.isActive ? s.active : s.item} >Pictures</NavLink>
                    </div>
                    <div onClick={onMenuClick}>
                        <NavLink to='/options' className={linkActive => linkActive.isActive ? s.active : s.item} >Options</NavLink>
                    </div>
                </div>
            </div>
}

export default Navbar;