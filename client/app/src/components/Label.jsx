import styled from "styled-components"

const PrimaryLabel = styled.label`
	padding-right: 200px;
`

const Label = ({id, text}) =>
{
	return (
		<PrimaryLabel htmlFor={id}>{text}</PrimaryLabel>
	)
};

export default Label;