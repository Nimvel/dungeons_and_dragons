import React from 'react';
import { connect } from 'react-redux';
import { addNewCircle, updateItems } from '../../redux/map-reducer'
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
                id: 'node-' + items.lenght,
                color: color,
            });
        }
        return items.concat(circles);
    }

    const onAddNewCircle = () => {
        props.addNewCircle(quantity, color);
        props.updateItems(generateItems(props.items, quantity, color));
    }

    return <Options color={color} quantity={quantity}
    onAddNewCircle={onAddNewCircle} onChangeQuantity={onChangeQuantity} onChangeColor={onChangeColor} />
}

const mapStateToProps = (state) => {
    return {
        color: state.mapPage.color,
        quantity: state.mapPage.quantity,
        items: state.mapPage.items
    }
}

export default connect(mapStateToProps, { addNewCircle, updateItems })(OptionsContainer);