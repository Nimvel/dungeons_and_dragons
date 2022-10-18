import * as React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { Layer, Stage, Circle } from 'react-konva'
import Konva from 'konva'
import useContextMenu from '../hooks/useContextMenu'
import HorizontalLines from './Grid/HorizontalLines'
import VerticalLines from './Grid/VerticalLines'
import Background from './Background/Background'

const Map = ({ items, setItems, ...props }) => {
    const [activeCircleId, setActiveCircleId] = useState(null)
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

    useEffect(() => { }, [props.mapWidth, props.mapHeight])

    // do your calculations for stage properties
    let stageWidth = size.width % 2 !== 0 ? size.width - 1 : size.width;
    let stageHeight = size.height % 2 !== 0 ? size.height - 1 : size.height;

    const { setContextMenu } = useContextMenu()

    useEffect(() => {
        const checkSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);

    }, []);

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete All',
            onClick: () => {
                // console.log("Items: ", items)
                // console.log('activeCircleId: ', activeCircleId)

                // const item = items.find((i) => i.id === activeCircleId)
                // const index = items.indexOf(item)
                // items.splice(index, 1)
                // props.updateItems(items)

                items.splice(items.indexOf(activeCircleId), 1)
                props.updateItems(items)
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
        const clientX = Touch.clientX
        const clientY = Touch.clientY
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

    const elem = document.documentElement;
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
        } else { // IE8-
            canvas.attachEvent("onmousewheel", handler)
        }
      }
  
      let scale = 1
  
      const onScaling = () => {
        addOnWheel(elem, function(e: any) {
  
            let delta = e.deltaY || e.detail || e.wheelDelta
      
            // отмасштабируем при помощи CSS
            if (delta > 0) scale += 0.05
            else {if (scale > 1) scale -= 0.05}
      
            canvas.style.transform = canvas.style.WebkitTransform = canvas.style.MsTransform = `scale(${scale})`
      
            // отменим прокрутку
            e.preventDefault()
          })
      }
      

    const handleDragStart = (e: any) => {
        const id = e.target.name()
        const item = items.find((i) => i.id === id)
        const index = items.indexOf(item)
        // remove from the list:
        items.splice(index, 1)
        // add to the top
        console.log(items)
        items.push(item)
        props.updateItems(items)

        e.target.setAttrs({
            shadowOffset: {
                x: 15,
                y: 15
            },
            scaleX: 1.1,
            scaleY: 1.1
        })
    }

    const handleDragEnd = (e: any) => {
        const id = e.target.name()
        const item = items.find((i) => i.id === id)
        const index = items.indexOf(item)
        // update item position
        items[index] = {
            ...item,
            x: e.target.x(),
            y: e.target.y(),
        }
        props.updateItems(items)

        e.target.to({
            duration: 0.5,
            easing: Konva.Easings.ElasticEaseOut,
            scaleX: 1,
            scaleY: 1,
            shadowOffsetX: 5,
            shadowOffsetY: 5
        })
    }

    // const [touchStart, setTouchStart] = useState(null) //Точка начала касания
    // const [touchPosition, setTouchPosition] = useState(null) //Текущая позиция

    // const sensitivity = 15 //Чувствительность — количество пикселей, после которого жест будет считаться свайпом

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
            width={props.mapWidth} height={props.mapHeight} 
            // width={stageWidth} height={stageHeight} 
            onContextMenu={handleContextMenu}>
                <Layer>
                    <div>
                        <Background src={props.map} stageWidth={stageWidth} stageHeight={stageHeight} mapHeight={props.mapHeight} mapWidth={props.mapWidth} />
                    </div>

                    {props.grid &&
                        <div>
                            <HorizontalLines gridColor={props.gridColor} width={stageWidth} height={stageHeight} gridSize={props.gridSize} />
                            <VerticalLines gridColor={props.gridColor} width={stageWidth} height={stageHeight} gridSize={props.gridSize} />
                        </div>
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
                            radius={props.gridSize / 2}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                            onContextMenu={handleContextMenu}
                            onTouchEnd={touchContextMenu}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default Map;