import React from "react";
import TasksForm from "./Components/Form";
import { useTasks } from "./Components/hooks/useTasks";
import TaskFilter from "./Components/TaskFilter";
import TasksList from "./Components/TasksList";
import Button from "./Components/UI/Buttons/Buttons";
import Modal from "./Components/UI/Modal/Modal";

import "./css/App.css";

function App() {

  const [tasksArr, setTasksArr] = React.useState([
    { id: "1", title: " Изучение React JS", body: " Повторение пройденного" },
    { id: "2", title: " Изучение React JS", body: " Практика" },
    { id: "3", title: " Изучение React JS", body: " Новый материал" },
    { id: "4", title: " Изучение React JS", body: " Практика" },
    { id: "5", title: " Изучение React JS", body: " Подвидение итогов дня" }
  ]);
  const [filter, setFilter] = React.useState({sort: '', query: ''})
  const [visible, setVisible] = React.useState(false)

  function createTask(task) {
    setTasksArr([...tasksArr, task])
    setVisible(false)
  };
  function removeTask(task) {setTasksArr(tasksArr.filter(taskOfArr => taskOfArr.id !== task.id))}

  const sortBySearchAndSeletTasks = useTasks(tasksArr, filter.sort, filter.query )

  return (
      <div className="App">
          <Button style={{marginTop: "20px"}}onClick={() => setVisible(true)}>Add post</Button>
          <Modal visible={visible} setVisible={setVisible}>
          <TasksForm createTask={createTask} />
          </Modal>
          <hr style={{margin: '10px'}} />
          <TaskFilter 
              setFilter={setFilter} 
              filter={filter}/>
          <TasksList 
              tasks={sortBySearchAndSeletTasks} 
              removeTask={removeTask} />
      </div>
  );
}

export default App;

