import { FC } from 'react'
import { Line } from 'react-konva'

type VerticalLinesProps = {
    gridColor: string
    gridSize: number

    width: number
    height: number

    startX: number
    startY: number
}

const VerticalLines: FC<VerticalLinesProps> = ({ gridColor, gridSize, width, height, startX, startY  }) => {
    const lines = []
    for (let i = 1; i <= (width / gridSize) - 1; i++) {
        lines.push(i)
    }

    const verticalLines = lines.map(l => <Line key={l}
        x={startX}
        y={startY}
        points={[l * gridSize, 0, l * gridSize, height]}
        stroke={gridColor} />)

    return <>{verticalLines}</>
}

export default VerticalLines