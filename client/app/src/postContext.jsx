import { createContext, useState } from "react";

import axios from "axios";
const PostContext = createContext( null );

export const PostContextProvider = ( { children } ) =>
{

	const [ posts, setPosts ] = useState( [] );
	const [ post, setPost ] = useState( null );

	const getPosts = () =>
	{
		axios( {
			method: "get",
			withCredentials: true,
			url: "/posts"
		} ).then( ( res ) =>
		{
			console.log(posts)
			setPosts(res.data[0])
		} )
	}

	const showPost = id => () =>
	{
		axios( {
			method: "get",
			withCredentials: true,
			url: `/posts/${id}`
		} ).then( res =>
		{
			console.log( res.data )
			setPost( res.data );
		})
	}

	const context = {
		posts,
		post,
		showPost,
		getPosts
	}
	return (
		<PostContext.Provider value={ context }>
			{children}
		</PostContext.Provider>
	)
};

export default PostContext;