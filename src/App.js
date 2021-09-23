import React from 'react';
import styles from "./App.module.css";
import KanbanRow from './components/KanbanRow/KanbanRow';
import EditModal from './components/EditModal/EditModal';
import InputField from './components/InputField/InputField';
import {MessageStore} from './contexts/MessageContext';
import MessageContext from './contexts/MessageContext';

class App extends React.Component {

  render() {
    return (
      <MessageStore>
        <div className="ui container">
          <div className = {styles.headerWrapper} >
            <h1 id = {styles.kanbanHeader} >Simple Kanban</h1>
          </div>

          <InputField label="addtext"/>

          <div className="ui divider" ></div>
          <div className={styles.kanban}>
            <MessageContext.Consumer>
              {({selectedMessage, messages}) => {
                return (
                  <React.Fragment>
                    <KanbanRow messages={messages.filter(x => x.status === 'open')} title="Open" color="#F0AD4E"></KanbanRow>
                    <KanbanRow messages={messages.filter(x => x.status === 'doing')} title= "Doing" color="#5CB85C"></KanbanRow>
                    <KanbanRow messages={messages.filter(x => x.status === 'pending')} title= "Pending" color="#00CCFF"></KanbanRow>
                    <KanbanRow messages={messages.filter(x => x.status === 'done')} title= "Done" color="#FE9A76"></KanbanRow>
                    <EditModal selectedMessage={selectedMessage}/>
                  </React.Fragment>                
                );
              }}
            </MessageContext.Consumer>          
          </div>
        </div>

      </MessageStore>

    );
  }
}

export default App;
