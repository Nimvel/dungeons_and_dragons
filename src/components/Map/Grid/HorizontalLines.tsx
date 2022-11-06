import { FC } from 'react'
import { Line } from 'react-konva'

type HorizontalLinesProps = {
    gridColor: string
    gridSize: number
    width: number
    height: number
}

const HorizontalLines: FC<HorizontalLinesProps> = ({ gridColor, gridSize, width, height }) => {
    const lines = []
    for (let i = 1; i <= height / gridSize; i++) {
        lines.push(i)
    }

    const horizontalLines = lines.map(l => <Line key={l}
        x={(window.innerWidth - width) / 2}
        y={(window.innerHeight - height) / 2}
        points={[0, l * gridSize, width, l * gridSize]}
        stroke={gridColor}
    />)

    return <>{horizontalLines}</>
}

export default HorizontalLines