import React from 'react';
import styles from "./App.module.css";
import KanbanRow from './components/KanbanRow/KanbanRow';
import EditModal from './components/EditModal/EditModal';
import InputField from './components/InputField/InputField';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = { 
      messages: [
        {id: 1, text: 'walk the dog', status: 'done'},
        {id: 2, text: 'clean the house', status: 'done'},
        {id: 4, text: 'buy the textbook', status: 'pending'},
        {id: 5, text: 'buy a new phone', status: 'pending'},
        {id: 6, text: 'mission impossible', status: 'pending'},
        {id: 7, text: 'coding something', status: 'doing'},
        {id: 8, text: 'become a billionare', status: 'open'},
        {id: 9, text: 'buy a tesla', status: 'open'},
      ], 
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

          <InputField label="addtext"/>

          <div className="ui divider" ></div>
          <div className={styles.kanban}>
              <KanbanRow messages={this.state.messages.filter(x => x.status === 'open')} title="Open" color="#F0AD4E"></KanbanRow>
              <KanbanRow messages={this.state.messages.filter(x => x.status === 'doing')} title= "Doing" color="#5CB85C"></KanbanRow>
              <KanbanRow messages={this.state.messages.filter(x => x.status === 'pending')} title= "Pending" color="#00CCFF"></KanbanRow>
              <KanbanRow messages={this.state.messages.filter(x => x.status === 'done')} title= "Done" color="#FE9A76"></KanbanRow>
          </div>
        </div>

        <EditModal />
      </React.Fragment>

    );
  }
}

export default App;
