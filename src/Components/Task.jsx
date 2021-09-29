import React from "react";

import Button from "./UI/Buttons/Buttons";

import style from "../css/buttons.module.css";

const Task = ({ task, number, removeTask }) => {
  return (
    <div className={style.container}>
      <h3>
        <span className={style.pageNumber}>
          {number}
        </span>
        {task.title}
      </h3>
      <div>
        {task.body}
      </div>
      <div className={style.taskBtn}>
        <div >
          <Button className={style.btn + " " + style.send}>Send</Button>
        </div>
        <div>
          <Button onClick={() => removeTask(task)} className={style.btn + " " + style.delete}>Delete</Button>
        </div>
      </div>
      
      
    </div>
  );
};
export default Task;
