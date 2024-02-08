import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    todos: [],
    loading: false,
    page: 0
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initalState,
    reducers: {
        setPage(state, value) {
            state.page = value.payload;
        },
        setLoading(state, value){
            state.loading = value.payload
        },
        setTodo(state, value) {
            state.todos = value.payload
        },
        setDeletedTodo(state, value){
            state.todos = value.payload
        },
        setCompletedTodo(state, value){
            state.todos = [...state.todos.map( todo => {
                if(value.payload._id === todo._id) return value.payload
                return todo
            } )]
        },
        setUpdatedTodo(state, value){
            state.todos = [...state.todos.map( todo => {
                if(value.payload._id === todo._id) return value.payload
                return todo
            } )]
        }
    }
})


export const { setPage, setLoading, setTodo, setDeletedTodo, setCompletedTodo, setUpdatedTodo} = todoSlice.actions
export default todoSlice.reducer