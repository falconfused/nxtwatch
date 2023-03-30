import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 60px;
    
    margin: auto;
    color : ${props => props.theme.primaryTextColor};
    background-color: ${props => props.theme.bodyColor};
    margin-top: 0px;
    margin-bottom: 0px;
/* margin-left: 0px; */

`;

export const Input = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 30%;
    min-width: 300px;
    height: 25px;
    border-radius: 4px;
    border: solid 1px #dfe1e6;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColor};
    padding-left: 10px;
    outline: none;
    &:focus {
        border: solid 1px #f7931e;
    }
`;
export const SearchIcon = styled.div`
    /* width: 70px; */
    height: 64px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
   
    margin-left: 10px;
`;

