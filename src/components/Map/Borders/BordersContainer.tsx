import * as React from 'react'
import { FC, useState } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import Borders from './Borders'

type MapStateToProps = {
}

type MapDispatchToProps = {}
type OwnProps = {
    mapWidth: number
    mapHeight: number
}

type BordersContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const BordersContainer: FC<BordersContainerProps> = ({mapWidth, mapHeight}) => {

    return <Borders mapWidth={mapWidth} mapHeight={mapHeight} />
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
    }
}

export default connect(MapStateToProps, {})(BordersContainer)