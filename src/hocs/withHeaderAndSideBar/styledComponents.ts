import styled from "styled-components";

export const WithHeaderAndSidebarContainer = styled.div`
display: flex;
    flex-direction: row;
    /* height: 100%; */
    justify-content: space-between;
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.primaryTextColor};
    @media (max-width: 576px) {
        display: flex;
        margin: auto;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* height: 89.8vh; */
        /* justify-items: center; */
        align-items: center;
        /* margin-top: 200px; */
    }
    `;