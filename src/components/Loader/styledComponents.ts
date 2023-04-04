import styled from "styled-components"
export const LoaderContainer = styled.div`
    display: flex;          
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
`
