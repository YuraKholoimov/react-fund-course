import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import TasksService from "../Service/API/TasksService";

const TaskIdPage = () => {
    const params = useParams()
    const [task, setTesk] = React.useState({})
    const [comments, setComments] = React.useState([])
    
    const [fetchingById, isLoading] = useFetching(async(id) => {
        const responce = await TasksService.geetById(id)
        setTesk(responce.data)
    })
    const [fetchCommentsById] = useFetching(async(id) => {
        const responce = await TasksService.geetCommentsById(id)
        setComments(responce.data)
    })

    useEffect(() => {
        fetchingById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return ( 
        <div>
            {isLoading 
            ? <strong>Loading</strong>
            : <div><h3>The Page of the UserId #{task.id}</h3>
            <hr/>
            <p><b>Topic</b>:{task.title}</p>
            <p>{task.body}</p>
            <div>
              <h3>Comments</h3> 
              <hr/>
                {comments.map(c => <div><h5>{c.email}</h5>{c.body}</div>)}
            </div>
            
            
            </div>

            }
        </div>
     );
}
 
export default TaskIdPage;
