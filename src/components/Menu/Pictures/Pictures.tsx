import { FC } from 'react'
import { PicturesType } from '../../../redux/pictures-reducer'
import Picture from './Picture'

//@ts-ignore
import s from './Pictures.module.scss'

type PicturesProps = {
    pictures: Array<PicturesType>

    saveNewPicture: (picture: Blob | MediaSource) => void
    setNewMap: (map: string) => void
    deletePicture: (id: number) => void
}

const Pictures: FC<PicturesProps> = ({ pictures, saveNewPicture, setNewMap, deletePicture }) => {

    const addNewPicture = (e) => {
        e.target.files.length && saveNewPicture(e.target.files[0])
    }

    const picturesElements = pictures.map(p => <Picture
        picture={p.picture} key={p.id} id={p.id}
        deletePicture={deletePicture}
        setNewMap={setNewMap} />)

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

export default Pictures