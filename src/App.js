import './App.css';
import React from 'react';

import KanbanRow from './components/KanbanRow/KanbanRow';

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
          <form className="ui form">
            <div className="field">
              <label>Add New Task</label>
              <input type="text" name="task-name" placeholder="write task here" style = {{
                    display: 'inline',
                    width: 'calc(100% - 350px)',
              }}></input>

              <select className="ui dropdown" style = {{
                display: 'inline-block',
                width: '140px',
                minWidth: '140px',
                margin: '0px 8px'
              }}>
                <option value="open">open</option>
                <option value="doing">doing</option>
                <option value="pending">pending</option>
                <option value="done">done</option>
              </select>

              <button className="ui primary button" style={{display: 'inline-block',}} >Submit</button>

            </div>
          </form>

          <div className="ui divider" ></div>
          <div className="kanban">
              <KanbanRow data={this.state.open}></KanbanRow>
              <KanbanRow data={this.state.doing}></KanbanRow>
              <KanbanRow data={this.state.pending}></KanbanRow>
              <KanbanRow data={this.state.done}></KanbanRow>
          </div>
        </div>    

        <div className="ui modal">
          <i className="close icon"></i>
          <div className="header">
            Profile Picture
          </div>
          <div className="image content">
            <div className="ui medium image">
              <img alt="" src="/images/avatar/large/chris.jpg" />
            </div>
            <div className="description">
              <div className="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank"  rel="noreferrer">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className="actions">
            <div className="ui black deny button">
              Nope
            </div>
            <div className="ui positive right labeled icon button">
              Yep, that's me
              <i className="checkmark icon"></i>
            </div>
          </div>
        </div>

        {/* $('.ui.modal')
          .modal('show')
        ; */}

        {/* https://semantic-ui.com/modules/modal.html */}
      </React.Fragment>

    );
  }
}

export default App;
