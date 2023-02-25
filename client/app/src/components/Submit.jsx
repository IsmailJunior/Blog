import styled from "styled-components";

const SubmitButton = styled.button`
	background-color: black;
	color: white;
	cursor: pointer;
	border: none;
	padding: 10px;
	border-radius: 5px;
	transition: all 300ms ease;

	&:hover {
		background-color: white;
		color: black;
	}
`

const Submit = ( { onClick, name } ) =>
{
	return (
		<SubmitButton onClick={onClick}>{name}</SubmitButton>
	)
};

export default Submit;