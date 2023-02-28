import styled from "styled-components";

const UserInput = styled.input`
	display: block;
	width: 250px;
	padding: 10px;
	margin: 5px;
	border-radius: 5px;
	border: gray 1px solid;
`
const Input = ( { setValue, type, id, name } ) =>
{
	return (
		<UserInput required name={name} id={id} type={type} onChange={e => setValue(e.target.value)} />
	)
};

export default Input;