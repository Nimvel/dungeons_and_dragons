import Picture from './Picture.tsx';
import s from './Pictures.module.scss';

const Pictures = (props) => {
    const addNewPicture = (e) => {
        if (e.target.files.length) {
            props.saveNewPicture(e.target.files[0]);
        }
    }

    const picturesElements = props.pictures.map(p => <Picture 
        picture={p.picture} key={p.id} id={p.id}
        deletePicture={props.deletePicture}
        setNewMap={props.setNewMap} />)

    return <div className={s.pictures}>
            <div className={s.block}>
                <label>
                    <input onChange={addNewPicture}
                        type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />  {/* multiple */}
                    <span>Add</span>
                </label>
            </div>
            {picturesElements}
    </div>
}

export default Pictures;