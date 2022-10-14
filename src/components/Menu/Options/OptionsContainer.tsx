import React from 'react'
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
    let [quantity, setQuantity] = React.useState(props.quantity);
    let [color, setColor] = React.useState(props.color);
    let [size, setSize] = React.useState(props.size);

    React.useEffect(() => { setQuantity(props.quantity) }, [props.quantity]);
    React.useEffect(() => { setColor(props.color) }, [props.color]);
    React.useEffect(() => { setSize(props.size) }, [props.size]);

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
                x: Math.random() * (window.innerWidth - 100) + 50,
                y: Math.random() * (window.innerHeight - 100) + 50,
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

    return <Options color={color} quantity={quantity} 
    gridColor={props.gridColor} gridSize={props.gridSize}
    closeMenu={props.closeMenu} openMenu={props.openMenu}
    onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity} 
    onChangeColor={onChangeColor} onChangeSize={onChangeSize} onChangeGridSize={onChangeGridSize}
    onChangeGridColor={onChangeGridColor} onShowGrid={onShowGrid} onHideGrid={onHideGrid} />
}

const mapStateToProps = (state) => {
    return {
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