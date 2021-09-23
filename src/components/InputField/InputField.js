import React from 'react';
import styles from "./InputField.module.css";

class InputField extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('i am click');
    }

    handleTyping(e) {
        console.log('typing...');
    }

    handleSelect(e) {
        console.log('Select!');
    }

    render (){
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label id={styles.textLabel} style={{display: `${typeof this.props.label !== 'undefined' ? 'block': 'none'}`}}>Add New Task</label>
                    
                    <div className={styles.flexContainer}>
                        <input id={styles.textInput} type="text" 
                            name="task-name" placeholder="write task here"
                            onChange={this.handleTyping}></input>

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