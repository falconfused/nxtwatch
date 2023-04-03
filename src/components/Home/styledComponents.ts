import styled from "styled-components";

export const HomeContainer = styled.div`

height: 100vh;
/* height: 100vh; */
    /* display: flex; */

    /* flex-direction: column; */
    /* align-items: center; */

`;

export const HomeContainerWithBanner = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.bodyColor};
    color: ${props=>props.theme.primaryTextColor};
    flex-direction: column;
    height: 89.8vh;
    /* align-items: center; */
    /* justify-content: center; */
    `;
