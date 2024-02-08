import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsCompleted, updateTodo } from '../redux/actions';

const TodoItem = ({todo, todos}) => {

    const dispatch = useDispatch()

    const [ title, setTitle] = useState( todo.title)
    const [ description, setDescription] = useState( todo.description)
    const [ edit, setEdit] = useState(false)

    const handleUpdate = () => {
        setEdit(false)
        dispatch(updateTodo(todo._id, title, description))
    }

    return (
    <div className='bg-slate-800 p-4 flex items-center justify-between gap-8'>
        <div className=' flex flex-col gap-1'>
            <input
            disabled = {!edit} 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={` text-2xl font-semibold bg-slate-800  ${todo.complete ? " text-cyan-900 line-through " : " text-orange-500" }`} />
            
            <input 
            value={description}
            disabled = {!edit} 
            onChange={(e) => setDescription(e.target.value)}
            className={` text-xs bg-slate-800 text-white ${todo.complete ? " text-cyan-900 line-through " : " text-orange-500" }`} />
        </div>

        <div className=' flex items-center gap-2'>
            {
                !edit &&
                <div 
                onClick={() => {
                    dispatch(markAsCompleted(todo._id))
                    console.log(todos)
                }}
                className='bg-slate-900 hover:bg-green-500  text-green-700 hover:text-white rounded-full p-3 flex items-center transition-all duration-300 cursor-pointer'>
                    {
                        todo.complete ? 
                        <FaUndo title='Mark the task as incomplete' size={14}  /> :
                        <MdDone title='Mark the task as complete'  size={16} className=''/>
                    }
                </div>
            }

            {
                !edit &&
                <div  
                title='Edit the task'
                onClick={() => setEdit(true)}
                className=' p-3 bg-slate-900 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white duration-300 transition-all cursor-pointer'>
                    <MdEdit  />
                </div>
            }

            {
                !edit &&
                <div 
                title='Delete the task'
                onClick={() => dispatch(deleteTodo(todo._id))}
                className='text-red-500 hover:text-white bg-slate-900 hover:bg-red-500 transition-all cursor-pointer duration-300  p-3 rounded-full '>
                    <RiDeleteBin6Line className='' />
                </div>
            }

            {
                edit &&
                <div className=' flex gap-4'>

                    <div 
                    onClick={() => handleUpdate()}
                    className=' bg-green-800 cursor-pointer text-white  px-2 rounded-md'>
                        Save
                    </div>

                    <div 
                    onClick={() => setEdit(false)}
                    className=' bg-blue-700 text-white cursor-pointer px-2 rounded-md'>
                        Cancel
                    </div>

                </div>
            }
        </div>
    </div>
  )
}

export default TodoItem