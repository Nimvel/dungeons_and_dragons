import { FC } from 'react'

//@ts-ignore
import s from './Pictures.module.scss'

type PictureProps = {
    picture: string
    id: number

    setNewMap: (picture: string) => void
    deletePicture: (id: number) => void
}

const Picture: FC<PictureProps> = ({ picture, id, setNewMap, deletePicture }) => {
    const onPictureClick = () => {
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