import styled from "styled-components";

const UserInput = styled.input`
	padding: 10px;
	margin: 5px;
	border-radius: 5px;
	border: gray 1px solid;
`
const Input = ( { setValue, type, placeholder } ) =>
{
	return (
		<UserInput type={type} placeholder={placeholder} onChange={e => setValue(e.target.value)} />
	)
};

export default Input;