import React from "react";
import styles from "./Modal.module.css";


class Modal extends React.Component {
    render() {
        return (
            <div className={`${this.props.show ? styles['display-block'] : styles['display-none']}`}>
              <div className={styles['modal-container']}>
                <div className={styles['modal-main']}>
                    {this.props.children}
                    <button type="button" onClick={this.props.handleClose}>
                    Close
                    </button>
                </div>
              </div>
            </div>
          );
    }

}

export default Modal;
