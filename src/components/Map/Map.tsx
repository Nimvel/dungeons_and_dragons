import * as React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { Layer, Stage, Circle, Rect, Text } from 'react-konva'
import Konva from 'konva'

// import { AnimateOnChange } from 'react-animation'
// import styled, { css } from 'styled-components'

import useContextMenu from '../hooks/useContextMenu'
import HorizontalLines from './Grid/HorizontalLines'
import VerticalLines from './Grid/VerticalLines'
import Background from './Background/Background'
import { ItemType } from '../../redux/map-reducer'
import { FC } from 'react'
import { KonvaEventObject } from 'konva/lib/Node'
import Dice from './Dice/Dice'

// const Number = styled.div`
//   position: relative;
//   margin-right: 16px;
//   width: auto;

//   &:first-child {
//     flex-shrink: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 60px;
//     height: 60px;
//     background-image: linear-gradient(-26deg, #d9afd9 0%, #97d9e1 100%);
//     clip-path: polygon(0 24%, 49% 0, 100% 24%, 100% 78%, 47% 100%, 0 79%);
//   }
//   &:first-child > span {
//     display: block;
//     font-size: 2em;
//   }
// `;

// const Numbers = styled.div`
//   overflow-y: hidden;
//   overflow-x: auto;
//   white-space: nowrap;
//   ::-webkit-scrollbar {
//     display: none;
//   }
//   /* Hide scrollbar for IE, Edge and Firefox */
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   display: flex;
//   align-items: center;
// `;

type MapProps = {
    map: string
    items: Array<ItemType>
    // activeCircleId: null | string
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

    updateItems: (items: Array<ItemType>) => void
    // updateActiveCircleId: (activeCircleId: string) => void
}

const Map: FC<MapProps> = ({ map, mapWidth, mapHeight, items,
    // activeCircleId,
    D4, D6, D8, D10, D12, D20, D100,
    grid, gridColor, gridSize, updateItems,
    //  updateActiveCircleId
}) => {

    const [activeCircleId, setActiveCircleId] = useState(null)
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    // const [D6X, setD6X] = useState(window.innerWidth - 100)
    // const [D6Y, setD6Y] = useState(50)

    // const [rolls, setRolls] = useState([1, 2, 3, 4, 5, 6])

    useEffect(() => { }, [mapWidth, mapHeight])

    // do your calculations for stage properties
    let stageWidth = size.width % 2 !== 0 ? size.width - 1 : size.width
    let stageHeight = size.height % 2 !== 0 ? size.height - 1 : size.height

    const { setContextMenu } = useContextMenu()

    useEffect(() => {
        const checkSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)
    }, [])

    // console.log('activeCircleId: ', activeCircleId)

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete All',
            onClick: (e) => {
                const id = e.target.name
                setActiveCircleId(id)
                console.log('activeCircleId2: ', activeCircleId)

                const item = items.find((i) => i.id === activeCircleId)
                const index = items.indexOf(item)

                // items.splice(items.indexOf(activeCircleId), 1)
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
                // console.log('setActiveCircleId: ', activeCircleId)
                setContextMenu(contextMenu, [clientX, clientY])
            }
        })
    }

    // const onScaling = (e) => {
    //     e = e || window.event;

    //  // wheelDelta не даёт возможность узнать количество пикселей
    //     let delta = e.deltaY || e.detail || e.wheelDelta;

    //     let info = document.getElementById('canvas');

    //     info.innerHTML = +info.innerHTML + delta;

    //     e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    //     // let obj = document.getElementById('canvas')

    //     // obj.style.transform = obj.style.transform = obj.style.transform = 'scale(1.5)'
    //     console.log('scaling', info)
    // }

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
        // const item = null
        const item = items.find((i) => i.id === id)
        // items.find((i: any) => {
        //     if (i.id === id) {
        //         updateActiveCircleId(id)
        //         // console.log('setActiveCircleId: ', activeCircleId)
        //         setContextMenu(contextMenu, [clientX, clientY])
        //     }
        // })
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

    // const AnimatedNumber = ({ number }) => {
    //     return (
    //       <Number>
    //         <AnimateOnChange
    //           animationIn="fadeInUp"
    //           animationOut="bounceOut"
    //           durationOut={250}
    //         >
    //           <Typography variant="p">{number}</Typography>
    //         </AnimateOnChange>
    //       </Number>
    //     )
    //   }

    return (
        <div id='canvas'>
            <Stage onWheel={onScaling}
                // onTouchStart={TouchStart} onTouchMove={CheckAction}
                width={window.innerWidth} height={window.innerHeight}
                // width={stageWidth} height={stageHeight} 
                onContextMenu={handleContextMenu}>
                <Layer>
                    <div>
                        <Background src={map}
                            // stageWidth={stageWidth} stageHeight={stageHeight} 
                            mapHeight={mapHeight} mapWidth={mapWidth} />
                    </div>

                    {grid &&
                        <>
                            <HorizontalLines gridColor={gridColor} width={stageWidth} height={stageHeight} gridSize={gridSize} />
                            <VerticalLines gridColor={gridColor} width={stageWidth} height={stageHeight} gridSize={gridSize} />
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
                            // opacity={0.9}
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

                    { D4 && <Dice number={4} x={window.innerWidth - 100} y={20} width={50} text={'D4'} /> }
                    { D6 && <Dice number={6} x={window.innerWidth - 100} y={90} width={50} text={'D6'} /> }
                    { D8 && <Dice number={8} x={window.innerWidth - 100} y={160} width={50} text={'D8'} /> }
                    { D10 && <Dice number={10} x={window.innerWidth - 100} y={230} width={50} text={'D10'} /> }
                    { D12 && <Dice number={12} x={window.innerWidth - 100} y={300} width={50} text={'D12'} /> }
                    { D20 && <Dice number={20} x={window.innerWidth - 100} y={370} width={50} text={'D20'} /> }
                    { D100 && <Dice number={100} x={window.innerWidth - 100} y={440} width={50} text={'D100'} /> }

                    {/* <Numbers>
          <AnimatedNumber number={rolls[0]} />
          {rolls.slice(1).map((roll, i) => (
            <Number key={`roll-${i}-${roll}`}>
              <Typography variant="p" component="span">
                {roll}
              </Typography>
            </Number>
          ))}
        </Numbers> */}

                </Layer>
            </Stage>
        </div>

    )
}

export default Map

// Тип "(e: React.ChangeEvent<HTMLInputElement>) => void" не может быть назначен для типа "(evt: KonvaEventObject<DragEvent>) => void".
//   Типы параметров "e" и "evt" несовместимы.
//     В типе "KonvaEventObject<DragEvent>" отсутствуют следующие свойства из типа "ChangeEvent<HTMLInputElement>": nativeEvent, bubbles, cancelable, defaultPrevented и еще 8.