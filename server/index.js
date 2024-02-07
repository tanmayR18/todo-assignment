const express = require("express")
const app = express()
const {connectDB} =  require("./config/database")
const todoRouter = require("./routes/todoRoutes")

require("dotenv").config()

const PORT = process.env.PORT

connectDB();

app.use(express.json())
app.use(todoRouter)

app.get("/", (req, res) => {
    res.send("<h1>Your server is up and running</h1>")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

