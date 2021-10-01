import React from "react";
import TasksList from "../../Components/TasksList";
import TasksService from "../../Components/Service/API/TasksService";
import TasksFelter from "../../Components/TaskFilter";

import { getPageCount, getPagesArray } from "../../Components/utils/page";
import { useFetching } from "../hooks/useFetching";
import { useTasks } from "./../hooks/useTasks";
import TasksForm from "../Form";
import Pagination from "../UI/Pagination";
import Button from "../UI/Buttons";
import Modal from "../UI/Modal";

function Tasks() {

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
    }
  )

  React.useEffect(()=> {
    fetchTasks(limit, page)
  }, [page])

   return (
      <div>
        <Button onClick={fetchTasks}>Fetch axios</Button>
          <Button style={{marginTop: "20px"}}onClick={() => setVisible(true)}>Add post
          </Button>
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
                  removeTask={removeTask}
                  />
          }  
          <Pagination page={page} setPage={setPage} totalPage={totalPage}/>   
      </div>
  );
}

export default Tasks;