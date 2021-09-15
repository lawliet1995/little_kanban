import React from "react";
import './KanbanRow.css';
import Item from '../Item/Item';

class KanbanRow extends React.Component {
  render() {
    return (
      <div className = 'row'>
        <div className="ui large header" style={{backgroundColor: this.props.data.color}}>
          {this.props.data.title}
        </div>
        <div className="ui relaxed divided list">
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