import React from "react";

import Button from "./UI/Buttons";

import style from "../css/buttons.module.css";
import { useHistory } from "react-router";


const Task = ({ task, number, removeTask }) => {

  const router = useHistory()

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
          <Button className={`${style.btn} ${style.send}`} 
              onClick={() => router.push(`/tasks/${task.id}`)}>Open
          </Button> 
        </div>
        <div>
          <Button onClick={() => removeTask(task)} className={style.btn + " " + style.delete}>Delete</Button>
        </div>
      </div>
    </div>
  );
};
export default Task;
