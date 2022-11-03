import * as React from 'react'
import { Image } from 'react-konva'

type MapBackgroundProps = {
    src: string
    // stageWidth: number
    // stageHeight: number
    mapWidth: number
    mapHeight: number
}

class MapBackground extends React.Component<MapBackgroundProps> {
    state = {
        image: null,
        imageNode: null,
        width: null,
        height: null
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

    onMouseWheel = () => {

    }

    render() {
        // console.log(this.props.stageWidth - this.props.mapWidth)
        // console.log(this.props.stageHeight - this.props.mapHeight)
        // if (this.props.stageWidth - this.props.mapWidth <= this.props.stageHeight - this.props.mapHeight) {
        //     this.state.width = this.props.stageWidth
        //     this.state.height = this.props.mapHeight + (this.props.stageWidth - this.props.mapWidth)
        // } else {
        //     this.state.width = this.props.mapWidth + (this.props.stageHeight - this.props.mapHeight)
        //     this.state.height = this.props.stageHeight
        // }

        return (
            <Image
                x={0}
                y={0}
                // width={this.props.stageWidth}
                // height={this.props.stageHeight}
                resizeMode={'contain'}
                // this.props.height this.clientHeight
                // this.props.width this.clientWidth
                image={this.state.image}
            // ref={(node) => {
            //     console.log(this.state.imageNode)
            //     this.state.imageNode = node;
            // }}
            />
        );
    }
}

// const img1 = require('../../../assets/pictures/img_1.jpg');

// const Background: React.FC<BackgroundType> = (props: any) => {
//     const [image, setImage]: any = React.useState(img1)
//     // const [imageNode, setImageNode]: any = useState(null)

//     React.useEffect(() => { loadImage() }, []);
//     React.useEffect(() => { loadImage() }, [props.src]);
//     React.useEffect(() => { image.removeEventListener('load', handleLoad) }, []);

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

export default MapBackground