import * as React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { FC } from 'react'

import { Layer, Stage, Circle } from 'react-konva'
import Konva from 'konva'

import useContextMenu from '../hooks/useContextMenu'
import HorizontalLines from './Grid/HorizontalLines'
import VerticalLines from './Grid/VerticalLines'
import Background from './Background/Background'
import { ItemType } from '../../redux/map-reducer'
import { KonvaEventObject } from 'konva/lib/Node'
import Dice from './Dice/Dice'


type MapProps = {
    map: string
    items: Array<ItemType>
    grid: boolean
    gridColor: string
    gridSize: number
    mapWidth: number
    mapHeight: number

    D4: boolean
    D6: boolean
    D8: boolean
    D10: boolean
    D12: boolean
    D20: boolean
    D100: boolean
    
    diceColor: string
    diceColorFace: string
    diceNumberColor: string

    updateItems: (items: Array<ItemType>) => void
}

const Map: FC<MapProps> = ({ map, mapWidth, mapHeight, items,
    D4, D6, D8, D10, D12, D20, D100,
    grid, gridColor, gridSize, diceColor, diceColorFace, diceNumberColor, updateItems
}) => {

    const [activeCircleId, setActiveCircleId] = useState(null)

    useEffect(() => { }, [mapWidth, mapHeight])

    const { setContextMenu } = useContextMenu()

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete All',
            onClick: (e) => {
                const id = e.target.name
                setActiveCircleId(id)

                const item = items.find((i) => i.id === activeCircleId)
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
                setActiveCircleId(id)
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
                setActiveCircleId(id)
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
        setActiveCircleId(id)
        const item = items.find((i) => i.id === id)
        const index = items.indexOf(item)
        // remove from the list:
        items.splice(index, 1)
        // add to the top
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

    const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
        const id = e.target.name()
        setActiveCircleId(id)
        const item = items.find((i) => i.id === id)
        const index = items.indexOf(item)
        // update item position
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

    return (
        <div id='canvas'>
            <Stage onWheel={onScaling}
                // onTouchStart={TouchStart} onTouchMove={CheckAction}
                width={window.innerWidth} height={window.innerHeight}
                onContextMenu={handleContextMenu}>
                <Layer>
                    <div>
                        <Background src={map} mapHeight={mapHeight} mapWidth={mapWidth} />
                    </div>

                    {grid &&
                        <>
                            <HorizontalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} />
                            <VerticalLines gridColor={gridColor} width={mapWidth} height={mapHeight} gridSize={gridSize} />
                        </>
                    }

                    {items.map((item) => (
                        <Circle
                            key={item.id}
                            name={item.id}
                            draggable
                            x={item.x}
                            y={item.y}
                            fill={item.color}
                            shadowColor='black'
                            shadowBlur={10}
                            shadowOpacity={0.7}
                            radius={gridSize / 2}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onContextMenu={handleContextMenu}
                            onTouchEnd={touchContextMenu}
                        />
                    ))}

                    { D4 && <Dice number={4} x={window.innerWidth - 100} y={20} width={50} text={'D4'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D6 && <Dice number={6} x={window.innerWidth - 100} y={90} width={50} text={'D6'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D8 && <Dice number={8} x={window.innerWidth - 100} y={160} width={50} text={'D8'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D10 && <Dice number={10} x={window.innerWidth - 100} y={230} width={50} text={'D10'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D12 && <Dice number={12} x={window.innerWidth - 100} y={300} width={50} text={'D12'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D20 && <Dice number={20} x={window.innerWidth - 100} y={370} width={50} text={'D20'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }
                    { D100 && <Dice number={100} x={window.innerWidth - 100} y={440} width={50} text={'D100'} 
                    diceColor={diceColor} diceColorFace={diceColorFace} diceNumberColor={diceNumberColor} /> }

                </Layer>
            </Stage>
        </div>

    )
}

export default Map
