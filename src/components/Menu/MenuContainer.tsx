import { FC } from 'react'
import { connect } from 'react-redux'

import { closeMenu } from '../../redux/app-reducer'
import { navbarChapter, menuChapters } from '../../redux/education-reducer'
import { AppStateType } from '../../redux/store'

import Menu from './Menu'

type MapStateToProps = {
}

type MapDispatchToProps = {
    closeMenu: () => void
    
}

type MenuContainerProps = MapStateToProps & MapDispatchToProps

const MenuContainer: FC<MenuContainerProps> = ({closeMenu}) => {

    const onCrossClick = () => {
        closeMenu()
    }


    return <Menu onCrossClick={onCrossClick} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
    }
}

export default connect(mapStateToProps, { closeMenu, navbarChapter, menuChapters })(MenuContainer)