const express = require("express")
const userRouter = require("./routers/user.js")
const taskRouter = require("./routers/task.js")

require("./db/mongoose.js") // Runs the script to make the connection the mongodb server

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=> {
	console.log(`SERVER LISTENING ON PORT [${port}]`)
})
 
