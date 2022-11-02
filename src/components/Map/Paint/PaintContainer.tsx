import { FC } from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/store'

import { getLineMode, getPaintbrushColor, getPensilMode } from '../../../redux/paint-selectors'

import Paint from './Paint'

type MapStateToProps = {
    paintbrushColor: string
    pensilMode: boolean
    lineMode: boolean
}

type MapDispatchToProps = {
}

type PaintContainerProps = MapStateToProps & MapDispatchToProps

const PaintContainer: FC<PaintContainerProps> = ({ paintbrushColor, pensilMode, lineMode }) => {

    return <Paint paintbrushColor={paintbrushColor} pensilMode={pensilMode} lineMode={lineMode} />
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        paintbrushColor: getPaintbrushColor(state),
        pensilMode: getPensilMode(state),
        lineMode: getLineMode(state)
    }
}

export default connect(mapStateToProps, {})(PaintContainer)