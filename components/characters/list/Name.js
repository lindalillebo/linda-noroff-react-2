import styled from "styled-components";

const Name = styled.h5`
    font-size: 0.9em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.characterName};
`;

export default Name;