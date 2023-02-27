const mongoose = require( "mongoose" );
const passportLocalMongoose = require( "passport-local-mongoose" );
const user = new mongoose.Schema( {
	username: {
		type: String,
		unique: true
	},
	password: String
} );

user.plugin( passportLocalMongoose );
module.exports = mongoose.model( "User", user );