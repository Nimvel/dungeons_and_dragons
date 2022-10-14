import { Line } from 'react-konva'

type HorizontalLinesType = {
    gridColor: null | string
    gridSize: number
    width: number
    height: number
}

const HorizontalLines = ({ gridColor, gridSize, width, height } : HorizontalLinesType) => {
    const lines = []
    const size = width >= height ? width : height
    for (let i = 1; i <= size / gridSize; i++) {
        lines.push(i)
    }

    const horizontalLines = lines.map(l => <Line key={l}
        x={0}
        y={0}
        points={[0, l * gridSize, size, l * gridSize]}
        stroke={gridColor}
    />)

    return horizontalLines
}

export default HorizontalLines