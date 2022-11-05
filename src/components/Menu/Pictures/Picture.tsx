import { FC } from 'react'
import { BackgroundItemOnMapType } from '../../../redux/map-reducer'

//@ts-ignore
import s from './Pictures.module.scss'

type PictureProps = {
    picture: string
    id: number

    setNewMap: (picture: string) => void
    deletePicture: (id: number) => void
    updateBackgroundItems: (backgroundItemsOnMap: Array<BackgroundItemOnMapType>) => void
}

const Picture: FC<PictureProps> = ({ picture, id, updateBackgroundItems, setNewMap, deletePicture }) => {
    const onPictureClick = () => {
        updateBackgroundItems([])
        setNewMap(picture)
    }

    const onCrossClick = () => {
        deletePicture(id)
    }

    return <div className={s.picture}>
        <div className={s.holder}>
            <img src={picture} alt={picture} onClick={onPictureClick} />

            <div className='closeModal' onClick={onCrossClick} />
        </div>
    </div>
}

export default Picture