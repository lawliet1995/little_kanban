import React from "react";
import styles from './KanbanRow.module.css';
import Item from '../Item/Item';

class KanbanRow extends React.Component {
  render() {
    return (
      <div className = {styles.row}>
        <div className={`${styles.header} ui large header`} style={{backgroundColor: this.props.color}}>
          {this.props.title}
        </div>
        <div className="ui relaxed divided list">
          {this.props.messages.map(item => (
            <Item
              key={item.id}
              id={item.id}
              status={item.status}
              text={item.text}
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