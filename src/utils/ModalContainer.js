import React from 'react'
import { connect } from 'react-redux'

import Modal from '../components/Modal/Modal'

const ModalContainer = (props) => {
    if (!props.componentToRender) return null

    return (<Modal title={props.title}>{props.componentToRender}</Modal>)
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        componentToRender: state.componentToRender
    }
}

export default connect(mapStateToProps)(ModalContainer)
