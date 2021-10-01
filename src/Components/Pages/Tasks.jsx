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
import { useObserver } from "../hooks/useObserver";
import Select from "../UI/Select";

function Tasks() {

  const [tasksArr, setTasksArr] = React.useState([]);
  const [filter, setFilter] = React.useState({sort: '', query: ''})
  const [visible, setVisible] = React.useState(false)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)
  const [totalPage, setTotalPage] = React.useState(0)
  
  const lastElement = React.useRef()

  function createTask(task) {setTasksArr([...tasksArr, task]); setVisible(false)};
  function removeTask(task) {setTasksArr(tasksArr.filter(taskOfArr => taskOfArr.id !== task.id))}

  const sortBySearchAndSeletTasks = useTasks(tasksArr, filter.sort, filter.query )

  const [fetchTasks, isTasksLoading, tasksError ] = useFetching( async () => {
      const responce = await TasksService.tegAll(limit, page)
      setTasksArr([...tasksArr,...responce.data])
     
      const totalPageCount = responce.headers['x-total-count']
      setTotalPage(getPageCount(totalPageCount, limit))
    }
  )

  useObserver(lastElement, isTasksLoading, page < totalPage, () => {
    setPage( page + 1 )
  } )
  
  React.useEffect(()=> {
    fetchTasks(limit, page)
  }, [limit, page])

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
          <Select 
            defaultValue='Score elements'
            onChange={value => setLimit(value)}
            value={limit} 
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: -1, name: 'All'}
            ]}
          />
          {isTasksLoading
            && <h1 style={{marginBottom: '20px' }}>Loading...</h1>  
          }  
          <TasksList 
              tasks={sortBySearchAndSeletTasks} 
              removeTask={removeTask}
              />
          <div ref={lastElement} style={{width: "100%", height: "2px"}}></div>

          <Pagination page={page} setPage={setPage} totalPage={totalPage}/>   
      </div>
  );
}

export default Tasks;