import styled from "styled-components";
const Container = styled.div`
	position: relative;
	background-color: #000000;
	opacity: 1;
	background-image: radial-gradient(#383838 0.4px, #000000 0.4px);
	background-size: 2px 2px;
	box-shadow: inset 0 0 20px #32fafa66;
	padding: 15px;
	margin: 20px;
	width: 600px;
	height: 400px;
	overflow: hidden;
`
const Div = styled.div`
	position: absolute;
	z-index: 1;
`

const Title = styled.h1`
	text-align: left;
	margin: 15px;
	filter: drop-shadow(0 0 5px black);
`
const Author = styled.h3`
	color: gray;
	font-weight: lighter;
	text-align: left;
	margin: 15px;
	font-style: italic;
`
const Image = styled.img`
	position: absolute;
	width: 630px;
	height: 400px;
	left: 0px;
	top: 0px;
`
const Post = ({title, author, img}) =>
{
	return (
		<Container>
			<Div>
			<Title>{title}</Title>
			<Author>{ author }</Author>
			</Div>
			<Image src="https://th.bing.com/th/id/OIP.5rNLdnDgfWgZUJIMAIBgMAHaEo?pid=ImgDet&rs=1" />
		</Container>
	)
};

export default Post;