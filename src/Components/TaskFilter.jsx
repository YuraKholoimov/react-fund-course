import React from 'react'
import Input from './UI/Input'
import Select from './UI/Select'

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
                    options={[{ value: "title", name: "Sort by title" },
                            { value: "body", name: "Sort by text" }]}
                    defaultValue='Sort by' 
                    value={filter.sort} 
                    onChange={(selectedSort => setFilter({...filter, sort: selectedSort}))}
                />  
            </div>
        </div>
    )
}

export default TasksFelter