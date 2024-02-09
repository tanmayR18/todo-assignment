import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const {todos} = useSelector( state => state.todo)
    const [ start, setStart ] = useState(0)
    const [ end, setEnd ] = useState(3)

    const handleNext = () => {
        if(end > todos.length -1 ) return 
        setEnd((prev) => prev + 3)
        setStart((prev) => prev + 3)
    }

    const handlePrevious = () => {
        if(start === 0) return
        setStart((prev) => prev - 3)
        setEnd((prev) => prev - 3)
    }

  return (
    <div className='flex flex-col gap-1'>
        {
            todos.slice(start, end).map( (todo,index) => (
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
        <div className=' flex justify-between items-center p-2 lg:p-4'>
            <button
            disabled={start === 0}
            className={` text-white border-yellow-500 border-2 ${start === 0 && "opacity-0" } p-1 rounded-full`}
            title='Go to previous page of tasks'
            onClick={() => handlePrevious()}
            >
                <GrFormPrevious />
            </button>

            <button
            title='Load next page of tasks'
            disabled={end >todos.length -1}
            className={` text-white border-yellow-500 border-2 ${end >todos.length -1  && "opacity-0" } p-1 rounded-full`}
            onClick={() => handleNext()}
            >
               <MdOutlineNavigateNext />
            </button>
        </div>
    </div>
  )
}

export default TodoList