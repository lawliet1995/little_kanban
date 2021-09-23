import React from 'react';

const Context = React.createContext('');

export class MessageStore extends React.Component {
  state = {
    selectedMessage: {},
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

  onAddMessage = (text, status) => {
    this.setState({
        ...this.state,
        messages: [...this.state.messages, {
            id: this.state.counter,
            text: text,
            status: status
        }],
        counter: this.state.counter + 1
    });
  };

  onDeleteMessage = (id) => {
    let newMessages = this.state.messages.concat().filter(x => x.id !== id);
    this.setState({
      ...this.state,
      messages: newMessages
    });
  };

  onUpdateMessage = (id, text, status) => {
    let newMessages = this.state.messages.concat().map((x) => {
        if (x.id !== id) {
            return x;
        } else {
            return {
                id: id,
                text: text,
                status: status
            }
        }
    });
    this.setState({
      ...this.state,
      messages: newMessages,
    });
  };

  onSetSelectedMessage = (message) => {
    this.setState({
      ...this.state,
      selectedMessage: message,
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, 
            onAddMessage: this.onAddMessage,
            onDeleteMessage: this.onDeleteMessage,
            onUpdateMessage: this.onUpdateMessage,
            onSetSelectedMessage: this.onSetSelectedMessage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
