import React from 'react';
import styles from "./App.module.css";
import KanbanRow from './components/KanbanRow/KanbanRow';
import EditModal from "./components/EditModal/EditModal";

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = { 
      done: {title: "Done", color: "#FE9A76", items: [
        {id: 1, text: 'walk the dog'},
        {id: 2, text: 'clean the house'},
      ]}, 
      pending: {title: "Pending", color: "#00CCFF", items: [        
        {id: 4, text: 'buy the textbook'},
        {id: 5, text: 'buy a new phone'},
        {id: 6, text: 'mission impossible'},
      ]}, 
      doing: {title: "doing", color: "#5CB85C", items: [
        {id: 7, text: 'coding something'},
      ]}, 
      open: {title: "open", color: "#F0AD4E", items: [
        {id: 8, text: 'become a billionare'},
        {id: 9, text: 'buy a tesla'},
      ]}, 
      counter: 10
    };  
  }
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <div className = {styles.headerWrapper} >
            <h1 id = {styles.kanbanHeader} >Simple Kanban</h1>
          </div>

          <form className="ui form">
            <div className="field">
              <label id={styles.textLabel} >Add New Task</label>
              <input id={styles.textInput} type="text" name="task-name" placeholder="write task here"></input>

              <select id={styles.selectLabel} className="ui dropdown">
                <option value="open">open</option>
                <option value="doing">doing</option>
                <option value="pending">pending</option>
                <option value="done">done</option>
              </select>

              <button className="ui primary button" style={{display: 'inline-block',}} >Submit</button>

            </div>
          </form>

          <div className="ui divider" ></div>
          <div className={styles.kanban}>
              <KanbanRow data={this.state.open}></KanbanRow>
              <KanbanRow data={this.state.doing}></KanbanRow>
              <KanbanRow data={this.state.pending}></KanbanRow>
              <KanbanRow data={this.state.done}></KanbanRow>
          </div>
        </div>

        <EditModal />
      </React.Fragment>

    );
  }
}

export default App;
