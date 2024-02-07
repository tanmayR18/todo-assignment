const Todo = require("../model/Todo")


exports.createTodo = async(req, res) => {
    try{

        const {title, description} = req.body

        if(!title || !description){
            return res.status(404).json({
                success: false,
                message: "Fill all fields"
            })
        }

        const todo = await Todo.create({
            title,
            description
        })

        if(!todo){
            return res.status(400).json({
                success: false,
                message: "Unable to add todo",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo added",
            data: todo
        })  

    } catch(error) {
        console.log("Error while adding todo : ", error);
        res.status(400).json({
            success: false,
            message: "Error while adding todo",
            error: error.message
        })
    }
}