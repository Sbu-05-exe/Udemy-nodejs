const express = require("express")
const Task = require("../db/models/Task.js")

const router = express.Router()

router.get("/tasks/:id", async (req,res) => {

	const _id = req.params.id

	try {

		const task = await Task.findById(_id)

		if (!task) {

			return res.status(404).send()
		
		} 

		res.send(task)


	} catch (err) {

		res.status(400).send(err)

	}

})

router.get("/tasks", async (req, res) => {

	try {

		const tasks = await Task.find({})
		res.send(tasks)
	
	} catch (err) {

		res.status(400).send(err)

	}

})

router.post("/tasks", async (req,res) => {

	const task = new Task(req.body)

	try {

		await task.save()
		res.status(201).send(task)
	
	} catch (err) {

		res.status(500).send(err)
	
	}

})

router.delete("/tasks/:id", async (req, res) => {

	try {

		const task = await Task.findByIdAndDelete(req.params.id)

		if (!task) {

			res.status(404).send()
		}

		res.send(task)
	
	} catch (e) {

		console.log(e)
		res.status(500).send(e)
	
	}

})

router.patch("/tasks/:id", async (req, res) => {

	const keys = Object.keys(req.body)
	const allowedKeys = ["description", "completed"]

	const isValidUpdate = keys.every(key => allowedKeys.includes(key))

	if (!isValidUpdate) {
		res.status(500).send({error: "[INVALID UPDATE] Key does not exist in task model"})
	} 

	try {
		const task = await Task.findById(req.params.id);

		keys.forEach(key => task[key] = req.body[key])
		task.save()

		if (!task) {
		
			res.status(404).send()
		
		}

		res.send(task)
	
	} catch (err) {

		res.status(500).send(err)

	}

})

module.exports = router