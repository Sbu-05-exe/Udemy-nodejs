const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID()

console.log(id)
console.log(id.getTimestamp())

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task_manager"

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

	if (error) {
		console.log(error)
		return console.log("Connection attempt was unsuccessful")
	}

	console.log("Successfully connected to database")
	const db = client.db(databaseName)
	
	//////////////////////////////////////////////
	//											//
	// 					CREATE					//
	//											//
	//////////////////////////////////////////////

	// db.collection('users').insertMany([{
	// 	name: 'Psych',
	// 	age: 1
	// }, {
	// 	name: 'Hannah',
	// 	age: 2
	// }, {
	// 	name: 'Rocco',
	// 	age: 3
	// }], (error, result) => {
	// 	if (error) {
	// 		return console.log(error)
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([{
	// 	description: "Learn some french",
	// 	completed: true
	// }, {
	// 	description: "Do some chores",
	// 	completed: true
	// },{
	// 	description: "Practice some math",
	// 	completed: false
	// }], (error, result) => {

	// 	if (error) {
	// 		return console.log(error);
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('users').insertOne({
	// 	name: "Psych",
	// 	age: 1
	// })
	// .then( result => console.log(result.ops))
	// .catch(error => console.log(result))


	// db.collection("tasks")

	//////////////////////////////////////
	//									//
	// 		   		READ 	   			//
	//									//
	//////////////////////////////////////


	// db.collection('tasks').findOne({ _id: new ObjectID("603415dd2115632e949e9173")}, (error, task) =>{

	// 	if (error) {
	// 		return console.log(error)
	// 	}

	// 	console.log()
	// 	console.log("LAST TASK")
	// 	console.log(task)
	// })

	// db.collection('tasks').find({completed: false}).toArray((error, tasks) => {

	// 	if (error) {
	// 		return console.log(error)
	// 	}

	// 	console.log()
	// 	console.log('INCOMPLETE TASKS')
	// 	console.log(tasks)
	// })

	// db.collection('users').find({}).toArray((error, result) => {
	// 	console.log(result)
	// })

	db.collection('tasks').find({}).toArray((error, tasks)=> {
		console.log(tasks)
	})

	//////////////////////////////////////////////
	//											//
	//					UPDATE 					//
	//											//
	//////////////////////////////////////////////

	// db.collection('users').updateOne({
	// 		name:'Sibu'
	// 	}, { 
		
	// 	$set: {
	// 		name:'Psych'
	// 	}
	// }).then( result => {
	// 	console.log(result.modifiedCount, 'RECORD(S) HAS BEEN UPDATED')
	// }).catch( error => {
	// 	console.log('ERROR', error)
	// })

	// db.collection('users').find({}).toArray((error, result) => {

	// 	if (error) {
	// 		return console.log(error)
	// 	}

	// 	console.log()
	// 	console.log("USERS")
	// 	console.log(result)
	// })

	// db.collection('tasks').updateMany({
	// 		completed:false
	// 	}, 
	//  	{ $set: {
	//  		completed:true
	//  		}
	// 	})
	// .then(result => console.log('Matched Count: ',  result.matchedCount))
	// .catch(error => console.log(error))

	//////////////////////////////////////////////
	//											//
	//					DELETE 					//
	//											//
	//////////////////////////////////////////////


	// db.collection('users').deleteMany({}, (error, result) => {
	// 	if (error) {
	// 		return console.log(error)
	// 	}
	// 	console.log(result.deletedCount)
	// })

	// db.collection('users').deleteOne({name:"Imposter"})
	// 	.then( result => console.log("Deleted [", result.deletedCount, "]documents"))
	// 	.catch( error => console.log("Error", error))

	// db.collection('tasks').deleteOne({description: "Do some chores"})
	// 	.then( result => console.log("Deleted [", result.deletedCount, "] documents" ))
	// 	.catch( error => console.log("Error", error))

})
