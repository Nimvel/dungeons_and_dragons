import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { closeMenu, openMenu } from '../../redux/app-reducer'

import OptionsContainer from './Options/OptionsContainer'
import PicturesContainer from './Pictures/PicturesContainer'

import s from '../Navbar/Navbar.module.scss';

const MenuContainer = (props): any => {
    // const onMenuClick = () => {
    //     props.openMenu()
    // }

    const onCrossClick = () => {
        props.closeMenu()
    }

    return <>
        {props.isMenuActive
            && <div className='menu'>
                <div className={s.closeModal} onClick={onCrossClick} />
                <Routes>
                    <Route path='/pictures' element={<PicturesContainer />} />
                    <Route path='/options' element={<OptionsContainer />} />
                </Routes>
            </div>
            // : <div onClick={onMenuClick} >Open Menu</div>
        }
    </>
}

const mapStateToProps = (state): any => {
    return {
        isMenuActive: state.app.isMenuActive
    }
}

export default connect(mapStateToProps, { closeMenu, openMenu })(MenuContainer);