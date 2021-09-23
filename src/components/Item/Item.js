import React from "react";
import styles from "./Item.module.css";
import MessageContext from '../../contexts/MessageContext';

class Item extends React.Component {
  static contextType = MessageContext;

    handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.context.onSetSelectedMessage(this.props.data);
      
      window.$('.ui.modal').modal('show');
    }
  
    render() {
      return (
        <div className="item">
          <div className="content">
          <a href='./' className={`${styles.itemText} header`} onClick={this.handleClick}>
            {this.props.children}
          </a>
        </div>
        </div>
     );
    }
}

export default Item;