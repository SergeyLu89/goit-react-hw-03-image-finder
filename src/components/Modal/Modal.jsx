import css from './Modal.module.css';
import React from 'react';

export class Modal extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.onKeyboardPress);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    window.removeEventListener('keydown', this.onKeyboardPress);
  }

  onKeyboardPress = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalUrl } = this.props;
    return (
      <div className={css.backdrop} onClick={this.onOverlayClick}>
        <div className={css.modal}>
          <button
            type="button"
            className={css.modalCloseBtn}
            onClick={this.props.closeModal}
          >
            ✖
          </button>
          <img src={modalUrl} alt="Large img" />
        </div>
      </div>
    );
  }
}
