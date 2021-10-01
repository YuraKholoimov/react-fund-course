import Tasks from "../Pages/Tasks";
import TaskIdPage from "../Pages/TaskIdPage";
import About from "../Pages/About";
import Login from "../Pages/Login";

export const privateRoutes = [
    {path: '/tasks/:id', component: TaskIdPage, exect: true},
    {path: '/tasks', component: Tasks, exect: true},
    {path: '/about', component: About, exect: true}
]
export const publicRoutes = [
    {path: '/login', component: Login, exect: true}
]