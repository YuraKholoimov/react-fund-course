import React from "react";
import Input from "./UI/Inputs/Input";
import Select from "./UI/Select/Select";

const TaskFilter = ({setFilter, filter}) => {
  return (
    <dib>
      <Select
        options={[
          { value: "title", name: "Sort by title" },
          { value: "body", name: "Sort by text" }
        ]}
        defaultValue={"Sort by"}
        value={filter.sort}
        sortTasks={(selectedSort) => setFilter({...filter, sort: selectedSort  })}
      />
      <Input
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
    </dib>
  );
};
export default TaskFilter