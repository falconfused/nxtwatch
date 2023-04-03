import styled from "styled-components";

export const SearchBarDiv = styled.div`
    width: 90%;
    display: flex;
    /* height: 20px; */
    /* margin: auto; */
margin-left: auto;
margin-right: auto;
    flex-direction: row;
    @media (max-width: 768px) {
        justify-content: center;

    }
    margin-bottom: 20px;
    ;`

export const SearchBarContainer = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: start;
    /* width: 90%; */
    height: 25px;
    text-decoration: none;
    box-shadow: none;
    /* margin: auto; */
    border: solid 1px ${props => props.theme.secondaryColor};
    

    color : ${props => props.theme.primaryTextColor};
        background-color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.searchIconColor};

    margin-top: 0px;
    margin-bottom: 0px;
    margin-top: 20px;

/* margin-left: 0px; */

`;

export const Input = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* width: 30%; */
    /* min-width: 300px; */
    height: 25px;
    /* border-radius: 4px; */
    border:none;
    min-width: 350px;

    background-color: transparent;
    /* border: solid 1px ${props => props.theme.borderColor}; */
    color: ${props => props.theme.primaryTextColor};
    border-right: solid 1px ${props => props.theme.borderColor};
    

    padding-left: 10px;
    outline: none;

`;
export const SearchIcon = styled.div`
    /* width: 70px; */
    height: 25px;
    /* margin-top: 20px; */
margin-right: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   
    margin-left: 10px;
`;

