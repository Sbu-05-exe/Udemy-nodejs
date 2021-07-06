const add = async (a, b) => {

	return new Promise((resolve, reject) => {

		setTimeout( ()=> {
			resolve(a+b)
		},1000)
	
	})

	// return new Promise = (resolve, reject) => {

	// }
}

const doWork = async () => {

	const sum = await add(3,2)
	const sum1 = await add(sum, 10)
	const sum2 = await add(sum, 15)

	return sum2

}

doWork()
.then(sum => console.log(sum))
.catch(error => console.log("error"))

// console.log(doWork()) // undefined