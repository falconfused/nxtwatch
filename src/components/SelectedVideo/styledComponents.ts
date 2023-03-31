import styled from "styled-components";

export const SelectedVideoContainer = styled.div`

display: flex;
flex-direction: column;

width: 100%;
background-color: ${props => props.theme.bodyColor};    
height: 100vh;

`;

export const SelectedVideoWithSideBar = styled.div`
display: flex;
flex-direction: row;
`;
export const SelectedVideoBody = styled.div`
display: flex;
flex-direction: column;
/* justify-content: start; */
height: 89.8vh;
width: 100%;
`;