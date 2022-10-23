import { FC } from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { closeMenu } from '../../redux/app-reducer'
import { AppStateType } from '../../redux/store'

import OptionsContainer from './Options/OptionsContainer'
import PicturesContainer from './Pictures/PicturesContainer'

import { getIsMenuActive } from '../../redux/app-selectors'

//@ts-ignore
import s from '../Navbar/Navbar.module.scss'

type MapStateToProps = {
    isMenuActive: boolean
}

type MapDispatchToProps = {
    closeMenu: () => void
}

type MenuContainerProps = MapStateToProps & MapDispatchToProps

const MenuContainer: FC<MenuContainerProps> = ({isMenuActive, closeMenu}) => {

    const onCrossClick = () => {
        closeMenu()
    }

    return <>
        {isMenuActive
            && <div className='menu'>
                <div className={s.closeModal} onClick={onCrossClick} />
                <Routes>
                    <Route path='/pictures' element={<PicturesContainer />} />
                    <Route path='/options' element={<OptionsContainer />} />
                </Routes>
            </div>
        }
    </>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isMenuActive: getIsMenuActive(state)
    }
}

export default connect(mapStateToProps, { closeMenu })(MenuContainer)