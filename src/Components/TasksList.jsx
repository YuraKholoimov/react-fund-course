import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, removeTask }) => {

  if (tasks.length === 0) {
    return (
    <h1 style={{color: 'green'}}>The tasks end</h1>
    )
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <Task 
            number={task.id} 
            task={task} 
            key={index} 
            removeTask={removeTask}/>
      ))
      }
    </div>
  );
};
export default TasksList;
