import * as React from 'react'
import { FC, useState } from 'react'
import { connect } from 'react-redux'
import { getBorders, getBordersColor } from '../../../redux/options-selectors'

import { AppStateType } from '../../../redux/store'

import Borders from './Borders'

type MapStateToProps = {
    borders: boolean
    bordersColor: string
}

type MapDispatchToProps = {}
type OwnProps = {
    mapWidth: number
    mapHeight: number
}

type BordersContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const BordersContainer: FC<BordersContainerProps> = ({ borders, bordersColor, mapWidth, mapHeight }) => {
    return <>
        {borders && <Borders bordersColor={bordersColor} mapWidth={mapWidth} mapHeight={mapHeight} />}
    </>
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        borders: getBorders(state),
        bordersColor: getBordersColor(state)
    }
}

export default connect(MapStateToProps, {})(BordersContainer)