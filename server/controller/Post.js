const Post = require( "../model/post" );

module.exports.createPost = async ( req, res ) =>
{
	const { title, author } = req.body;
	const post = new Post( { title, author } );
	await post.save();
	console.log( "Creating new post successfully!" );
	res.send( "Success" );
};

module.exports.posts = async ( req, res ) =>
{
	const posts = await Post.find();
	console.log( posts );
	res.send( [ posts ] );
};

module.exports.showPost = async ( req, res ) =>
{
	const { id } = req.params;
	const post = await Post.findById( id );
	console.log( post );
	res.send( post );
};