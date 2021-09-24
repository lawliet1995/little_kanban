import React from "react";
import styles from "./Modal.module.css";

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: props.id,
        status: props.status,
        text: props.text,
      };
    }

    handleTyping = (e) => {
      this.setState({...this.state, text: e.target.value});
    }

    handleSelect = (e) => {
        this.setState({...this.state, status: e.target.value});
    }

    handleSave = (e) => {
      console.log(this.state);
    }
 
    render() {
        return (
            <div className={`${this.props.show ? styles['display-block'] : styles['display-none']} ${styles['modal']}`}>
              <div className={styles['modal-main']}>
                <div className={styles['content']}>
                    
                    
                    <form className="ui form" style={{width:'100%'}} onSubmit={this.handleSubmit}>
                        <div className="field">
                            <div className={styles.flexContainer}>
                                <input id={styles.textInput} type="text" 
                                    name="task-name" placeholder="write task here" 
                                    value={`${this.state.text}`}
                                    onChange={this.handleTyping}>
                                </input>

                                <select id={styles.selectLabel} className="ui dropdown" onChange={this.handleSelect}>
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
                    <div className="ui left floated red deny button">
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
