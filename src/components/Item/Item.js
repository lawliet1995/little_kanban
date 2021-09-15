import React from "react";
import "./Item.css";

class Item extends React.Component {
    render() {
      return (
        <div className="item">
          <div className="content">
          <a href='./' className="header">{this.props.children}</a>
        </div>
        </div>
     );
    }
}

export default Item;