import * as React from 'react'
import { useMemo, useState } from 'react'
import { Layer, Stage, Circle } from 'react-konva'
import Konva from 'konva'
import useContextMenu from '../hooks/useContextMenu'
import HorizontalLines from './Grid/HorizontalLines'
import VerticalLines from './Grid/VerticalLines'
import Background from './Background/Background'

// const generateItems = () => {
//     const items = [];
//     for (let i = 0; i < 10; i++) {
//         items.push({
//             x: Math.random() * 800,
//             y: Math.random() * 800,
//             id: 'node-' + i,
//             color: Konva.Util.getRandomColor(),
//         });
//     }
//     return items;
// }

const Map = ({ items, setItems, ...props }) => {
    const [fullScreen, setFullScreen] = useState(false)
    const [activeCircleId, setActiveCircleId] = useState(null)
    const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })

    // do your calculations for stage properties
    let stageWidth = size.width % 2 !== 0 ? size.width - 1 : size.width;
    let stageHeight = size.height % 2 !== 0 ? size.height - 1 : size.height;

    const { setContextMenu } = useContextMenu()

    React.useEffect(() => {
        const checkSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);

    }, []);

    React.useEffect(() => { }, [props.width, props.height]);

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete',
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
                console.log('setActiveCircleId: ', activeCircleId)
                setContextMenu(contextMenu, [clientX, clientY])
            }
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

    const onDoubleClick = () => {
        setFullScreen(!fullScreen)
        fullScreen ? openFullscreen() : closeFullscreen()
    }

    const elem = document.documentElement;

    const openFullscreen = () => {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
    }

    const closeFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    return (<div onDoubleClick={onDoubleClick} >
        <Stage width={stageWidth} height={stageHeight} onContextMenu={handleContextMenu}>
            <Layer>
                <div>
                    <Background src={props.map} width={stageWidth} height={stageHeight} />
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
                        // onContextmenu={onContextmenu}
                        // onMouseDown={OnCircleClick}
                        onContextMenu={handleContextMenu}
                    />
                ))}
            </Layer>
        </Stage>
    </div>
    )
}

export default Map;