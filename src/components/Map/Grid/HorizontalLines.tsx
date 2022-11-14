import { FC } from 'react'
import { Line } from 'react-konva'

type HorizontalLinesProps = {
    gridColor: string
    gridSize: number

    width: number
    height: number

    startX: number
    startY: number
}

const HorizontalLines: FC<HorizontalLinesProps> = ({ gridColor, gridSize, width, height, startX, startY }) => {
    const lines = []
    for (let i = 1; i <= (height / gridSize) - 1; i++) {
        lines.push(i)
    }

    const horizontalLines = lines.map(l => <Line key={l}
        x={startX}
        y={startY}
        points={[0, l * gridSize, width, l * gridSize]}
        stroke={gridColor}
    />)

    return <>{horizontalLines}</>
}

export default HorizontalLines