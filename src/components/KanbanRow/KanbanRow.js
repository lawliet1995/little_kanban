import React from "react";
import './KanbanRow.css';
import Item from '../Item/Item';

class KanbanRow extends React.Component {
  render() {
    return (
      <div class = 'row'>
        <h1>{this.props.data.title}</h1>
          <div>
            {this.props.data.items.map(item => (
              <Item
                key={item.id}
                id={item.id}
              >
                {item.text}
              </Item>
            ))}
          </div>
      </div>
     
    );
  }
}

export default KanbanRow;