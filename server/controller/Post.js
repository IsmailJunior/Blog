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