const User = require( "../model/user" );

module.exports.register = async ( req, res ) =>
{
	const { username, password } = req.body;
	const user = new User( { username } );
	const signedUser = await User.register( user, password );
	console.log( signedUser );
	req.login( signedUser, () =>
	{
		res.send( req.user );
	} );
};

module.exports.login = ( req, res ) =>
{
	if ( res.statusCode > 100 && res.statusCode < 400 )
	{
		res.send( req.user );
	} else
	{
		res.send( "Error" );
	}
}; 

module.exports.logout = ( req, res, next ) =>
{
	req.logout( function ( err )
	{
		if ( err )
		{
			return next( err );
		}

		res.send( "Logout" );
	} );
};