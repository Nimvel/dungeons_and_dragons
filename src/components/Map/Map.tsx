import * as React from 'react'
import { useMemo, useState } from 'react'
import { FC } from 'react'

import { KonvaEventObject } from 'konva/lib/Node'
import { Layer, Stage, Circle, Line, Rect } from 'react-konva'
import Konva from 'konva'

import useContextMenu from '../hooks/useContextMenu'
import MapBackground from './MapBackground/MapBackground'
import DiceContainer from './Dice/DiceContainer'
import GridContainer from './Grid/GridContainer'
import BordersContainer from './Borders/BordersContainer'

import { BackgroundItemOnMapType, ItemType } from '../../redux/map-reducer'
import { LineType } from '../../redux/paint-reducer'

//@ts-ignore
import s from './Map.module.scss'

type MapProps = {
    map: null | string
    mapWidth: number
    mapHeight: number
    gridSize: number

    items: Array<ItemType>
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    paintbrushColor: string
    strokeWidth: number
    pensilMode: boolean
    lineMode: boolean
    lines: Array<LineType>

    drawLine: (line: LineType) => void

    updateItems: (items: Array<ItemType>) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const Map: FC<MapProps> = ({ map, mapWidth, mapHeight, gridSize, items, backgroundItemsOnMap, isFreeMovement,
    paintbrushColor, pensilMode, lineMode, isFixBackgroundItems, updateItems, updateBackgroundItems, 
    lines, drawLine, strokeWidth }) => {

    let stage = null
    // let scale = 1

    const itemRegExp = /item-/i
    const itemWithImageRegExp = /itemWithImage-/i
    const backgroundItemRegExp = /background-/i

    const [activeItemId, setActiveItemId] = useState(null)

    const [currentLine, setCurrentLine] = useState(null)

    const [x, setX] = useState((window.innerWidth - mapWidth) / 2)
    const [y, setY] = useState((window.innerHeight - mapHeight) / 2)

    React.useEffect(() => {}, [x, y, backgroundItemsOnMap])


    const { setContextMenu } = useContextMenu()

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete All',
            onClick: () => {

                const item = items.find((i) => i.id === activeItemId)
                const index = items.indexOf(item)

                updateItems(items.splice(index, 1))
            }
        }
    ]), [])

    const handleContextMenu = (e: any) => {
        e.evt.preventDefault()
        const id = e.target.name()
        const { clientX, clientY } = e.evt
        items.find((i: any) => {
            if (i.id === id) {
                setActiveItemId(id)
                setContextMenu(contextMenu, [clientX, clientY])
            }
        })
    }

    const touchContextMenu = (e: any) => {
        e.evt.preventDefault()
        const id = e.target.name()
        // const clientX = Touch.clientX
        // const clientY = Touch.clientY
        const { clientX, clientY } = e.evt

        items.find((i: any) => {
            if (i.id === id) {
                setActiveItemId(id)
                setContextMenu(contextMenu, [clientX, clientY])
            }
        })
    }

    // const elem = document.documentElement
    // const canvas = document.getElementById('canvas')

    // const addOnWheel = (elem, handler) => {
    //     if (elem.addEventListener) {
    //         if ('onwheel' in document) {
    //             // IE9+, FF17+
    //             elem.addEventListener("wheel", handler)
    //         } else if ('onmousewheel' in document) {
    //             // устаревший вариант события
    //             elem.addEventListener("mousewheel", handler)
    //         } else {
    //             // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
    //             elem.addEventListener("MozMousePixelScroll", handler)
    //         }
    //     }
    //     // else { // IE8-
    //     //     canvas.attachEvent("onmousewheel", handler)
    //     // }
    // }

    // const onScaling = () => {
    //     addOnWheel(elem, function (e: React.WheelEvent<HTMLInputElement>) {

    //         let delta = e.deltaY || e.detail
    //         // || e.wheelDelta

    //         if (delta > 0) scale += 0.05
    //         else { if (scale > 1) scale -= 0.05 }

    //         canvas.style.transform = canvas.style.webkitTransform = canvas.style.transform = `scale(${scale})`

    //         e.preventDefault()
    //     })
    // }

    const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveItemId(id)

        const isItemId = itemRegExp.test(id)
        const isItemWithImageId = itemWithImageRegExp.test(id)
        const isBackgroundItemId = backgroundItemRegExp.test(id)

        if (isItemId || isItemWithImageId) {
            const item = items.find((i) => i.id === id)
            const index = items.indexOf(item)

            items.splice(index, 1)
            items.push(item)
            updateItems(items)

            e.target.setAttrs({
                shadowOffset: {
                    x: 15,
                    y: 15
                },
                scaleX: 1.1,
                scaleY: 1.1
            })
        }
        else if (isBackgroundItemId) {
            const backgroundItem = backgroundItemsOnMap.find((i) => i.id === id)
            const backgroundItemIndex = backgroundItemsOnMap.indexOf(backgroundItem)

            backgroundItemsOnMap.splice(backgroundItemIndex, 1)
            backgroundItemsOnMap.push(backgroundItem)

            updateBackgroundItems(backgroundItemsOnMap)
        }
    }
    
    const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveItemId(id)
    }

    const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveItemId(id)

        const isItemId = itemRegExp.test(id)
        const isItemWithImageId = itemWithImageRegExp.test(id)
        const isBackgroundItemId = backgroundItemRegExp.test(id)

        if (isItemId || isItemWithImageId) {
            const item = items.find((i) => i.id === id)
            const index = items.indexOf(item)

            items[index] = {
                ...item,
                x: e.target.x(),
                y: e.target.y(),
            }
            updateItems(items)

            e.target.to({
                duration: 0.5,
                easing: Konva.Easings.ElasticEaseOut,
                scaleX: 1,
                scaleY: 1,
                shadowOffsetX: 5,
                shadowOffsetY: 5
            })
        }
        else if (isBackgroundItemId) {

            const boxesX = []
            for (let i = 0; i <= mapWidth / gridSize; i++) {
                boxesX.push(i)
            }
            const boxesY = []
            for (let i = 0; i <= mapHeight / gridSize; i++) {
                boxesY.push(i)
            }

            if (isFreeMovement) {
                const backgroundItem = backgroundItemsOnMap.find((i) => i.id === id)
                const backgroundItemIndex = backgroundItemsOnMap.indexOf(backgroundItem)

                backgroundItemsOnMap[backgroundItemIndex] = {
                    ...backgroundItem,
                    x: e.target.x(),
                    y: e.target.y(),
                }
                updateBackgroundItems(backgroundItemsOnMap)
            }

            else {
                const backgroundItem = backgroundItemsOnMap.find((i) => i.id === id)
                const backgroundItemIndex = backgroundItemsOnMap.indexOf(backgroundItem)

                const startX = (window.innerWidth - mapWidth) / 2
                const startY = (window.innerHeight - mapHeight) / 2

                setX(Math.round((e.target.x() - startX) / gridSize) * gridSize + startX)
                setY(Math.round((e.target.y() - startY) / gridSize) * gridSize + startY)

                backgroundItemsOnMap[backgroundItemIndex] = {
                    ...backgroundItem,
                    x: Math.round((e.target.x() - startX) / gridSize) * gridSize + startX,
                    y: Math.round((e.target.y() - startY) / gridSize) * gridSize + startY
                }
                updateBackgroundItems(backgroundItemsOnMap)
            }
        }
    }

    const getScaledPoint = (stage, scale) => {
        const { x, y } = stage.getPointerPosition()
        return { x, y }
        // return { x: x / scale, y: y / scale }
    }

    const onMouseDown = () => {
        if (pensilMode || lineMode) {
            const { x, y } = getScaledPoint(stage, 1)
            setCurrentLine({ points: [x, y], paintbrushColor })
        }
    }

    const onMouseMove = () => {
        if (pensilMode || lineMode) {
            if (currentLine) {
                const { x, y } = getScaledPoint(stage, 1)
                const [x0, y0] = currentLine.points

                pensilMode && setCurrentLine({
                    ...currentLine,
                    points: [...currentLine.points, x, y]
                })

                lineMode && setCurrentLine({
                    ...currentLine,
                    points: [x0, y0, x, y]
                })
            }
        }
    }

    const onMouseUp = () => {
        if (pensilMode || lineMode) {
            const { x, y } = getScaledPoint(stage, 1)
            setCurrentLine(null)
            drawLine({ ...currentLine, 
                points: [...currentLine.points, x, y], 
                color: paintbrushColor, 
                strokeWidth: strokeWidth })
        }

    }

    const setStageRef = ref => {
        if (ref) {
            stage = ref
        }
    }

    //     const [touchStart, setTouchStart] = useState(null) //Точка начала касания
    //     const [touchPosition, setTouchPosition] = useState(null) //Текущая позиция

    //     const sensitivity = 15 //Чувствительность — количество пикселей, после которого жест будет считаться свайпом

    //     const TouchStart = (e) => {
    //     //Получаем текущую позицию касания
    //     setTouchStart({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY })
    //     setTouchPosition({ x: touchStart.x, y: touchStart.y })

    //     // touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    //     // touchPosition = { x: touchStart.x, y: touchStart.y };

    //     // Draw(touchPosition.x, touchPosition.y, 6, "blue"); //Рисуем точку начала касания
    // }

    //     const CheckAction = () => {
    //     const d = //Получаем расстояния от начальной до конечной точек по обеим осям
    //     {
    //    	 x: touchStart.x - touchPosition.x,
    //    	 y: touchStart.y - touchPosition.y
    //     };

    //     // if(Math.abs(d.x) > Math.abs(d.y)) //Проверяем, движение по какой оси было длиннее
    //     // {
    //    	 if(Math.abs(d.x) > sensitivity && Math.abs(d.y) > sensitivity) //Проверяем, было ли движение достаточно длинным
    //    	 {
    //         d.x > 0 && d.y < 0 ? alert('zoom in') : alert('zoom out')
    //         }
    //    		//  if(d.x > 0 && d.y < 0) //Если значение больше нуля, значит пользователь двигал пальцем справа налево
    //    		//  {
    //         //     alert('zoom in')
    //    		//  }
    //    		//  else //Иначе он двигал им слева направо
    //    		//  {
    //    		// 	alert('zoom out')
    //    		//  }
    //    	//  }
    //     // }
    //     // else //Аналогичные проверки для вертикальной оси
    //     // {
    //    	//  if(Math.abs(d.y) > sensitivity)
    //    	//  {
    //    	// 	 if(d.y > 0) //Свайп вверх
    //    	// 	 {
    //    	// 		 msg = "Swipe up";
    //    	// 	 }
    //    	// 	 else //Свайп вниз
    //    	// 	 {
    //    	// 		 msg = "Swipe down";
    //    	// 	 }
    //    	//  }
    //     // }

    // }

    return <div id='canvas' className={s.map} >
        <Stage  // onWheel={onScaling}
        draggable = {(mapWidth > window.innerWidth || mapHeight > window.innerHeight) && true}
        
            // onTouchStart={TouchStart} onTouchMove={CheckAction}
            // width={window.innerWidth} height={window.innerHeight}

            width={window.innerWidth}
            height={window.innerHeight}
            onContextMenu={handleContextMenu}

            ref={setStageRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp} >

            <Layer>
                {map && <MapBackground src={map} mapHeight={mapHeight} mapWidth={mapWidth} />}

                {backgroundItemsOnMap.map(item => {
                    let image = document.createElement('img')
                    image.src = item.backgroundItemOnMap
                    image.alt = 'backgroundItem'

                    if (pensilMode || lineMode || isFixBackgroundItems) {
                        return <Rect
                            key={item.id}
                            name={item.id}
                            x={item.x}
                            y={item.y}
                            id={item.id}
                            fillPatternImage={image}
                            width={gridSize}
                            height={gridSize}
                            onDragStart={handleDragStart}
                            onDragMove={handleDragMove}
                            onDragEnd={handleDragEnd}
                        />
                    }
                    else {
                        return <Rect
                            key={item.id}
                            name={item.id}
                            draggable
                            x={item.x}
                            y={item.y}
                            id={item.id}
                            fillPatternImage={image}
                            width={gridSize}
                            height={gridSize}
                            onDragStart={handleDragStart}
                            onDragMove={handleDragMove}
                            onDragEnd={handleDragEnd}
                        />
                    }
                })
                }

                <GridContainer />
                <BordersContainer mapHeight={mapHeight} mapWidth={mapWidth} />

                {lines.map((line, index) => (
                    <Line
                        key={index}
                        {...line}
                        stroke={line.color}
                        strokeWidth={line.strokeWidth}
                    />
                ))}
                <Line {...currentLine} strokeWidth={strokeWidth} stroke={paintbrushColor}
                />

                {items.map(item => {
                    let image = document.createElement('img')
                    image.src = item.image
                    image.alt = 'image'

                    return <Circle
                        key={item.id}
                        name={item.id}
                        draggable
                        x={item.x}
                        y={item.y}
                        fill={item.color}

                        fillPatternImage={image}
                        fillPatternOffset={{ x: 25, y: 25 }}

                        shadowColor='black'
                        shadowBlur={10}
                        shadowOpacity={0.7}
                        radius={gridSize / 2}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onContextMenu={handleContextMenu}
                        onTouchEnd={touchContextMenu}
                    />
                })}


                {/* <Item items={items} itemsWithImages={itemsWithImages} gridSize={gridSize} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd}
                        handleContextMenu={handleContextMenu}  touchContextMenu={touchContextMenu} /> */}

                <DiceContainer width={mapWidth}/>

            </Layer>
        </Stage>
    </div>
}

export default Map