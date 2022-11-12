import { FC } from 'react'

//@ts-ignore
import s from './AddPictureButton.module.scss'

type AddPictureButtonType = {
    addPicture: (e: any) => void
}

const AddPictureButton: FC<AddPictureButtonType> = ({ addPicture }) => {
    return <div className={s.block}>
        <label>
            <input onChange={addPicture}
                type={'file'} accept='.jpg, .jpeg, .tiff, .png, .gif, .bmp, jp2' />  {/* multiple */}
            <span>Add</span>
        </label>
    </div>
}

export default AddPictureButton