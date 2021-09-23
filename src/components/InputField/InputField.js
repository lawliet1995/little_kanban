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
            curState: 'open',
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('props change?')
        if (nextProps.id) {
            return {
                curId: nextProps.id || null,
                curText: nextProps.text || '',
                curState: nextProps.state || 'open'
            };
        } else {
            return null;
        }        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.context.onAddMessage(this.state.curText, this.state.curState);
    }

    handleTyping = (e) => {
        this.setState({...this.state, curText: e.target.value});
    }

    handleSelect = (e) => {
        this.setState({...this.state, curState: e.target.value});
    }

    render () {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label id={styles.textLabel} style={{display: `${typeof this.props.label !== 'undefined' ? 'block': 'none'}`}}>Add New Task</label>
                    
                    <div className={styles.flexContainer}>
                        <input id={styles.textInput} type="text" 
                            name="task-name" placeholder="write task here" 
                            value={`${this.state.curText}`}
                            onChange={this.handleTyping}>
                        </input>

                        <select id={styles.selectLabel} className="ui dropdown" onChange={this.handleSelect}>
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