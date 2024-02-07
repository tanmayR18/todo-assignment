const Todo = require("../model/Todo")

exports.getAllTodos = async (req, res) => {
    try{
        const todos = await Todo.find()
        
        res.status(200).json({
            success: true,
            message: "Todo Fetched successfully",
            data: todos
        })

    } catch(error){
        console.log("Error while  fetching todo : ", error);
        res.status(400).json({
            success: false,
            message: "Error while fetching todo",
            error: error.message
        })
    }
}