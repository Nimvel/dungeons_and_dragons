import Konva from 'konva';
import React from 'react';
import { Layer, Line, Stage, Image, Circle } from 'react-konva';

const HorizontalLines = (props) => {
    const lines = [];
    for (let i = 1; i <= 16; i++) {
        lines.push(i);
    }

    const horizontalLines = lines.map(l => <Line key={l}
        x={30}
        y={l}
        points={[0, l * 50, 700, l * 50]}
        stroke={'white'}
    />)

    return horizontalLines
}

const VerticalLines = (props) => {
    const lines = [];
    for (let i = 1; i <= 14; i++) {
        lines.push(i);
    }

    const verticalLines = lines.map(l =>
        <Line key={l}
            x={l}
            y={30}
            points={[l * 50, 0, l * 50, window.innerWidth]}
            stroke={'white'} />)

    return verticalLines
}

// custom component that will handle loading image from url
// you may add more logic here to handle "loading" state
// or if loading is failed
// VERY IMPORTANT NOTES:
// at first we will set image state to null
// and then we will set it to native image instance when it is loaded

class Background extends React.Component {
    state = {
        image: null,
    };
    componentDidMount() {
        this.loadImage();
    }
    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }
    componentWillUnmount() {
        this.image.removeEventListener('load', this.handleLoad);
    }
    loadImage() {
        // save to "this" to remove "load" handler on unmount
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
            image: this.image,
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
                ref={(node) => {
                    this.imageNode = node;
                }}
            />
        );
    }
}

// export const Drag = () => {
//     ball.onmousedown = function(event) { // (1) отследить нажатие

//         // (2) подготовить к перемещению:
//         // разместить поверх остального содержимого и в абсолютных координатах
//         ball.style.position = 'absolute';
//         ball.style.zIndex = 1000;
//         // переместим в body, чтобы мяч был точно не внутри position:relative
//         document.body.append(ball);
//         // и установим абсолютно спозиционированный мяч под курсор
    
//         moveAt(event.pageX, event.pageY);
    
//         // передвинуть мяч под координаты курсора
//         // и сдвинуть на половину ширины/высоты для центрирования
//         function moveAt(pageX, pageY) {
//           ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//           ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
//         }
    
//         function onMouseMove(event) {
//           moveAt(event.pageX, event.pageY);
//         }
    
//         // (3) перемещать по экрану
//         document.addEventListener('mousemove', onMouseMove);
    
//         // (4) положить мяч, удалить более ненужные обработчики событий
//         ball.onmouseup = function() {
//           document.removeEventListener('mousemove', onMouseMove);
//           ball.onmouseup = null;
//         };
    
//       };
// }

// tension={1}

// class ColoredRect extends React.Component {
//     // state = {
//     //     color: 'green'
//     // };

//     // handleClick = () => {
//     //     this.setState({
//     //         color: Konva.Util.getRandomColor()
//     //     });
//     // };

//     render() {
//         return (
//             <Rect
//                 x={0}
//                 y={0}
//                 width={500}
//                 height={500}
//                 // width={this.props.map.width}
//                 // height={this.props.map.height}
//                 // fill={this.state.color}
//                 shadowBlur={5}
//                 // onClick={this.handleClick}
//             />
//         );
//     }
// }

const generateItems = () => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({
        x: Math.random() * 800,
        y: Math.random() * 800,
        id: 'node-' + i,
        color: Konva.Util.getRandomColor(),
      });
    }
    return items;
  }

  const Map = (props) => {
      let [startItems, setItems] = React.useState(generateItems());

    const handleDragStart = (e) => {
      const id = e.target.name();
      const items = startItems.slice();
      const item = items.find((i) => i.id === id);
      const index = items.indexOf(item);
      // remove from the list:
      items.splice(index, 1);
      // add to the top
      items.push(item);
      setItems(items);
    };

    const handleDragEnd = (e) => {
      const id = e.target.name();
      const items = startItems.slice();
      const item = startItems.find((i) => i.id === id);
      const index = startItems.indexOf(item);
      // update item position
      items[index] = {
        ...item,
        x: e.target.x(),
        y: e.target.y(),
      };
      setItems(items);
    };

    return <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer>
            <Background src={props.map} />
            <HorizontalLines />
            <VerticalLines />

            {startItems.map((item) => (
            <Circle
              key={item.id}
              name={item.id}
              draggable
              x={item.x}
              y={item.y}
              fill={item.color}
              radius={25}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}

        </Layer>
    </Stage>
}

export default Map;