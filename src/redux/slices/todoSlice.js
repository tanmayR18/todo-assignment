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
            state.todos = state.todos.filter( todo => value.payload !== todo._id )
        },
        setCompletedTodo(state, value){
            state.todos = [value.payload, ...state.todos.filter( todo => value.payload._id !== todo._id )]
        },
        setUpdatedTodo(state, value){
            state.todos = [value.payload, ...state.todos.filter( todo => value.payload._id !== todo._id )]

        }
    }
})


export const { setPage, setLoading, setTodo, setDeletedTodo, setCompletedTodo, setUpdatedTodo} = todoSlice.actions
export default todoSlice.reducer