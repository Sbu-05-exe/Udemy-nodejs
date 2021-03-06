const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({

	name: {
		type:String, 
		required: true
	},

	email: {
		type: String,
		unique: true,
		required: true,
		validate(email) {
			if (!validator.isEmail(email)) {
				throw new Error("Email is invalid")
			}
		}
	}, 

	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true,
		validate(password) {
			if (password.toLowerCase().includes("password")) {
				throw new Error("Password cannot contain the word password")
			}
		}
	},

	age: {
		type:Number
	}
})

userSchema.statics.findByCredentials = async (email, password) => {

	const user = await User.findOne({email})

	if (!user) {
		throw new Error("Unable to login")
	}

	const isMatch = await bcrypt.compare(password, user.password)

	if (!isMatch) {
		throw new Error("Unable to login")
	}

	return user

}

userSchema.pre("save", async function(next) {

	const user = this

	if (user.isModified("password")) {

		user.password = await bcrypt.hash(user.password,8)

	}

	next()

})

const User = mongoose.model('User', userSchema)

module.exports = User;