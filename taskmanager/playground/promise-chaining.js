require("../src/db/mongoose")
const Task = require("../src/db/models/Task.js")

// Task.findByIdAndDelete("60452786ac0ebe09e099bb09")
// .then(result => {

// 	return Task.find({completed: false})
// 	// return Task.find({completed:false})
// })
// .then(task => console.log(task))
// .catch(error => console.log(error))

const findAllTasks = async () => {

	return await Task.find({})
} 

const printAllTasks = async () => {

	console.log(await findAllTasks())
	return
}


// findAllTasks()


const createTask = async (description) => {
	const newTask = new Task({description})

	return await newTask.save()
}

// createTask("RUCONNECTED")
// .then(task => console.log("NEW TASK: ", task))
// .catch(err => console.log("ERROR: ", err))

// Task.findByIdAndUpdate("604654b1e4dd061048798413", {completed:true})
// .then(result => console.log(result))

const deleteTaskAndCount = async (id) => {

	const result = await Task.findByIdAndDelete(id)

	if (!result) {

		throw new Error("Task not found")

	}

	const count = await Task.countDocuments({})

	return count

}


const main = () => {
	// printAllTasks()

	// Task.find({description: "Take out trash"})
	// .then(result => console.log(result))
	
	deleteTaskAndCount("60472cf9b3b0b90d3cb0c416")
	.then(count => console.log(`Successfuly removed task, ${count} remaining`))
	.catch(err => console.log(err)) 

}

main()