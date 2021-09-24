import React from "react";
import styles from "./Item.module.css";
import MessageContext from '../../contexts/MessageContext';
import Modal from '../Modal/Modal';

class Item extends React.Component {
  static contextType = MessageContext;
    constructor() {
      super();
      this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.showModal();
    }
  
    render() {
      return (
        <div className="item">
          <div className="content">
          <a href='./' className={`${styles.itemText} header`} onClick={this.handleClick}>
            {this.props.children}
          </a>
          <Modal show={this.state.show} 
                handleClose={this.hideModal}
                handleSubmit={this.hideModal}
                handleDelete={this.hideModal}>
            <p>Modal</p>
          </Modal>
        </div>
        </div>
     );
    }
}

export default Item;