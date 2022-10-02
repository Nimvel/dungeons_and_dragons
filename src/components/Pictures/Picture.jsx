import s from './Pictures.module.scss';

const Picture = (props) => {
    const onPictureClick = () => {
        props.setNewMap(props.picture)
    }

    return <div className={s.picture}>
            <img src={props.picture} alt={props.picture} onClick={onPictureClick} />
    </div>
}

export default Picture;