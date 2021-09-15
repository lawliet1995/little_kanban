import React from "react";
import "./Item.css";

class Item extends React.Component {
    render() {
      return (
      <div class='item'>
        {this.props.children}
      </div>);
    }
}

export default Item;