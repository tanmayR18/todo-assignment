import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { createTodo } from '../redux/actions'


const InputForm = () => {
    const {page, todos} = useSelector( state => state.todo)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDesciption] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodo({title, description, todos}))

    }
  return (
    <form 
    className='bg-slate-800 p-4 flex items-center justify-between gap-8'
    onSubmit={handleSubmit}
    >
        <div className=' flex gap-4 items-center'>
            <label className=' flex flex-col gap-1'>
                <div className=' text-white text-sm'>
                    Title:
                </div>
                <input
                    className=' focus:border-orange-500 border-2  rounded-lg outline-none placeholder:text-md'
                    name='title'
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    placeholder='Eg: Workout'
                />
            </label>

            <label className='flex flex-col gap-1'>
                <div className=' text-white text-sm'>
                    Description:
                </div>
                <input
                    className=' focus:border-orange-500 border-2  rounded-lg outline-none  placeholder:text-md'
                    name='description'
                    value={description}
                    onChange={(e)=>{setDesciption(e.target.value)}}
                    placeholder='Eg: 50 push ups'
                />
            </label>
        </div>

        <button className=' bg-orange-500 px-4 py-1 rounded-lg self-end font-bold text-white'>
            Add
        </button>
    </form>  
  )
}

export default InputForm