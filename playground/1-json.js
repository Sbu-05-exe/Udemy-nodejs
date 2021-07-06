const fs = require("fs")

// const book = {

// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday"

// }

// let bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)

// console.log(data.title)

//////////////////////////
/* The challenge below */
/////////////////////////

const databuffer = fs.readFileSync("1-json.json");
const dataJSON = databuffer.toString();
const data = JSON.parse(databuffer);


data.name = "psych";
data.age = 1;

fs.writeFileSync("1-json.json", JSON.stringify(data));
