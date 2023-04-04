import styled from "styled-components";
export const GamingVideosListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.theme.bodyColor};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    margin: auto;
    margin-top: 0px;
    height: 74vh;
    @media (max-width: 1400px) {
    justify-content: center;
    }
    overflow-y: auto;
    `;