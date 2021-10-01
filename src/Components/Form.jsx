import React from 'react'
import Button from './UI/Buttons';
import Input from './UI/Input';
import style from '../css/buttons.module.css'

const TasksForm = ({createTask}) => {

    const [task, setTask] = React.useState({ title: " ", body: " " });

  const addNewTask = (e) => {
    e.preventDefault();

    const newTask = {
        ...task, id: Date.now()
    }
    createTask(newTask)
    setTask({ title: " ", body: " " });
  };

    return(
        <form>
        <Input 
          type="text" 
          placeholder="Post name"
          onChange={(e) => setTask({...task, title: e.target.value})}
          value={task.title} 
        />
        <Input 
          type="text" 
          placeholder="Post body" 
          value={task.body}
          onChange={e => setTask({...task, body: e.target.value})}
        />
        <Button onClick={addNewTask} className={style.main}>Add post</Button>
      </form>
    )
}

export default TasksForm;