import * as React from 'react'
import { FC } from 'react'
import { Rect, Shape, Text } from 'react-konva'

type DiceProps = {
  number: number
  x: number
  y: number
  width: number
  text: string

  isTypesOfDice: boolean

  diceColor: string
  diceColorFace: string
  diceNumberColor: string

  isAllDiceMenuChapter: boolean

  allDiceMenuChapter: (isAllDiceMenuChapter: boolean) => void
  changeDiceMenuChapter: (isChangeDiceMenuChapter: boolean) => void
}

const Dice: FC<DiceProps> = ({ number, x, y, width, text, diceColor, 
  diceColorFace, diceNumberColor, isTypesOfDice, 
  isAllDiceMenuChapter, allDiceMenuChapter, changeDiceMenuChapter }) => {

  const [numberDice, setNumberDice] = React.useState(String(Math.round(Math.random() * number + 1)))

  const onNumberClick = (e: any) => {
    const shape = e.target

    shape.to({
      x: x + 25,
      y: y,
      scaleX: 0,
      scaleY: 0,
      opacity: 0,

      onFinish: () => {
        setNumberDice(String(Math.round(Math.random() * number + 1)))
        shape.to({
          x: x + 25,
          y: y + 50,

          onFinish: () => {
            shape.to({
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              x: x,
              y: y + 15,
            })
          }
        })
      }
    })

    if (isAllDiceMenuChapter) {
      allDiceMenuChapter(false)
      changeDiceMenuChapter(true)
    }
  }

  return <>
    {number === 4 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 25, y - 10)
        context.lineTo(x + 50, y + 40)
        context.lineTo(x, y + 40)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    {number === 6 && <Rect
      key={`D${number}`}
      name={`D${number}`}
      id={`D${number}`}
      x={x}
      y={y}
      fill={diceColor}
      stroke={diceColorFace}
      width={50}
      height={50}
    />}

    {number === 8 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 25, y - 5)
        context.lineTo(x + 55, y + 25)
        context.lineTo(x + 25, y + 55)
        context.lineTo(x - 5, y + 25)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    {number === 10 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 25, y - 5)
        context.lineTo(x + 60, y + 25)
        context.lineTo(x + 25, y + 55)
        context.lineTo(x - 10, y + 25)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    {number === 12 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 25, y - 5)
        context.lineTo(x + 55, y + 15)
        context.lineTo(x + 45, y + 50)
        context.lineTo(x + 5, y + 50)
        context.lineTo(x - 5, y + 15)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    {number === 20 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 10, y)
        context.lineTo(x + 40, y)
        context.lineTo(x + 55, y + 25)
        context.lineTo(x + 40, y + 50)
        context.lineTo(x + 10, y + 50)
        context.lineTo(x - 5, y + 25)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    {number === 100 && <Shape
      sceneFunc={(context, shape) => {
        context.beginPath()
        context.moveTo(x + 10, y)
        context.lineTo(x + 40, y)
        context.lineTo(x + 55, y + 25)
        context.lineTo(x + 40, y + 50)
        context.lineTo(x + 10, y + 50)
        context.lineTo(x - 5, y + 25)
        context.closePath()
        context.fillStrokeShape(shape)
      }}
      fill={diceColor}
      stroke={diceColorFace}
    />}

    <Text
      fontSize={25}
      text={numberDice}
      fill={diceNumberColor}
      x={x}
      y={y + 15}
      align='center'
      width={width}
      onClick={onNumberClick}
      onTouchStart={onNumberClick}
    />

{isTypesOfDice &&
    <Text
      fontSize={15}
      text={text}
      x={x - 55}
      y={y + 20}
      align='center'
      width={width}
      fill={'#ffffff'}
    />}
  </>
}

export default Dice