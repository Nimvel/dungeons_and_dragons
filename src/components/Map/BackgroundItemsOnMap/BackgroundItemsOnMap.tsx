// import * as React from 'react'
// import { Image } from 'react-konva'

// type BackgroundItemsOnMapProps = {
//     src: string
//     x: number
//     y: number
//     key: string
// }

// class BackgroundItemsOnMap extends React.Component<BackgroundItemsOnMapProps> {
//     state = {
//         image: null,
//         imageNode: null,
//         width: null,
//         height: null
//     };

//     componentDidMount() {
//         this.loadImage()
//     }

//     componentDidUpdate(oldProps) {
//         if (oldProps.src !== this.props.src) {
//             this.loadImage()
//         }
//     }

//     componentWillUnmount() {
//         this.state.image.removeEventListener('load', this.handleLoad)
//     }

//     loadImage() {
//         this.state.image = new window.Image()
//         this.state.image.src = this.props.src
//         this.state.image.addEventListener('load', this.handleLoad)
//     }

//     handleLoad = () => {
//         this.setState({
//             image: this.state.image,
//         })
//     }

//     onMouseWheel = () => {
//     }

//     render() {
//         return (
//             <Image
//                 x={0}
//                 y={0}
//                 resizeMode={'contain'}
//                 image={this.state.image}
//             />
//         )
//     }
// }

// export default BackgroundItemsOnMap