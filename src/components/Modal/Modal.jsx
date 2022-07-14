import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = { title: '' };

  handleChange = event => {
    this.setState({ title: event.currentTarget.value });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { onUpdateMaterial, onClose, id } = this.props;

    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <label>
            Enter new title
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>

          <button
            type="button"
            onClick={() => {
              onUpdateMaterial({ id, title: this.state.title });
              onClose();
            }}
          >
            Update
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}
