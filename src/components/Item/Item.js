import React from "react";
import styles from "./Item.module.css";

class Item extends React.Component {
    render() {
      return (
        <div className="item">
          <div className="content">
          <a href='./' className={`${styles.itemText} header`} >{this.props.children}</a>
        </div>
        </div>
     );
    }
}

export default Item;