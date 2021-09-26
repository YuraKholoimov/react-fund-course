import React from 'react';

const Select = ({ options, defaultValue, sortTasks, value }) => {

    return(
        <select value={value} onChange={ event => sortTasks(event.target.value)}  >

          <option disabled value="value1">{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}

        </select>
    )
}

export default Select