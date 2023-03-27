import styled from "styled-components";

export const LogOutButton = styled.button`    
    display: flex;
    align-items: center;
    flex-direction: row;
    color: ${
        props => props.theme==="light" ? "#84A4BF" : "#fff"
    };
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 10px;
    border: ${props => props.theme==="light" ? "1px solid #84A4BF" : "1px solid #fff"};

    height: 30px;
    
`;
