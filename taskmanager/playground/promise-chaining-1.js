require("../src/db/mongoose")
const Task = require("../src/db/models/Task")

Task.find({})
.then(task => console.log(task))
.catch(error => console.log(error))