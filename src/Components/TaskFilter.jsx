import React from 'react'
import Input from './UI/Inputs/Input'
import Select from './UI/Select/Select'

const TasksFelter = ({setFilter, filter}) => {
    return(
        <div>
            <div>
                 <Input 
                    value={filter.query}
                    onChange={(e) => setFilter({...filter, query: e.target.value})}
                    placeholder='Search'
                />
            </div>
            <div style={{marginBottom: '30px' }}>
                <Select 
                    defaultValue='Sort by' 
                    value={filter.sort} 
                    sortTasks={(selectedSort => setFilter({...filter, sort: selectedSort}))}
                />  
            </div>
        </div>
    )
}

export default TasksFelter