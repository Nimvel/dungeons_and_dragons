// import { FC, useState } from 'react'
// import { Line } from 'react-konva'

// type PaintProps = {
//   paintbrushColor: string
//   pensilMode: boolean
//   lineMode: boolean
// }

// const Paint: FC<PaintProps> = ({ paintbrushColor, pensilMode, lineMode }) => {
//   let stage = null

//   const [currentLine, setCurrentLine] = useState(null)
//   const [lines, setLines] = useState([])

//   const getScaledPoint = (stage, scale) => {
//     const { x, y } = stage.getPointerPosition()
//     return { x: x / scale, y: y / scale }
//   }

//   const onMouseDown = () => {
//     const { x, y } = getScaledPoint(stage, 1)
//     setCurrentLine({ points: [x, y], paintbrushColor })
//   }

//   const onMouseMove = () => {
//     const { x, y } = getScaledPoint(stage, 1)
//     setCurrentLine({ points: [x, y], paintbrushColor })

//     if (currentLine) {
//       const { x, y } = getScaledPoint(stage, 1)
//       const [x0, y0] = currentLine.points

//       pensilMode && setCurrentLine({
//         ...currentLine,
//         points: [...currentLine.points, x, y]
//       })

//       lineMode && setCurrentLine({
//         ...currentLine,
//         points: [x0, y0, x, y]
//       })
//     }
//   }

// const onMouseUp = () => {
//   const { x, y } = getScaledPoint(stage, 1)
//   setCurrentLine(null)
//   setLines([ ...lines,
//     { ...currentLine, points: [...currentLine.points, x, y] }
//   ])
// }

// return <>
//   <Line {...currentLine} strokeWidth={1} stroke={paintbrushColor} onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={onMouseUp} />
//   {lines.map((line, index) => (
//     <Line
//       key={index}
//       {...line}
//       strokeWidth={1}
//       stroke={paintbrushColor}
//       onMouseDown={onMouseDown}
//         onMouseMove={onMouseMove}
//         onMouseUp={onMouseUp}
//     />
//   ))}
// </>
// }

// export default Paint