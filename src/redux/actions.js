import toast from "react-hot-toast"
import axios from "axios"
import { setTodo, setDeletedTodo, setCompletedTodo, setUpdatedTodo } from "./slices/todoSlice"



export const getTodos = () => {
    return async(dispatch) => {
        const loadingId = toast.loading("Getting todos")
        try{
            const response = await axios.get(process.env.REACT_APP_BASE_URL + "/getAllTodos")
            if(response.data.success){
                toast.success("Todo fetched")
                console.log(response.data.data)
                dispatch(setTodo(response.data.data))
            }
            toast.remove(loadingId)
        } catch(error) {
            console.log(error.message)
            toast.remove(loadingId)
            toast.error("Error wile getting todo")
        }
    }
}

export const createTodo = ({title, description, todos}) => {
    return async(dispatch) => {
        const loadingId = toast.loading("Adding todo")
        try{
            const response = await axios.post(process.env.REACT_APP_BASE_URL + "/createTodo", {title, description} )
            if(response.data.success){
                toast.success("Todo added")
                dispatch(setTodo( [...todos , response.data.data]))
            }
            toast.remove(loadingId)
        } catch(error){
            console.log(error.message)
            toast.remove(loadingId)
            toast.error("Error wile creating todo")
        }
    }
}

export const updateTodo = (id, title, description) => {
    return async(dispatch) => {
        const loadingId = toast.loading("updating todo")
        try{
            const response = await axios.put(process.env.REACT_APP_BASE_URL + "/updateTodo", {id, title, description} )
            if(response.data.success){
                toast.success("Todo updated")
                console.log("updation data", response.data.data)
                dispatch(setUpdatedTodo(response.data.data))
            }
            toast.remove(loadingId)
        } catch(error){
            console.log(error.message)
            toast.remove(loadingId)
            toast.error("Error wile updating todo")
        }
    }
}

export const markAsCompleted = (id) => {
    return async(dispatch) => {
        const loadingId = toast.loading("updating todo")
        try{
            const response = await axios.put(process.env.REACT_APP_BASE_URL + "/updateComplition", {id})
            if(response.data.success){
                toast.success("Todo updated")
                console.log("Completion data", response.data.data)
                dispatch(setCompletedTodo(response.data.data))
            }
            toast.remove(loadingId)
        } catch(error){
            console.log(error.message)
            toast.remove(loadingId)
            toast.error("Error wile updating todo")
        }
    }
}

export const deleteTodo = (id) => {
    return async(dispatch) => {
        console.log("Here is the id for deleteing", id)
        const loadingId = toast.loading("deleting todo")
        try{
            const response = await axios.delete(process.env.REACT_APP_BASE_URL + "/deleteTodo", {data: {id}})
            if(response.data.success){
                toast.success("Todo deleted")
                console.log("Deleted todo", response.data.data)
                dispatch(setDeletedTodo(response.data.data))
            }
            toast.remove(loadingId)
        }catch(error){
            console.log(error.message)
            toast.remove(loadingId)
            toast.error("Error wile deleting todo")
        }
    }
}