const User = require( "../model/user" );
const LocalStrategy = require( "passport-local" ).Strategy;

module.exports = function ( passport )
{
	passport.use( new LocalStrategy( User.authenticate() ) );
	passport.serializeUser( User.serializeUser() );
	passport.deserializeUser( User.deserializeUser() );
}


