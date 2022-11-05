import { FC } from 'react'
import { PicturesType } from '../../../redux/pictures-reducer'
import Picture from './Picture'

//@ts-ignore
import s from './Pictures.module.scss'
//@ts-ignore
import style from '../Menu.module.scss'
import { BackgroundItemOnMapType } from '../../../redux/map-reducer'
import AddPictureButton from '../../AddPictureButton/AddPictureButton'

type PicturesProps = {
    pictures: Array<PicturesType>

    saveNewPicture: (picture: Blob | MediaSource) => void
    setNewMap: (map: string) => void
    deletePicture: (id: number) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const Pictures: FC<PicturesProps> = ({ pictures, saveNewPicture, 
    setNewMap, deletePicture, updateBackgroundItems }) => {

    const addNewPicture = (e: any) => {
        e.target.files.length && saveNewPicture(e.target.files[0])
    }

    const picturesElements = pictures.map(p => <Picture
        picture={p.picture} key={p.id} id={p.id} setNewMap={setNewMap}
        deletePicture={deletePicture} updateBackgroundItems={updateBackgroundItems} />)

    return <div className={style.options}>
        <AddPictureButton addPicture={addNewPicture} />

        <div className={s.pictures}>
        {picturesElements}
        </div>
    </div>
}

export default Pictures