import React from 'react';
import { connect } from 'react-redux';
import { addNewCircle, updateItems, showGrid, hideGrid, changeGridColor } from '../../redux/map-reducer.ts'
import Options from './Options';

const OptionsContainer = (props) => {
    let [quantity, setQuantity] = React.useState(props.quantity);
    let [color, setColor] = React.useState(props.color);

    React.useEffect(() => { setColor(props.color) }, [props.color]);
    React.useEffect(() => { setQuantity(props.quantity) }, [props.quantity]);

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const onChangeColor = (e) => {
        setColor(e.target.value);
    }

    const generateItems = (items, quantity, color) => {
        const circles = [];
        for (let i = 1; i <= quantity; i++) {
            circles.push({
                x: Math.random() * 650 + 50,
                y: Math.random() * 750 + 50,
                id: 'node-' + (items.length + i),
                color: color
            });
        }
        return items.concat(circles);
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

    return <Options color={color} quantity={quantity} gridColor={props.gridColor}
    onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity} onChangeColor={onChangeColor} 
    onChangeGridColor={onChangeGridColor} onShowGrid={onShowGrid} onHideGrid={onHideGrid} />
}

const mapStateToProps = (state) => {
    return {
        color: state.mapPage.color,
        gridColor: state.mapPage.gridColor,
        quantity: state.mapPage.quantity,
        items: state.mapPage.items
    }
}

export default connect(mapStateToProps, { addNewCircle, updateItems, showGrid, hideGrid, changeGridColor })(OptionsContainer);