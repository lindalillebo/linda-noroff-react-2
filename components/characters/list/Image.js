import styled from "styled-components";

const Image = styled.img`
    border: 3px white solid;
    max-width: 100%;
    border-radius: ${props => (props.gender === "Female" ? "50%" : 0)};
`;

export default Image;