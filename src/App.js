import './App.css';
import React from 'react';

import KanbanRow from './components/KanbanRow';
class App extends React.Component {
  constructor (props){
    super(props);
    this.state = { 
      done: {text: "Done", items: []}, 
      pending: {text: "Pending", items: []}, 
      doing: {text: "doing", items: []}, 
      open: {text: "open", items: []}, 
    };  
  }
  render() {
    return <KanbanRow></KanbanRow>;
  }
}

export default App;
