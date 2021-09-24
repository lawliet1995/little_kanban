import React from "react";
import styles from "./Modal.module.css";
import MessageContext from '../../contexts/MessageContext';

class Modal extends React.Component {
  static contextType = MessageContext;

    constructor(props) {
      super(props);
      this.state = {
        id: props.id,
        status: props.status,
        text: props.text,
        isInputValid: true
      };
    }

    handleTyping = (e) => {
      this.setState({...this.state, text: e.target.value, isInputValid: true});
    }

    handleSelect = (e) => {
        this.setState({...this.state, status: e.target.value});
    }

    handleSave = () => {
      if (this.state.text.length === 0) {
        this.setState({...this.state, isInputValid: false});
      } else {
        this.context.onUpdateMessage(this.state.id, this.state.text, this.state.status);
        this.props.handleClose();
      }
    }

    handleDelete = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.context.onDeleteMessage(this.state.id);
      this.props.handleClose();
    }
 
    render() {
        return (
            <div className={`${this.props.show ? styles['display-block'] : styles['display-none']} ${styles['modal']}`}>
              <div className={styles['modal-main']}>
                <div className={styles['content']}>
                    <form className="ui form" style={{width:'100%'}}>
                        <div className="field">
                            <div className={styles.flexContainer}>
                                <input type="text" 
                                    name="task-name" placeholder="write task here" 
                                    value={`${this.state.text}`}
                                    onChange={this.handleTyping}
                                    className = {`${this.state.isInputValid ? '' : styles.invalidInput}  ${styles.textInput}`}
                                    >
                                </input>

                                <select className={`ui dropdown ${styles.selectLabel}`}
                                    value = {`${this.state.status}`}
                                    onChange={this.handleSelect}>
                                  <option value="open">open</option>
                                  <option value="doing">doing</option>
                                  <option value="pending">pending</option>
                                  <option value="done">done</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles['buttonField']}>
                  
                  <div>
                    <div className="ui left floated red deny button" onClick={this.handleDelete}>
                      Delete task
                    </div>
                    <div className="ui grey deny button" onClick={this.props.handleClose}>
                      Cancel
                    </div>
                    <div className="ui positive right button" onClick={this.handleSave}>
                      Save task
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }

}

export default Modal;
