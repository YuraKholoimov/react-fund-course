import React from 'react'

export const useSortedasks = (tasksArr, sort) => {

    const sortedTasksArr = React.useMemo(() => {
        if (sort) {
            return [...tasksArr].sort((a, b) => a[sort].localeCompare(b[sort]))
        } 
        return tasksArr
    }, [sort, tasksArr])

    return sortedTasksArr
}

export const useTasks = (tasksArr, sort, query ) => {
    const sortedTasksArr = useSortedasks(tasksArr, sort)

    const sortBySearchAndSeletTasks = React.useMemo(() => {
        return sortedTasksArr.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedTasksArr])

    return sortBySearchAndSeletTasks
} 




