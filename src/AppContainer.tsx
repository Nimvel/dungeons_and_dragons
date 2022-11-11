import * as React from 'react'
import { FC } from 'react'
import { connect } from 'react-redux'
import App from './App'
import { getIsEducationActive, getIsMenuActive } from './redux/app-selectors'

import { AppStateType } from './redux/store'
// import {} from '../../redux/dice-selectors'

type MapStateToPropsType = {
    isEducationActive: boolean
    isMenuActive: boolean
}

type MapDispatchToPropsType = {
}

type OwnPropsType = {
}

type AppContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const AppContainer: FC<AppContainerProps> = ({isEducationActive, isMenuActive}) => {
    return <App isEducationActive={isEducationActive} isMenuActive={isMenuActive} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
      isEducationActive: getIsEducationActive(state),
      isMenuActive: getIsMenuActive(state)
    }
}

export default connect(mapStateToProps, {})(AppContainer)