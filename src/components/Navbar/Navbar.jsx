import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';

const Navbar = () => {
    return <div className='navbar'>
        <div className={s.navbar_links}>
        <NavLink to='/pictures' className={linkActive => linkActive.isActive ? s.active : s.item} >Pictures</NavLink>
        </div>
      </div>
  }
  
  export default Navbar;