const express = require("express")
const router = express.Router()

const { createTodo } = require("../controllers/createTodo")
const { deleteTodo } = require("../controllers/deleteTodo")
const { getAllTodos } = require("../controllers/getTodos")
const { updateTodo } = require("../controllers/updateTodo")
const { updateComplition } = require("../controllers/updateTodoProgress")

router.get("/getAllTodos",getAllTodos)
router.post("/createTodo",createTodo)
router.put("/updateTodo",updateTodo)
router.put("/updateComplition",updateComplition)
router.delete("/deleteTodo",deleteTodo)

module.exports = router

