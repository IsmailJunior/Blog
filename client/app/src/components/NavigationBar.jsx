import { Link } from "react-router-dom";
import UserContext from "../userContext";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: start;
	background-color: #000000;
	opacity: 1;
	background-image: radial-gradient(#383838 0.4px, #000000 0.4px);
	background-size: 2px 2px;
`;

const PrimaryButton = styled.button`
	background: transparent;
	color: gray;
	border: none;
	padding: 15px;
	margin-left: 10px;
	cursor: pointer;
	transition: all 300ms ease;

	&:hover {
		color: white;
		background-color: rgba(100,100,100,0.3)
	}
`

const NavigationBar = () =>
{
	  const UserContextProvider = useContext( UserContext );
	return (
		<Container>
		{ !UserContextProvider.isLoggedIn ? 
			<Link to="/sign-up">
				<PrimaryButton>Sign Up</PrimaryButton>
			</Link>
		: null}

		{ !UserContextProvider.isLoggedIn ? 
			<Link to="/sign-in">
				<PrimaryButton>Sign In</PrimaryButton>
			</Link>
		: null}
			{ UserContextProvider.isLoggedIn ? 
			<Link to="/new-post">
				<PrimaryButton>New Post</PrimaryButton>
			</Link>
		: null}
			<Link to="/posts">
				<PrimaryButton>Posts</PrimaryButton>
			</Link>
		</Container>
	)
};

export default NavigationBar;