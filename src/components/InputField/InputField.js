import React from 'react';
import styles from "./InputField.module.css";

class InputField extends React.Component {
    render (){
        return (
            <form className="ui form">
                <div className="field">
                <label id={styles.textLabel} style={{display: `${typeof this.props.label !== 'undefined' ? 'block': 'none'}`}}>Add New Task</label>
                <input id={styles.textInput} type="text" name="task-name" placeholder="write task here"></input>

                <select id={styles.selectLabel} className="ui dropdown">
                    <option value="open">open</option>
                    <option value="doing">doing</option>
                    <option value="pending">pending</option>
                    <option value="done">done</option>
                </select>

                <button className="ui primary button" style={{display: 'inline-block',}} >Submit</button>
                </div>
            </form>
        )
    }
}

export default InputField;