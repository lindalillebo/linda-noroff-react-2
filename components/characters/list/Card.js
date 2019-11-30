import styled from "styled-components";

const Card = styled.div`
	padding: 1em;
	margin-bottom: 1em;
	box-shadow: ${props => (props.species === "Asian" ? "0 3px 4px #ccc" : "none")};
	background: ${props => (props.sex === "Male" ? "#12a260" : "#920f21")};
	color: ${props => (props.sex === "Male" ? "#000" : "#fff")};
	border-radius: ${props => props.theme.border.borderRadius};
`;

export default Card;
