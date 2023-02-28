import { useContext } from "react";
import PostContext from "../postContext";

const PostPage = () =>
{
	const PostContextProvider = useContext( PostContext );

	return (
		<div>
			<h1>{PostContextProvider.post?.title}</h1>
		</div>
	)
};

export default PostPage;