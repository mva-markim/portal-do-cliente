import React, { Component } from 'react'

export default class Modal extends Component {

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
        this.props.onClose();
    }

    onDialogClick(event) {
        event.stopPropagation();
    }

    render() {
        return (
            <div class="overlay center-middle">
                <div class="modal scale-in-center">
                    <div class="modal-header">
                        {title}

                        <button class="btn btn-close-modal">
                            <img src="/assets/img/icons/svg/times-solid.svg" alt="Icone para fechar o modal" />
                        </button>
                    </div>

                    <div class="modal-body">{props.children}</div>
                </div>
            </div>
        )
    }
}