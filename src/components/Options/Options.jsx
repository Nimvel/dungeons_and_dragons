import s from './Options.module.scss';

const Options = (props) => {
    return <div className={s.options}>
        <div className={s.circles}>
            <input onChange={props.onChangeQuantity} className={s.quantity} value={props.quantity} />
            <input onChange={props.onChangeColor} className={s.color} type='color' id='color' name='color'
                value={props.color} />
            <button onClick={props.onAddNewCircle}>
                Add
            </button>
        </div>
    </div>
}

export default Options;
