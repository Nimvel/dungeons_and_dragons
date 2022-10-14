import { Line } from "react-konva"

type VerticalLinesType = {
    gridColor: null | string
    gridSize: number
    width: number
    height: number
}

const VerticalLines = ({ gridColor, gridSize, width, height }: VerticalLinesType) => {
    const lines = []
    const size = width >= height ? width : height
    for (let i = 1; i <= size / gridSize; i++) {
        lines.push(i)
    }

    const verticalLines = lines.map(l => <Line key={l}
        x={0}
        y={0}
        points={[l * gridSize, 0, l * gridSize, size]}
        stroke={gridColor} />)

    return verticalLines
}

export default VerticalLines