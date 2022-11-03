import { FC } from 'react'

//@ts-ignore
import s from '../../Pictures/Pictures.module.scss'

type BackgroundItemProps = {
    backgroundItem: string
    id: number

    deleteBackgroundItem: (id: number) => void
    addNewBackgroundItemOnMap: (backgroundItem: string) => void
}

const BackgroundItem: FC<BackgroundItemProps> = ({ backgroundItem, id, deleteBackgroundItem, addNewBackgroundItemOnMap }) => {
    const onBackgroundItemClick = () => {
        addNewBackgroundItemOnMap(backgroundItem)
    }

    const onCrossClick = () => {
        deleteBackgroundItem(id)
    }

    return <div className={s.picture}>
        <div className={s.holder}>
            <img src={backgroundItem} alt={backgroundItem} onClick={onBackgroundItemClick} />

            <div className={s.closeModal} onClick={onCrossClick} />
        </div>
    </div>
}

export default BackgroundItem