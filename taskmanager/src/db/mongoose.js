const mongoose = require('mongoose') 
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task_manager_api", {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(result => console.log('SUCCESSFULLY CONNECTED TO MONGODOB'))

// const todo = new Task({
// 	description: "learn some french",
// 	completed: true
// })

// todo.save()
// .then(result => console.log(result))
// .catch(error => console.log('Error!', error))

// const me = new User({
// 	name: 'Psych',
// 	email: 'Psych@sbudamain.com',
// 	password: 'Imagine dying first',
// 	age: 3
// })

// me.save()
// .then(result => console.log(result))
// .catch(error => console.log("Error", error))