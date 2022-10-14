import { Canvas } from 'konva/lib/Canvas'
import * as React from 'react'
import { Image } from 'react-konva'
import { threadId } from 'worker_threads'

type BackgroundType = {
    image: null | string
    imageNode: null | string
    src: string
    width: number
    height: number
}

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
                x={0}
                y={0}
                width={this.props.width}
                height={this.props.height}
                // height={window.innerHeight}
                image={this.state.image}
                // ref={(node) => {
                //     console.log(this.state.imageNode)
                //     this.state.imageNode = node;
                // }}
            />
        );
    }
}

export default Background

// interface BackgroundType {
//     image?: any
//     imageNode?: any
//     src: string
// }

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