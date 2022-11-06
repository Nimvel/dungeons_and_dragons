import * as React from 'react'
import { FC } from 'react'
import { Line } from 'react-konva'

type BordersProps = {
    bordersColor: string

    mapWidth: number
    mapHeight: number
}

const Borders: FC<BordersProps> = ({ bordersColor, mapWidth, mapHeight }) => {

    const x = (window.innerWidth - mapWidth) / 2
    const y = (window.innerHeight - mapHeight) / 2

    return <Line key={'borders'}
        points={[
            x, y, x + mapWidth, y,
            x + mapWidth, y, x + mapWidth, y + mapHeight,
            x + mapWidth, y + mapHeight, x, y + mapHeight,
            x, y + mapHeight, x, y
        ]}
        stroke={bordersColor}
    />
}

export default Borders