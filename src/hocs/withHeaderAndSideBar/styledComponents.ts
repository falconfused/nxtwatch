import styled from "styled-components";

export const WithHeaderAndSidebarContainer = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.primaryTextColor};
    @media (max-width: 576px) {
        display: flex;
        flex-direction: row;
       width: 100%;
        justify-items: center;
        align-items: center;


    }
    `;