import { FC } from 'react'
import { connect } from 'react-redux'

import { closeMenu } from '../../redux/app-reducer'
import { AppStateType } from '../../redux/store'

import { getIsMenuActive } from '../../redux/app-selectors'

import Menu from './Menu'

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

    return <Menu isMenuActive={isMenuActive} onCrossClick={onCrossClick} />
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isMenuActive: getIsMenuActive(state)
    }
}

export default connect(mapStateToProps, { closeMenu })(MenuContainer)