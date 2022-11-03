import * as React from 'react'
import { FC, useState } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from '../../../redux/store'

import { updateMapDimensions } from '../../../redux/map-reducer'
import { getMapHeight, getMapWidth } from '../../../redux/map-selectors'

import CreateMap from './CreateMap'

type MapStateToProps = {
    mapWidth: number
    mapHeight: number
}

type MapDispatchToProps = {
    updateMapDimensions: (width: number, height: number) => void
}

type OwnProps = {}

type CreateMapContainerProps = MapStateToProps & MapDispatchToProps & OwnProps

const CreateMapContainer: FC<CreateMapContainerProps> = ({mapWidth, mapHeight, updateMapDimensions}) => {
    const [width, setWidth] = useState(mapWidth)
    const [height, setHeight] = useState(mapHeight)

    const onChangeWidth = (e: any) => {
        setWidth(e.target.value)
    }
    const onChangeHeight = (e: any) => {
        setHeight(e.target.value)
    }
    const onCreateMap = () => {
        updateMapDimensions(width, height)
    }

    return <CreateMap onCreateMap={onCreateMap} onChangeWidth={onChangeWidth} onChangeHeight={onChangeHeight} />
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state)
    }
}

export default connect(MapStateToProps, {updateMapDimensions})(CreateMapContainer)