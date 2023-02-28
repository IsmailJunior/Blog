import Input from "../components/Input";
import Submit from "../components/Submit";
import Label from "../components/Label";
import axios from "axios";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewPostPage = () =>
{
	const history = useHistory();
	const [ title, setTitle ] = useState( "" );
	const [ author, setAuthor ] = useState( "" );
	const post = () =>
{
	axios( {
		method: "post",
		data: {
			title: title,
			author: author
		},
		withCredentials: true,
		url: "/posts/new-post"
	} ).then( () =>
	{
		history.push( "/posts" );
	})
}

  return (
    <div className="container">      
        <div>
          <h1>New Post</h1>
		<Label id="title" text="Title:" />
		<Input name="title" id="title" type="text" setValue={setTitle} />
		<Label id="author" text="Author:" />
        <Input name="author" id="auhtor" type="text" setValue={setAuthor} />
        <Submit name="New Post" onClick={post} />
        </div>
    </div>
	)
};

export default NewPostPage;