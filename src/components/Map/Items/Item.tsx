// import * as React from 'react'
// import { useMemo, useState } from 'react'
// import { FC } from 'react'

// import { Circle } from 'react-konva'
// import Konva from 'konva'

// import useContextMenu from '../../hooks/useContextMenu'
// import { ItemType } from '../../../redux/map-reducer'
// import { KonvaEventObject } from 'konva/lib/Node'

// type ItemProps = {
//     item: ItemType
//     gridSize: number

//     items: Array<ItemType>

//     setActiveCircleId: React.Dispatch<any>
//     handleContextMenu: (e: any) => void
//     touchContextMenu: (e: any) => void

//     updateItems: (items: Array<ItemType>) => void
// }

// const Item: FC<ItemProps> = ({ item, gridSize, items, setActiveCircleId, handleContextMenu, touchContextMenu, updateItems }) => {

//     const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
//         const id = e.target.name()
//         setActiveCircleId(id)
//         const item = items.find((i) => i.id === id)
//         const index = items.indexOf(item)
//         // remove from the list:
//         items.splice(index, 1)
//         // add to the top
//         items.push(item)
//         updateItems(items)

//         e.target.setAttrs({
//             shadowOffset: {
//                 x: 15,
//                 y: 15
//             },
//             scaleX: 1.1,
//             scaleY: 1.1
//         })
//     }

//     const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
//         const id = e.target.name()
//         setActiveCircleId(id)
//         const item = items.find((i) => i.id === id)
//         const index = items.indexOf(item)
//         // update item position
//         items[index] = {
//             ...item,
//             x: e.target.x(),
//             y: e.target.y(),
//         }
//         updateItems(items)

//         e.target.to({
//             duration: 0.5,
//             easing: Konva.Easings.ElasticEaseOut,
//             scaleX: 1,
//             scaleY: 1,
//             shadowOffsetX: 5,
//             shadowOffsetY: 5
//         })
//     }

//     //     const [touchStart, setTouchStart] = useState(null) //Точка начала касания
//     //     const [touchPosition, setTouchPosition] = useState(null) //Текущая позиция

//     //     const sensitivity = 15 //Чувствительность — количество пикселей, после которого жест будет считаться свайпом

//     //     const TouchStart = (e) => {
//     //     //Получаем текущую позицию касания
//     //     setTouchStart({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY })
//     //     setTouchPosition({ x: touchStart.x, y: touchStart.y })

//     //     // touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
//     //     // touchPosition = { x: touchStart.x, y: touchStart.y };

//     //     // Draw(touchPosition.x, touchPosition.y, 6, "blue"); //Рисуем точку начала касания
//     // }

//     return <Circle
//                             key={item.id}
//                             name={item.id}
//                             draggable
//                             y={item.y}
//                             x={item.x}
//                             fill={item.color}
//                             shadowColor='black'
//                             shadowBlur={10}
//                             shadowOpacity={0.7}
//                             radius={gridSize / 2}
//                             onDragStart={handleDragStart}
//                             onDragEnd={handleDragEnd}
//                             onContextMenu={handleContextMenu}
//                             onTouchEnd={touchContextMenu}
//                         />
// }

// export default Item
