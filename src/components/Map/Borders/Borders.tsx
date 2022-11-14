import * as React from 'react'
import { FC } from 'react'
import { Line } from 'react-konva'

type BordersProps = {
    bordersColor: string

    mapWidth: number
    mapHeight: number

    startX: number
    startY: number
}

const Borders: FC<BordersProps> = ({ bordersColor, mapWidth, mapHeight, startX, startY }) => {

    // const x = (window.innerWidth - mapWidth) / 2
    // const y = (window.innerHeight - mapHeight) / 2

    return <Line key={'borders'}
        points={[
            startX, startY, startX + mapWidth, startY,
            startX + mapWidth, startY, startX + mapWidth, startY + mapHeight,
            startX + mapWidth, startY + mapHeight, startX, startY + mapHeight,
            startX, startY + mapHeight, startX, startY
        ]}
        stroke={bordersColor}
    />
}

export default Borders