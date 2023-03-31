import styled from "styled-components";
export const SavedVideosListContainer = styled.div`
    /* display: flex; */
    background-color: ${props => props.theme.bodyColor};
    flex-direction: column;
    /* flex-wrap: wrap; */
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    margin: auto;
    margin-top: 0px;
    width: 100%;
    height: 74vh;
    @media (max-width: 1400px) {
    justify-content: center;
    }
    overflow-y: scroll;
    `;