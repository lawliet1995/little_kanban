import React from 'react';
import styles from "./InputField.module.css";
import MessageContext from '../../contexts/MessageContext';
class InputField extends React.Component {
    static contextType = MessageContext;

    constructor(props, context) {
        super(props);
        this.state = {
            curId: null,
            curText: '',
            curStatus: 'open',
            isInputValid: true
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.state.curText.length === 0) {
            this.setState({...this.state, isInputValid: false});
        } else {
            this.context.onAddMessage(this.state.curText, this.state.curStatus);
        }
    }

    handleTyping = (e) => {
        this.setState({...this.state, curText: e.target.value, isInputValid: true});
    }

    handleSelect = (e) => {
        this.setState({...this.state, curStatus: e.target.value});
    }

    render () {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className={styles.textLabel} style={{display: `${typeof this.props.label !== 'undefined' ? 'block': 'none'}`}}>Add New Task</label>
                    
                    <div className={styles.flexContainer}>
                        <input type="text" 
                            name="task-name" placeholder="write task here" 
                            value={`${this.state.curText}`}
                            onChange={this.handleTyping}
                            className = {`${this.state.isInputValid ? '' : styles.invalidInput} ${styles.textInput}`}
                            >
                        </input>

                        <select className={`ui dropdown ${styles.selectLabel}`} onChange={this.handleSelect}>
                            <option value="open">open</option>
                            <option value="doing">doing</option>
                            <option value="pending">pending</option>
                            <option value="done">done</option>
                        </select>

                        <input className="ui primary button" type="submit" value="Submit" 
                            style={{display: `${this.props.showButton === false ? 'none': 'inline-block'}`,}}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default InputField;