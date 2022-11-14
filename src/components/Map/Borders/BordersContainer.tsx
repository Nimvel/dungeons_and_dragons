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

    startX: number
    startY: number
}

type BordersContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const BordersContainer: FC<BordersContainerProps> = ({ borders, bordersColor, mapWidth, mapHeight, startX, startY  }) => {
    return <>
        {borders && <Borders bordersColor={bordersColor} mapWidth={mapWidth} mapHeight={mapHeight} startX={startX} startY={startY} />}
    </>
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        borders: getBorders(state),
        bordersColor: getBordersColor(state)
    }
}

export default connect(MapStateToProps, {})(BordersContainer)