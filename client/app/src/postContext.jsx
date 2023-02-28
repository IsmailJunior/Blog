import { createContext, useState } from "react";

import axios from "axios";

const PostContext = createContext( null );

export const PostContextProvider = ( { children } ) =>
{

	const [ posts, setPosts ] = useState( [] );
	const getPosts = () =>
	{
		axios( {
			method: "get",
			withCredentials: true,
			url: "/posts"
		} ).then( ( res ) =>
		{
			setPosts(res.data)
		} )
	}

	const context = {
		posts,
		getPosts
	}
	return (
		<PostContext.Provider value={ context }>
			{children}
		</PostContext.Provider>
	)
};

export default PostContext;