import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px;
`;

const PrimaryButton = styled.button`
	background-color: black;
	color: white;
	border: none;
	padding: 10px;
	border-radius: 10px;
	margin-top: 10px;
	margin-left: 10px;
	cursor: pointer;
	transition: all 300ms ease;

	&:hover {
		background-color: white;
		color: black;
	}
`

const NavigationBar = () =>
{
	return (
		<Container>
			<Link to="/">
				<PrimaryButton>Home</PrimaryButton>
			</Link>

			<Link to="/test">
				<PrimaryButton>Blog</PrimaryButton>
			</Link>
			<PrimaryButton>About</PrimaryButton>
			<PrimaryButton>Sign Up</PrimaryButton>
		</Container>
	)
};

export default NavigationBar;