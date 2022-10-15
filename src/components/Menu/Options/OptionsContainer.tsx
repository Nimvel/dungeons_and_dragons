import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { closeMenu, openMenu } from '../../../redux/app-reducer'
import { addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize } from '../../../redux/map-reducer'

import Options from './Options'

// type GenerateItemsType = {
//     items: any[] 
//     quantity: number
//     color: string
// }

const OptionsContainer = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    const [color, setColor] = useState(props.color);
    const [size, setSize] = useState(props.size);
    const [fullScreen, setFullScreen] = useState(false)

    useEffect(() => { setQuantity(props.quantity) }, [props.quantity]);
    useEffect(() => { setColor(props.color) }, [props.color]);
    useEffect(() => { setSize(props.size) }, [props.size]);

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const onChangeColor = (e) => {
        setColor(e.target.value);
    }

    const onChangeSize = (e) => {
        setSize(e.target.value);
    }

    const generateItems = (items: any[], quantity: number, color: string) => {
        const circles = []
        for (let i = 1; i <= quantity; i++) {
            circles.push({
                x: Math.random() * (props.mapWidth - 100) + 50,
                y: Math.random() * (props.mapHeight - 100) + 50,
                id: 'node-' + (items.length + i),
                color: color
            });
        }
        return items.concat(circles)
    }

    const onAddNewCircle = () => {
        props.addNewCircle(quantity, color);
        props.updateItems(generateItems(props.items, quantity, color));
    }

    const onShowGrid = () => {
        props.showGrid();
    }

    const onHideGrid = () => {
        props.hideGrid();
    }

    const onChangeGridColor = (e) => {
        props.changeGridColor(e.target.value);
    }

    const onChangeGridSize = () => {
        props.changeGridSize(size);
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

    const onFullscreen = () => {
        setFullScreen(true)
        openFullscreen()
    }

    const offFullscreen = () => {
        setFullScreen(false)
        closeFullscreen()
    }

    return <Options color={color} quantity={quantity} 
    gridColor={props.gridColor} gridSize={props.gridSize}
    closeMenu={props.closeMenu} openMenu={props.openMenu}
    onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity} 
    onChangeColor={onChangeColor} onChangeSize={onChangeSize} onChangeGridSize={onChangeGridSize}
    onChangeGridColor={onChangeGridColor} onShowGrid={onShowGrid} onHideGrid={onHideGrid}
    onFullscreen={onFullscreen} offFullscreen={offFullscreen} />
}

const mapStateToProps = (state) => {
    return {
        mapWidth: state.mapPage.mapWidth,
        mapHeight: state.mapPage.mapHeight,
        isMenuActive: state.app.isMenuActive,
        color: state.mapPage.color,
        gridColor: state.mapPage.gridColor,
        gridSize: state.mapPage.gridSize,
        quantity: state.mapPage.quantity,
        items: state.mapPage.items
    }
}

export default connect(mapStateToProps, 
    { closeMenu, openMenu, addNewCircle, updateItems, showGrid, hideGrid, changeGridColor, changeGridSize }
    )(OptionsContainer);