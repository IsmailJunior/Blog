import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PostContext from "../postContext";
import Button from "../components/Button";


const PostsPage = () =>
{
	const PostContextPorvider = useContext( PostContext );

	useEffect( () =>
	{
		PostContextPorvider.getPosts();
	}, [])

	return (
		<div className="container">
			{ PostContextPorvider.posts.map( ( el, i ) =>
			{
				return (
					<div key={ i.toString() }>
						<h1>{ el.title }</h1>
						<h4>{ el.author }</h4>
						<Link to={`/posts/${el._id}`}>
							<Button onClick={PostContextPorvider.showPost(el._id)} name="Show"/>
						</Link>
					</div>
				)
			})}
		</div>
	)
};
export default PostsPage;