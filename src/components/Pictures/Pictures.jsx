import Picture from './Picture';
import s from './Pictures.module.scss';

const Pictures = (props) => {
    const addNewPicture = (e) => {
        if (e.target.files.length) {
            props.saveNewPicture(e.target.files[0]);
        }
    }

    let picturesElements = props.pictures.map(p => <Picture picture={p.picture} key={p.id} />)

    return <div className={s.pictures}>
            <div className={s.block}>
                <label>
                    <input onChange={addNewPicture}
                        type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />
                    <span>Send picture</span>
                </label>
            </div>
            {picturesElements}
            {/* <img src={props.img} alt='game map' /> */}
    </div>
}

export default Pictures;