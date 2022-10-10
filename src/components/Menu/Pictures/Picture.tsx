import s from './Pictures.module.scss';

const Picture = (props) => {
    const onPictureClick = () => {
        props.setNewMap(props.picture)
    }

    const onCrossClick = () => {
        props.deletePicture(props.id)
    }

    return <div className={s.picture}>
        <div className={s.holder}>
            <img src={props.picture} alt={props.picture} onClick={onPictureClick} />

            <div className={s.closeModal} onClick={onCrossClick} />
        </div>
    </div>
}

export default Picture;