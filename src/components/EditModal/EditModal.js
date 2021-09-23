import React from "react";
import InputField from "../InputField/InputField";

class EditModal extends React.Component {
    render() {
      // console.log('render modal', this.props.selectedMessage);
      return (        
        <div className="ui modal">
          {/* <i className="close icon"></i> */}
          <div className="header">
            Edit task
          </div>
          <div className="image content">
            {/* <div className="ui medium image">
              <img alt="" src="/images/avatar/large/chris.jpg" />
            </div> */}
            <div className="description">
              {/* <div className="ui header">We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank"  rel="noreferrer">gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p> */}
              {/* <form className="ui form">
                <div className="field">
                  <input type="text" name="task-name" placeholder="write task here"></input>
                  <br />
                  <select  className="ui dropdown">
                    <option value="open">open</option>
                    <option value="doing">doing</option>
                    <option value="pending">pending</option>
                    <option value="done">done</option>
                  </select>
                </div>
              </form> */}
              <InputField showButton={false} 
                id={this.props.selectedMessage.id}
                text={this.props.selectedMessage.text}
                status={this.props.selectedMessage.status}
                ></InputField>
            </div>
          </div>
          <div className="actions">
            <div className="ui left floated red deny button">
              Delete task
            </div>
            <div className="ui grey deny button">
              Cancel
            </div>
            <div className="ui positive right button">
              Save task
            </div>
          </div>
        </div>

        /* $('.ui.modal').modal('show'); */

        /* https://semantic-ui.com/modules/modal.html */
      );
    }
}

export default EditModal;