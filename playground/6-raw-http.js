const http = require("http")

const url = "http://api.weatherstack.com/current?access_key=6e2b9309ab6f486a46cd85bf2400d28c&query=-33,25&limit=1"

const request = http.request(url, (response) => {

	let data = ""
	response.on("data", chunk => {

		data = data + chunk.toString();
	})

	response.on("end", () => {

		const jsonData = JSON.parse(data)
		console.log(jsonData)
		

	})

})

request.end()