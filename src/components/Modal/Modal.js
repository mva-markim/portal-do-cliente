import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../../store/action-creators/modal';

const closeIcon = require('../../assets/img/icons/svg/times-solid.svg')

class Modal extends Component {

    constructor(props) {        
        super(props);
    }

    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    componentWillUnmount() {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
        }
    }

    onOverlayClick() {
        this.props.hideModal()
    }

    onDialogClick(event) {
        event.stopPropagation();
    }

    render() {
        const { title } = this.props
        return (
            <div className="overlay center-middle" onClick={() => this.onOverlayClick()} tabindex="0">
                <div className="modal modal-lg scale-in-center" onClick={event => this.onDialogClick(event)}>
                    <div className="modal-header">
                        {title}

                        <button className="btn btn-close-modal" onClick={() => this.onOverlayClick()}>
                            <img src={closeIcon} alt="Icone para fechar o modal" />
                        </button>
                    </div>

                    <div className="modal-body">{this.props.children}</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(Modal)
