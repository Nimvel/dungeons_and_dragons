import * as React from 'react'
import { FC } from 'react'
import { Line } from 'react-konva'

type BordersProps = {
    mapWidth: number
    mapHeight: number
}

const Borders: FC<BordersProps> = ({ mapWidth, mapHeight }) => {

    return <Line key={'borders'}
        points={[
            0, 0, mapWidth, 0,
            mapWidth, 0, mapWidth, mapHeight,
            mapWidth, mapHeight, 0, mapHeight,
            0, mapHeight, 1, 0
        ]}
        stroke='#d0863c'
    />
}

export default Borders