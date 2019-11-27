import styled from "styled-components";

const Card = styled.div`
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: 0 3px 4px #ebebeb;
    background: ${props => (props.species === "Human" ? "lightgray" : "white")};
    border-width: 2px;
    border-style: solid;
    border-color: ${props => (props.species === "Human" ? "transparent" : "darkgray")};
`;

export default Card;