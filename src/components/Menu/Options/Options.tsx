import s from './Options.module.scss';

const Options = (props) => {
    return <div className={s.options}>
        <div>
            <div>Circles</div>
            <input onChange={props.onChangeQuantity} className={s.enterNumber} placeholder='Enter quantity of circles' />
            <input onChange={props.onChangeColor} className={s.color} type='color' value={props.color} />
            <button onClick={props.onAddNewCircle}>Add</button>
        </div>

        <div>
            <div>Grid</div>
            <input onChange={props.onChangeSize} className={s.enterNumber} placeholder='Enter size' /><br />
            <button onClick={props.onChangeGridSize}>Update</button><br />
            <input type='radio' onClick={props.onShowGrid} name='grid' />
            <label>On</label><br />
            <input type='radio' onClick={props.onHideGrid} name='grid' />
            <label>Off</label><br />
            <input onChange={props.onChangeGridColor} className={s.color} type='color' value={props.gridColor} />
        </div>

        <div>
            <div>Fullscreen</div>
            <input type='radio' onClick={props.onFullscreen} name='fullscreen' />
            <label>On</label><br />
            <input type='radio' onClick={props.offFullscreen} name='fullscreen' />
            <label>Off</label><br />
        </div>
    </div>
}

export default Options;
