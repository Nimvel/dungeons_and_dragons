import { AppStateType } from './store'

export const getPictures = (state: AppStateType) => {
    return state.pictures.pictures
}