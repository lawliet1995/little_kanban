import './App.css';
import React from 'react';

import KanbanRow from './components/KanbanRow/KanbanRow';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = { 
      done: {title: "Done", items: [
        {id: 1, text: 'walk the dog'},
        {id: 2, text: 'clean the house'},
      ]}, 
      pending: {title: "Pending", items: [        
        {id: 4, text: 'buy the textbook'},
        {id: 5, text: 'buy a new phone'},
        {id: 6, text: 'mission impossible'},
      ]}, 
      doing: {title: "doing", items: [
        {id: 7, text: 'coding something'},
      ]}, 
      open: {title: "open", items: [
        {id: 8, text: 'become a billionare'},
        {id: 9, text: 'buy a tesla'},
      ]}, 
      counter: 10
    };  
  }
  render() {
    return (
      <div class='kanban'>
        <KanbanRow data={this.state.open}></KanbanRow>
        <KanbanRow data={this.state.doing}></KanbanRow>
        <KanbanRow data={this.state.pending}></KanbanRow>
        <KanbanRow data={this.state.done}></KanbanRow>
      </div>
    );
  }
}

export default App;
