import React from "react";

class KanbanRow extends React.Component {
    render() {
      return (
        <ul>
          {/* {props.items.map(goal => (
            <CourseGoalItem
              key={goal.id}
              id={goal.id}
              onDelete={props.onDeleteItem}
            >
              {goal.text}
            </CourseGoalItem>
          ))} */}
        </ul>
      );
    }
}

export default KanbanRow;