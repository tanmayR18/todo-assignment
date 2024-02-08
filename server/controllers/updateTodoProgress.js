const Todo =  require('../model/Todo');

exports.updateComplition = async(req, res) => {
    try{
        const { id } = req.body
        console.log("Ye rahe id", id)
        if ( !id ) {
            return res.status(404).json({
                success: false,
                message: "Please fill all the required field",
            })
        }

        const todoExist = await Todo.findById(id)

        if(!todoExist){
            return res.status(404).json({
                success: false,
                message: "Todo doesnt exits",
            })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(id, {
           complete: !todoExist.complete
        },{new: true})

        if(!updatedTodo){
            return res.status(400).json({
                success: false,
                message: "Unable to update the progress",
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