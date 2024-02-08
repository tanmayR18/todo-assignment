import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const {todos} = useSelector( state => state.todo)
  return (
    <div className='flex flex-col gap-1'>
        {
            todos.map( (todo, index) => (
                <TodoItem todo={todo} todos = {todos} key= {index} />
            ))
        }
        
    </div>
  )
}

export default TodoList