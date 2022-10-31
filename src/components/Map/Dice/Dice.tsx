import * as React from 'react'
import { FC } from 'react'
import { Rect, Text } from 'react-konva'

type DiceProps = {
    number: number
    x: number
    y: number
    width: number
    text: string
}

const Dice: FC<DiceProps> = ({ number, x, y, width, text }) => {
    const [numberDice, setNumberDice] = React.useState('1')

    return <div>
        <Rect
            key='d6'
            name='d6'
            id='d6'
            x={x}
            y={y}
            fill={'#dcab7a'}
            stroke='black'
            shadowColor='black'
            shadowBlur={10}
            width={50}
            height={50}
        />

        <Text
            fontSize={40}
            text={numberDice}
            x={x}
            y={y + 10}
            // wrap='char'
            align='center'
            width={width}
            onClick={() => setNumberDice(String(Math.round(Math.random() * number + 1)))}
        />

        <Text
            fontSize={15}
            text={text}
            x={x + 50}
            y={y + 20}
            // wrap='char'
            align='center'
            width={width}
        />
    </div>
}

export default Dice