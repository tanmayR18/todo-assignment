import { useEffect } from "react";
import InputForm from "./components/InputForm";
import Pagination from "./components/Pagination";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/actions";

function App() {

    const {todos} = useSelector( state => state.todo)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getTodos())
    },[])

  return (
    <div className=" min-h-screen flex items-center justify-center bg-slate-900 py-10">
        <div className=" flex flex-col gap-6">
            <h1 className=" text-center font-bold text-white  text-2xl tracking-widest">Todo List</h1>
            <div className=" flex flex-col gap-3">
                <InputForm/>
                <TodoList/>
                {/* <Pagination/> */}
            </div>

        </div>
    </div>
  );
}

export default App;
