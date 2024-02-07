const Todo =  require('../model/Todo');

exports.updateTodo = async(req, res) => {
    try{
        
        const { id , title, description } = req.body

        if ( !id || (!title || !description)) {
            return res.status(404).json({
                success: false,
                message: "Please fill all the required field",
            })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(id, {
            title,
            description
        },{new: true})

        if(!updatedTodo){
            return res.status(400).json({
                success: false,
                message: "Unable to update the todo",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo updated",
            data: updatedTodo
        })

    } catch(error){
        console.log("Error while  fetching todo : ", error);
        res.status(400).json({
            success: false,
            message: "Error while updating todo",
            error: error.message
        })
    }
}