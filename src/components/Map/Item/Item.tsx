// import * as React from 'react'
// import { FC } from 'react'
// import { Circle } from 'react-konva'
// import { ItemType, ItemWithImageType } from '../../../redux/map-reducer'

// type ItemProps = {
//     items: Array<ItemType>
//     itemsWithImages: Array<ItemWithImageType>
//     gridSize: number

//     handleDragStart: (e: any) => void
//     handleDragEnd: (e: any) => void
//     handleContextMenu: (e: any) => void
//     touchContextMenu: (e: any) => void
// }

// const Item: FC<ItemProps> = ({ items, itemsWithImages, gridSize, handleDragStart, handleDragEnd,
//     handleContextMenu, touchContextMenu }) => {

//         const ItemsElement = items.map(item => <Circle
//             key={item.id}
//             name={item.id}
//             draggable
//             x={item.x}
//             y={item.y}
//             fill={item.color}
//             shadowColor='black'
//             shadowBlur={10}
//             shadowOpacity={0.7}
//             radius={gridSize / 2}
//             onDragStart={handleDragStart}
//             onDragEnd={handleDragEnd}
//             onContextMenu={handleContextMenu}
//             onTouchEnd={touchContextMenu}
//         />)

//         const itemsWithImagesElements = itemsWithImages.map(item => {
//             let image = document.createElement('img')
//             image.src = item.itemWithImage
//             image.alt = 'itemWithImage'

//             // return <Circle
//             //     key={item.id}
//             //     name={item.id}
//             //     draggable
//             //     x={item.x}
//             //     y={item.y}
//             //     id={item.id}
//             //     fillPatternImage={image}
//             //     fillPatternOffset={{x: 25, y: 25}}
//             //     radius={gridSize / 2}
//             //     // width={50}
//             //     // height={50}
//             //     onDragStart={handleDragStart}
//             //     onDragEnd={handleDragEnd}
//             // />
//         })
        
//     return <>{ItemsElement + itemsWithImagesElements}</>
// }

// export default Item