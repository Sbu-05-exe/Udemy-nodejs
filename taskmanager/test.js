const { MongoClient, ObjectID} = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useUnifiedTopology: true} , (error, client) => {
	if (error) {
		return console.log('unable to connect to database');
	}

	const db = client.db(databaseName);
	const usersRef = db.collection('users');
	const tasksRef = db.collection('tasks');

	// usersRef.insertMany([
	// 	{name: 'Jen', age: 28},
	// 	{name: 'Sean', age: 27},
	// 	{name: 'JP', age: 23}
	// 	], (error, result) => {
	// 		if (error) {
	// 			return console.log('Unable to insert docs')
	// 		}

	// 		console.log(result.ops);
	// 	})

	// usersRef.find({age: 28}).toArray((error, users) => {
	// 	console.log(users)
	// })

	// usersRef.find({age: 28 }).count((error, count) => {
	// 	console.log(count)
	// })

	tasksRef.findOne({_id: new ObjectID("61d5bc181feaff6d5035f2d7")})
	// usersRef.findOne({_id: new ObjectID("61d5b977591d496b253081d5")}, (error, doc) => {
	// 	if (error) {
	// 		return console.log("Unable to fetch");
	// 	}

	tasksRef.find({completed: true}).toArray((error, docs) => {
		console.log(docs)
	})

	// 	console.log(doc);
	// })
})