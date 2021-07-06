const express = require("express")
const User = require("../db/models/User.js")
const router = new express.Router()

router.post("/users/login", async (req,res) => {

	try {

		const { email, password } = req.body
		const user = await User.findByCredentials(email, password)

		res.send(user)
	
	} catch (err) {

		res.status(400).send(err)
	
	}

})

router.get("/users", async (req,res) => {

	console.log("ayt bet")

	try {
		
		const result = await User.find({})
		res.send(result)

	} catch (err) {

		res.status(500).send(err)

	}
})

router.get("/users/:id", async (req,res) => {
	
	const _id = req.params.id

	try {

		const user = await User.findById(_id)
		
		if (!user) {
		
			return res.status(400).send()
		
		}

		res.send(user)
	
	} catch (err) {

		res.status(404).send(err)
	
	}

})

router.post("/users", async (req,res) => {

	const user = new User(req.body)

	try {

		await user.save()
		res.status(201).send(user)
	
	} catch (err) {

		res.status(500).send(err)

	}
	// newUser.save()
	// .then( result => res.status(201).send(newUser))
	// .catch( error => res.status(400).send(error))

})

router.patch("/users/:id", async (req,res) => {

	const updates = Object.keys(req.body)
	const allowedUpdates = ["name", "email", "password", "age"]
	const isValidOperation = updates.every(update => allowedUpdates.includes(update))

	if (!isValidOperation) {
		res.status(400).send({error: "[INVALID UPDATE] Key does not exist in task model"})
	}

	const _id = req.params.id
	const { body } = req

	const options = {
		new: true,
		runValidators: true
	}

	try {

		const user = await User.findById(_id)

		updates.forEach(update => {
			user[update] = req.body[update]
		})

		await user.save()
		
		if (!user) {
			return res.status(404).send()
		}


		res.send(user)
	
	} catch (err) {

		res.status(400).send(err)
	
	}

})

router.delete("/users/:id", async (req, res)=> {

	try {
		const user = await User.findByIdAndDelete(req.params.id)

		if (!user) {
			res.status(404).send()
		}

		res.send(user)
	
	} catch (err) {

		res.status(500).send(err)
	
	}

})

module.exports = router