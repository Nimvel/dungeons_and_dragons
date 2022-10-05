import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => {
    return <div className='navbar'>
        <div className={s.navbar_links}>
            <div>
                <NavLink to='/pictures' className={linkActive => linkActive.isActive ? s.active : s.item} >Pictures</NavLink>
            </div>
            <div>
                <NavLink to='/options' className={linkActive => linkActive.isActive ? s.active : s.item} >Options</NavLink>
            </div>
        </div>
    </div>
}

export default Navbar;