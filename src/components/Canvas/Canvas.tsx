import * as React from 'react'
import { useMemo, useState } from 'react'
import { FC } from 'react'

import { KonvaEventObject } from 'konva/lib/Node'
import { Layer, Stage, Circle, Line, Rect } from 'react-konva'
import Konva from 'konva'

import useContextMenu from '../hooks/useContextMenu'
import MapBackground from './MapBackground/MapBackground'
import GridContainer from './Grid/GridContainer'
import BordersContainer from './Borders/BordersContainer'

import { BackgroundItemOnMapType, ItemType } from '../../redux/map-reducer'
import { LineType } from '../../redux/paint-reducer'

import { BackgroundItemType } from '../../redux/backgrounds-reducer'

type CanvasProps = {
    map: null | string
    mapWidth: number
    mapHeight: number
    gridSize: number

    items: Array<ItemType>
    backgroundItems: Array<BackgroundItemType>
    backgroundItemsOnMap: Array<BackgroundItemOnMapType>
    clickedItemId: null | string
    isFreeMovement: boolean
    isFixBackgroundItems: boolean

    paintbrushColor: string
    strokeWidth: number
    pensilMode: boolean
    lineMode: boolean
    lines: Array<LineType>

    isCreateMapItemsChapter: boolean
    isCreateMapMoveItemsChapter: boolean
    isCreateMapFreeButtonChapter: boolean

    drawLine: (line: LineType) => void
    setURI: (uri: string) => void

    updateItems: (items: Array<ItemType>) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void

    addNewBackgroundItemOnMap: (backgroundItemOnMap: string, x: number, y: number, clickedItemId: string) => void

    createMapItemsChapter: (isCreateMapItemsChapter: boolean) => void
    createMapMoveItemsChapter: (isCreateMapMoveItemsChapter: boolean) => void
    createMapFreeButtonChapter: (isCreateMapFreeButtonChapter: boolean) => void
    createMapFixButtonChapter: (isCreateMapFixButtonChapter: boolean) => void
}

const Canvas: FC<CanvasProps> = ({ map, mapWidth, mapHeight, gridSize, items, backgroundItemsOnMap, isFreeMovement,
    paintbrushColor, pensilMode, lineMode, isFixBackgroundItems, updateItems, updateBackgroundItems, clickedItemId,
    lines, drawLine, strokeWidth, addNewBackgroundItemOnMap, backgroundItems, isCreateMapItemsChapter, 
    isCreateMapMoveItemsChapter, isCreateMapFreeButtonChapter, createMapItemsChapter, createMapMoveItemsChapter, 
    createMapFreeButtonChapter, createMapFixButtonChapter, setURI }) => {

    const itemRegExp = /item-/i
    const itemWithImageRegExp = /itemWithImage-/i
    const backgroundItemRegExp = /background-/i

    const [activeItemId, setActiveItemId] = useState(null)
    const [clickedItemIdOnMap, setClickedItemIdOnMap] = useState(null)

    const [currentLine, setCurrentLine] = useState(null)

    const [canvasX, setCanvasX] = useState(0)
    const [canvasY, setCanvasY] = useState(0)

    const [isDrawMap, setIsDrawMap] = useState(false)

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    let [stage, setStage] = useState(null)

    React.useEffect(() => { }, [x, y, backgroundItemsOnMap])

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
    //             // ???????????????????? ?????????????? ??????????????
    //             elem.addEventListener("mousewheel", handler)
    //         } else {
    //             // 3.5 <= Firefox < 17, ?????????? ???????????? ?????????????? DOMMouseScroll ??????????????????
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
            if (id === 'canvas') {
                setCanvasX(e.target.x())
                setCanvasY(e.target.y())
            }
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

                    setX(Math.round(e.target.x() / gridSize) * gridSize)
                    setY(Math.round(e.target.y() / gridSize) * gridSize)

                    backgroundItemsOnMap[backgroundItemIndex] = {
                        ...backgroundItem,
                        x: Math.round(e.target.x() / gridSize) * gridSize,
                        y: Math.round(e.target.y() / gridSize) * gridSize
                    }
                    updateBackgroundItems(backgroundItemsOnMap)
                }
                }  

            if (isCreateMapMoveItemsChapter) {
                createMapMoveItemsChapter(false)
                createMapFreeButtonChapter(true)
            }

            if (!isFreeMovement) {
                if (isCreateMapFreeButtonChapter) {
                    createMapFreeButtonChapter(false)
                    createMapFixButtonChapter(true)
                }
            }
            
    }

    const getPointerPosition = (e) => {
        setStage(e.target.getStage())

        const { x, y } = stage.getPointerPosition()
        return { x, y }
    }

    const onMouseDown = (e) => {
        const id = e.target.name()
        setActiveItemId(id)

        if (activeItemId != clickedItemId || e.target.name() === 'canvas' ) {
            setIsDrawMap(true)
        }

        if (pensilMode || lineMode) {
            const { x, y } = getPointerPosition(e)

            setCurrentLine({ points: [x, y], paintbrushColor })
        }
    }

    const onMouseMove = (e) => {
        const id = e.target.name()
        setActiveItemId(id)

        if (isDrawMap && clickedItemId) {
//=================================(?????????????? ???????????????? ?????????????????? ???????????? ?? ???????? ???? ???????????????? ?? ?????????? ????????????)===================
            const item = backgroundItemsOnMap.filter(el => el.id === id)
            item.length ? setClickedItemIdOnMap(item[0].clickedItemId) : setClickedItemIdOnMap(null)

            if (clickedItemIdOnMap != clickedItemId || id === 'canvas') {
                const item = backgroundItems.find(el => el.id === clickedItemId && el).backgroundItem

                const itemX = Math.floor((e.evt.offsetX - canvasX) / gridSize) * gridSize
                const itemY = Math.floor((e.evt.offsetY - canvasY) / gridSize) * gridSize
    
                addNewBackgroundItemOnMap(item, itemX, itemY, clickedItemId)
            }
    }
        if (pensilMode || lineMode) {
            if (currentLine) {
                const { x, y } = getPointerPosition(e)
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

    const onMouseUp = (e) => {
        setIsDrawMap(false)

        if (pensilMode || lineMode) {
            const { x, y } = getPointerPosition(e)
            setCurrentLine(null)

            drawLine({
                ...currentLine,
                points: [...currentLine.points, x, y],
                color: paintbrushColor,
                strokeWidth: strokeWidth
            })
        }
    }

    const setStageRef = ref => {
        if (ref) {
            stage = ref
        }
    }

    const onCanvasClick = (e: any) => {
        const id = e.target.name()
        setActiveItemId(id)

        const item = backgroundItemsOnMap.filter(el => el.id === id)
        item.length ? setClickedItemIdOnMap(item[0].clickedItemId) : setClickedItemIdOnMap(null)

        if (clickedItemId) {
            if (clickedItemIdOnMap != clickedItemId) {
                const item = backgroundItems.find(el => el.id === clickedItemId && el).backgroundItem

                const itemX = Math.floor((e.evt.offsetX - canvasX) / gridSize) * gridSize
                const itemY = Math.floor((e.evt.offsetY - canvasY) / gridSize) * gridSize
    
                addNewBackgroundItemOnMap(item, itemX, itemY, clickedItemId)
                setIsDrawMap(false)
            }
        }

        const uri = e.currentTarget.toDataURL()
        setURI(uri)

        if (isCreateMapItemsChapter) {
            createMapItemsChapter(false)
            createMapMoveItemsChapter(true)
        }
    }

    const onCanvasTouch = (e: any) => {
        if (clickedItemId) {
            const item = backgroundItems.find(el => el.id === clickedItemId && el).backgroundItem

            const itemX = Math.floor(e.touches[0].offsetX / gridSize) * gridSize
            const itemY = Math.floor(e.touches[0].offsetY / gridSize) * gridSize

            addNewBackgroundItemOnMap(item, itemX, itemY, clickedItemId)
        }
        
        const uri = e.currentTarget.toDataURL()
        setURI(uri)

        if (isCreateMapItemsChapter) {
            createMapItemsChapter(false)
            createMapMoveItemsChapter(true)
        }
    }

    return <Stage id='canvas'
            draggable={(!pensilMode && !lineMode && !clickedItemId) && (mapWidth > window.innerWidth || mapHeight > window.innerHeight) && true}
            // onWheel={onScaling}
            // onTouchStart={TouchStart} onTouchMove={CheckAction}
            name='canvas'
            
            width={mapWidth}
            height={mapHeight}

            onContextMenu={handleContextMenu}

            ref={setStageRef}

            onClick={onCanvasClick}
            onTouch={onCanvasTouch}

            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}

            onTouchStart={onMouseDown}
            onTouchMove={onMouseMove}
            onTouchEnd={onMouseUp}

            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
        >

            <Layer>
                {map && <MapBackground src={map} mapHeight={mapHeight} mapWidth={mapWidth} />}

                {backgroundItemsOnMap.map(item => {
                    let image = document.createElement('img')
                    image.src = item.backgroundItemOnMap
                    image.alt = 'backgroundItem'

                    if (pensilMode || lineMode || isFixBackgroundItems || clickedItemId) {
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

                <BordersContainer mapHeight={mapHeight} mapWidth={mapWidth} />
                <GridContainer mapHeight={mapHeight} mapWidth={mapWidth} />

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

            </Layer>
        </Stage>
}

export default Canvas