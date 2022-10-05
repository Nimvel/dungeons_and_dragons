import s from './Options.module.scss';

const Options = (props) => {
    return <div className={s.options}>
        <div className={s.circles}>
            <input onChange={props.onChangeQuantity} className={s.quantity} value={props.quantity} />
            <input onChange={props.onChangeColor} className={s.color} type='color' value={props.color} />
            <button onClick={props.onAddNewCircle}>
                Add
            </button>
        </div>

        <div className={s.grid}>
            <div>Grid</div>
            <input type='radio' onClick={props.onShowGrid} name='grid' />
            <label>On</label>
            <input type='radio' onClick={props.onHideGrid} name='grid' />
            <label>Off</label>
            <input onChange={props.onChangeGridColor} className={s.color} type='color' value={props.gridColor} />
        </div>
    </div>
}

export default Options;
