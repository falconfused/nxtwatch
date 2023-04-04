import styled from "styled-components";

export const Input = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* width: 30%; */
    /* min-width: 300px; */
    height: 25px;
    /* border-radius: 4px; */
    border:none;
    min-width: 300px;

    background-color: transparent;
    /* border: solid 1px ${props => props.theme.borderColor}; */
    color: ${props => props.theme.primaryTextColor};
    border-right: solid 1px ${props => props.theme.borderColor};
    

    padding-left: 10px;
    outline: none;

`;