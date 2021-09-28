import React from "react";
import TasksForm from "./Components/Form";
import { useFetching } from "./Components/hooks/useFetching";
import { useTasks } from "./Components/hooks/useTasks";
import TasksService from "./Components/Service/API/TasksService";
import TasksFelter from "./Components/TaskFilter";
import TasksList from "./Components/TasksList";
import Button from "./Components/UI/Buttons/Buttons";
import Modal from "./Components/UI/Modal/Modal";
import { getPageCount } from "./Components/utils/page";

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
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const [totalPage, setTotalPage] = React.useState(0)

  function createTask(task) {setTasksArr([...tasksArr, task]); setVisible(false)};
  function removeTask(task) {setTasksArr(tasksArr.filter(taskOfArr => taskOfArr.id !== task.id))}

  const sortBySearchAndSeletTasks = useTasks(tasksArr, filter.sort, filter.query )

  const [fetchTasks, isTasksLoading, tasksError ] = useFetching( async () => {
    const responce = await TasksService.tegAll(limit, page)
    setTasksArr(responce.data)
  
    const totalPageCount = responce.headers['x-total-count']
    setTotalPage(getPageCount(totalPageCount, limit))
  })

  React.useEffect(()=> {
    fetchTasks()
  }, [])

  return (
      <div className="App">
        <Button onClick={fetchTasks}>Fetch axios</Button>
          <Button style={{marginTop: "20px"}}onClick={() => setVisible(true)}>Add post</Button>
          <Modal visible={visible} setVisible={setVisible}>
          <TasksForm createTask={createTask} />
          </Modal>
          <hr style={{margin: '10px'}} />
          <TasksFelter filter={filter} setFilter={setFilter}/>
          {tasksError && <h1>{tasksError}</h1>}
          {isTasksLoading
            ? <h1 style={{marginBottom: '20px' }}>Loading...</h1>
            : <TasksList 
                  tasks={sortBySearchAndSeletTasks} 
                  removeTask={removeTask} />
          }      
      </div>
  );
}

export default App;
