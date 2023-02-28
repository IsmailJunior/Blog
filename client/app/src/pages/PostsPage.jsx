import { useState, useEffect } from "react";
import axios from "axios";

const PostsPage = () =>
{
	const [ data, setData ] = useState( [] );
	const getPosts = () =>
	{
		axios( {
			method: "get",
			withCredentials: true,
			url: "/posts"
		} ).then( ( res ) =>
		{
			console.log( res.data[0] )
			setData(res.data[0])
		} )
	}

	useEffect( () =>
	{
		getPosts();
	}, [])

	return (
		<div className="container">
			{ data.map( ( el, i ) =>
			{
				return (
					<div key={ i.toString() }>
						<h1>{ el.title }</h1>
						<h4>{ el.author }</h4>
					</div>
				)
			})}
		</div>
	)
};
export default PostsPage;