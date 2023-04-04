import styled from "styled-components";
import { SEARCHBAR_INPUT } from "../../constants/constants";

interface InputPropsInterface {
    typeofInput?: string;
}
export const Input = styled.input<InputPropsInterface>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: ${props => props.typeofInput === SEARCHBAR_INPUT ? "25px" : "40px"};
    border-radius: ${props => props.typeofInput === SEARCHBAR_INPUT ? '0px' : '4px'};
    border:    ${props => props.typeofInput === SEARCHBAR_INPUT ? 'none' : 'solid 1px #dfe1e6'} ;
    background-color: #ffffff;
    padding-left:    10px;
    margin-bottom:  ${props => props.typeofInput === SEARCHBAR_INPUT ? 'none' : '20px'}   ;
    outline: none;
    background-color: transparent;
    color: ${props => props.theme.primaryTextColor};
    border-right: solid 1px ${props => props.type === SEARCHBAR_INPUT ? props.theme.borderColor : "none"};
    
`;
export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: start;
   width: 80%;
    outline: none;
    `;


export const InputLabel = styled.label`
display: flex;
text-align: start;
flex-direction: row;
justify-content: start;
margin-bottom: 10px;
    `;