import { SHOW_MODAL, HIDE_MODAL } from './action-creators/modal'
import { createStore } from 'redux'

const initialModalState = {
    componentToRender: null,
    title: null
};

function reducer(state = initialModalState, action) {
    const newState = Object.assign({}, state)

    switch (action.type) {

        case SHOW_MODAL:
            newState.componentToRender = action.componentToRender
            newState.title = action.title
            break

        case HIDE_MODAL:
            return initialModalState

        default:
            return state
    }

    return newState
}

const store = createStore(reducer)

export default store