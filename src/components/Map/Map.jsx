import s from './Map.module.scss'

const Map = (props) => {
    return <div className={s.map}>
        <img src={props.map} />
    </div>
}

export default Map;