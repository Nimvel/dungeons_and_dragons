import * as React from 'react'
import { FC } from 'react'
import { Line } from 'react-konva'

type BordersProps = {
    bordersColor: string

    mapWidth: number
    mapHeight: number
}

const Borders: FC<BordersProps> = ({ bordersColor, mapWidth, mapHeight }) => {

    return <Line key={'borders'}
        points={[
            0, 0, mapWidth, 0,
            mapWidth, 0, mapWidth, mapHeight,
            mapWidth, mapHeight, 0, mapHeight,
            0, mapHeight, 0, 0
        ]}
        stroke={bordersColor}
    />
}

export default Borders