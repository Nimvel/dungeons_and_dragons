import * as React from 'react'
import { useMemo, useState, useEffect } from 'react'
import { Layer, Line, Stage, Image, Circle } from 'react-konva'
import Konva from 'konva'
import useContextMenu from '../hooks/useContextMenu.ts'

const HorizontalLines = ({ gridColor }) => {
    const lines = []
    for (let i = 1; i <= 16; i++) {
        lines.push(i)
    }

    const horizontalLines = lines.map(l => <Line key={l}
        x={30}
        y={l}
        points={[0, l * 50, 700, l * 50]}
        stroke={gridColor}
    />)

    return horizontalLines
}

const VerticalLines = ({ gridColor }) => {
    const lines = []
    for (let i = 1; i <= 14; i++) {
        lines.push(i)
    }

    const verticalLines = lines.map(l => <Line key={l}
        x={l}
        y={30}
        points={[l * 50, 0, l * 50, window.innerWidth]}
        stroke={gridColor} />)

    return verticalLines
}

// interface BackgroundType {
//     image?: any
//     imageNode?: any
//     src: string
// }

type BackgroundType = {
    image: null | string
    imageNode: null | string
    src: string
}

// custom component that will handle loading image from url
// you may add more logic here to handle "loading" state
// or if loading is failed
// VERY IMPORTANT NOTES:
// at first we will set image state to null
// and then we will set it to native image instance when it is loaded

// const Background: React.FC<BackgroundType> = (props: any) => {
//     const [image, setImage]: any = useState(null)
//     // const [imageNode, setImageNode]: any = useState(null)

//     useEffect(() => { loadImage() }, []);
//     useEffect(() => { loadImage() }, [props.src]);
//     useEffect(() => { image.removeEventListener('load', handleLoad) }, []);

//     const loadImage = () => {
//         // save to "this" to remove "load" handler on unmount
//         setImage(new window.Image())
//         image.src = props.src
//         image.addEventListener('load', handleLoad)
//     }

//     const handleLoad = () => {
//         // after setState react-konva will update canvas and redraw the layer
//         // because "image" property is changed
//         setImage(image);
//         // if you keep same image object during source updates
//         // you will have to update layer manually:
//         // this.imageNode.getLayer().batchDraw();
//     }
//         return <Image
//                 x={30}
//                 y={30}
//                 width={700}
//                 height={window.innerHeight}
//                 image={image}
//                 // ref={(node) => {
//                 //     imageNode = node;
//                 // }}
//             />
// }

class Background extends React.Component<BackgroundType> {
    state = {
        image: null,
        imageNode: null
    };

    componentDidMount() {
        this.loadImage()
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage()
        }
    }

    componentWillUnmount() {
        this.state.image.removeEventListener('load', this.handleLoad)
    }

    loadImage() {
        // save to "this" to remove "load" handler on unmount
        this.state.image = new window.Image()
        this.state.image.src = this.props.src
        this.state.image.addEventListener('load', this.handleLoad)
    }

    handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
            image: this.state.image,
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        // this.imageNode.getLayer().batchDraw();
    };

    render() {
        return (
            <Image
                x={30}
                y={30}
                width={700}
                height={window.innerHeight}
                image={this.state.image}
                // ref={(node) => {
                //     console.log(this.state.imageNode)
                //     this.state.imageNode = node;
                // }}
            />
        );
    }
}

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
    let [activeCircleId, setActiveCircleId] = useState(null)
    const { setContextMenu } = useContextMenu()

    // console.log(items)

    const contextMenu = useMemo(() => ([
        {
            name: 'Delete',
            onClick: () => {
                // debugger
                console.log("Items: ", items)
                console.log('activeCircleId: ', activeCircleId)

                // const item = items.find((i) => i.id === activeCircleId)
                // const index = items.indexOf(item)
                // items.splice(index, 1)
                // props.updateItems(items)

                items.splice(items.indexOf(activeCircleId), 1)
                props.updateItems(items)
            }
        },
        // { name: 'Change color', onClick: (activeCircleId:any) => {
        //     // return <input onChange={props.onChangeColor} type='color' value={items[activeCircleId].color} />
        //     // items[activeCircleId].color = 'green'
        // } }
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

    return (
        <Stage width={window.innerWidth} height={window.innerHeight} onContextMenu={handleContextMenu} >
            <Layer>
                <Background src={props.map} />

                {props.grid &&
                    <div>
                        <HorizontalLines gridColor={props.gridColor} />
                        <VerticalLines gridColor={props.gridColor} />
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
                        radius={25}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        // onMouseDown={OnCircleClick}
                        onContextMenu={handleContextMenu}
                    />
                ))}
            </Layer>
        </Stage>

    )
}

export default Map;