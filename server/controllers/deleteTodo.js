const Todo = require("../model/Todo");


exports.deleteTodo = async(req, res) => {
    try{

        const { id } = req.body

        if(!id){
            return res.status(404).json({
                success: false,
                message: "Please fill all the required field",
            })
        }

        const deletedTodo =  await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(400).json({
                success: false,
                message: "Unable to delete the todo",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo Deleted",
        })
    
    } catch{
        console.log("Error while  deleting todo : ", error);
        res.status(400).json({
            success: false,
            message: "Error while deleting todo",
            error: error.message
        })
    }
}