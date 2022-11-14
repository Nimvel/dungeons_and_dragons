import { FC } from 'react'
import { Line } from 'react-konva'

type VerticalLinesProps = {
    gridColor: string
    gridSize: number

    width: number
    height: number
}

const VerticalLines: FC<VerticalLinesProps> = ({ gridColor, gridSize, width, height  }) => {
    const lines = []
    for (let i = 1; i <= (width / gridSize) - 1; i++) {
        lines.push(i)
    }

    const verticalLines = lines.map(l => <Line key={l}
        x={0}
        y={0}
        points={[l * gridSize, 0, l * gridSize, height]}
        stroke={gridColor} />)

    return <>{verticalLines}</>
}

export default VerticalLines