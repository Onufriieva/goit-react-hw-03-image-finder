import React, {Component} from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };


    handleKeyDown = e => {
      if(e.code === 'Escape') {
        this.props.onClose()
      }       
    };

    closeBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose()
        }
    }


    render() {
        return createPortal(
            <div class="overlay" onClick={this.closeBackdropClick}>
                <div class="modal">
                  <img src="" alt="" />
                </div>
            </div>,
          modalRoot,
        )
    }
};
