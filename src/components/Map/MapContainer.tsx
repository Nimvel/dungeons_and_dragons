import * as React from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import {
    ItemType, updateItems, updateMapDimensions
} from '../../redux/map-reducer'
import './../../App.scss'
import {
    getD10, getD100, getD12, getD20,
    getD4, getD6, getD8,
    getDiceColor, getDiceColorFace, getDiceNumberColor,
    getGrid, getGridColor, getGridSize,
    getItems, getMap, getMapHeight, getMapWidth
} from '../../redux/map-selectors'
import { AppStateType } from '../../redux/store'
import { FC } from 'react'

type MapStateToPropsType = {
    map: string
    mapWidth: number
    mapHeight: number

    items: Array<ItemType>

    grid: boolean
    gridColor: string
    gridSize: number

    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean

    diceColor: string
    diceColorFace: string
    diceNumberColor: string
}

type MapDispatchToPropsType = {
    updateItems: (items: Array<ItemType>) => void
    updateMapDimensions: (mapWidth: number, mapHeight: number) => void
}

type OwnPropsType = {
}

type MapContainerProps = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const MapContainer: FC<MapContainerProps> = ({ map, mapWidth, mapHeight, items,
    grid, gridColor, gridSize,
    D4, D6, D8, D10, D12, D20, D100,
    diceColor, diceColorFace, diceNumberColor,
    updateItems, updateMapDimensions
}) => {

    const mapDimensions = () => {
        const $ = require("jquery")
        $("<img/>").attr('src', map)
            .on('load', function () {
                updateMapDimensions(this.width, this.height)
            })
    }

    React.useEffect(() => { mapDimensions() }, [map])

    return <div className='map'>
        <Map map={map} items={items}
            grid={grid} gridColor={gridColor} gridSize={gridSize}
            mapWidth={mapWidth} mapHeight={mapHeight} updateItems={updateItems}
            D4={D4} D6={D6} D8={D8} D10={D10} D12={D12} D20={D20} D100={D100}
            diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor}
        />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        map: getMap(state),
        mapWidth: getMapWidth(state),
        mapHeight: getMapHeight(state),

        items: getItems(state),

        grid: getGrid(state),
        gridColor: getGridColor(state),

        gridSize: getGridSize(state),

        D4: getD4(state),
        D6: getD6(state),
        D8: getD8(state),
        D10: getD10(state),
        D12: getD12(state),
        D20: getD20(state),
        D100: getD100(state),

        diceColor: getDiceColor(state),
        diceColorFace: getDiceColorFace(state),
        diceNumberColor: getDiceNumberColor(state)
    }
}

export default connect(mapStateToProps, {
    updateItems, updateMapDimensions
})(MapContainer)