import * as React from 'react'
import { useMemo, useState } from 'react'
import { FC } from 'react'

import { Layer, Stage, Circle, Line, Rect } from 'react-konva'
import Konva from 'konva'

import useContextMenu from '../hooks/useContextMenu'
import MapBackground from './MapBackground/MapBackground'
import {
    BackgroundItemOnMapType, ItemType
} from '../../redux/map-reducer'
import { KonvaEventObject } from 'konva/lib/Node'
import DiceContainer from './Dice/DiceContainer'
import GridContainer from './Grid/GridContainer'
import BordersContainer from './Borders/BordersContainer'

import './../../App.scss'
//@ts-ignore
import s from './Map.module.scss'

type MapProps = {
    map: null | string
    mapWidth: number
    mapHeight: number
    gridSize: number

    items: Array<ItemType>
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>

    paintbrushColor: string
    pensilMode: boolean
    lineMode: boolean

    updateItems: (items: Array<ItemType>) => void
    updateItemsWithImages: (items: Array<ItemType>) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const Map: FC<MapProps> = ({ map, mapWidth, mapHeight, gridSize, items, backgroundItemsOnMap,
    paintbrushColor, pensilMode, lineMode,
    updateItems, updateBackgroundItems, updateItemsWithImages }) => {

    let stage = null

    const [currentLine, setCurrentLine] = useState(null)
    const [lines, setLines] = useState([])

    const [activeItemId, setActiveItemId] = useState(null)

    const { setContextMenu } = useContextMenu()

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete All',
            onClick: (e) => {
                const id = e.target.name
                setActiveItemId(id)

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

    const elem = document.documentElement
    const canvas = document.getElementById('canvas')

    const addOnWheel = (elem, handler) => {
        if (elem.addEventListener) {
            if ('onwheel' in document) {
                // IE9+, FF17+
                elem.addEventListener("wheel", handler)
            } else if ('onmousewheel' in document) {
                // устаревший вариант события
                elem.addEventListener("mousewheel", handler)
            } else {
                // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
                elem.addEventListener("MozMousePixelScroll", handler)
            }
        }
        // else { // IE8-
        //     canvas.attachEvent("onmousewheel", handler)
        // }
    }

    let scale = 1

    const onScaling = () => {
        addOnWheel(elem, function (e: React.WheelEvent<HTMLInputElement>) {

            let delta = e.deltaY || e.detail
            // || e.wheelDelta

            if (delta > 0) scale += 0.05
            else { if (scale > 1) scale -= 0.05 }

            canvas.style.transform = canvas.style.webkitTransform = canvas.style.transform = `scale(${scale})`

            e.preventDefault()
        })
    }

    const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveItemId(id)

        const itemRegExp = /item-/i
        const itemWithImageRegExp = /itemWithImage-/i
        const backgroundItemRegExp = /background-/i

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

    const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveItemId(id)

        const itemRegExp = /item-/i
        const itemWithImageRegExp = /itemWithImage-/i
        const backgroundItemRegExp = /background-/i

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
            const backgroundItem = backgroundItemsOnMap.find((i) => i.id === id)
            const backgroundItemIndex = backgroundItemsOnMap.indexOf(backgroundItem)

            const boxesX = []
            for (let i = 0; i <= mapWidth / gridSize; i++) {
                boxesX.push(i)
            }
            const boxesY = []
            for (let i = 0; i <= mapHeight / gridSize; i++) {
                boxesY.push(i)
            }

            const backgroundItemX = boxesX.filter(i => Math.floor(e.target.x() / gridSize) === i)[0] * gridSize
            const backgroundItemY = boxesY.filter(i => Math.floor(e.target.y() / gridSize) === i)[0] * gridSize

            backgroundItemsOnMap[backgroundItemIndex] = {
                ...backgroundItem,
                x: backgroundItemX,
                y: backgroundItemY
            }
            console.log(
                'x:', backgroundItemX,
                'y:', backgroundItemY
            )
            updateBackgroundItems(backgroundItemsOnMap)
        }
    }

    const getScaledPoint = (stage, scale) => {
        const { x, y } = stage.getPointerPosition()
        return { x: x / scale, y: y / scale }
    }

    const onMouseDown = () => {
        const { x, y } = getScaledPoint(stage, 1)
        setCurrentLine({ points: [x, y], paintbrushColor })
    }

    const onMouseMove = () => {
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

    const onMouseUp = () => {
        const { x, y } = getScaledPoint(stage, 1)
        setCurrentLine(null)
        setLines([...lines,
        { ...currentLine, points: [...currentLine.points, x, y] }
        ])
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
        <Stage onWheel={onScaling}
            // onTouchStart={TouchStart} onTouchMove={CheckAction}
            // width={window.innerWidth} height={window.innerHeight}

            width={mapWidth > window.innerWidth - 100 ? mapWidth : mapWidth + 80}
            height={mapHeight}
            onContextMenu={handleContextMenu}

            ref={setStageRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp} >

            <Layer>
                {map && <MapBackground src={map} mapHeight={mapHeight} mapWidth={mapWidth} />}

                <GridContainer />
                <BordersContainer mapHeight={mapHeight} mapWidth={mapWidth} />

                <Line {...currentLine} strokeWidth={1} stroke={paintbrushColor} onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd} />
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        {...line}
                        strokeWidth={1}
                        stroke={paintbrushColor}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                    />
                ))}

                {backgroundItemsOnMap.map(item => {
                    let image = document.createElement('img')
                    image.src = item.backgroundItemOnMap
                    image.alt = 'backgroundItem'

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
                        onDragEnd={handleDragEnd}
                    />
                })
                }

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

                <DiceContainer width={mapWidth} />

            </Layer>
        </Stage>
    </div>
}

export default Map