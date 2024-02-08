import React from 'react'
import TodoItem from './TodoItem'
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const {todos} = useSelector( state => state.todo)
  return (
    <div className='flex flex-col gap-1'>
        {
            todos.map( (todo,index) => (
                <TodoItem todo={todo} key= {todo._id} />
            ))
        }
        {
            todos.length === 0 &&
            <div className='bg-slate-800 p-2 font-bold text-white h-20 flex  items-center justify-center'>
                <p>
                    No tasks yet! Add one above 👆
                </p>
            </div>
        }
        
    </div>
  )
}

export default TodoList