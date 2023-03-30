import styled from "styled-components";

export const GamingVideoContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
height: 450px;
max-width: 200px;
margin: 50px;
cursor: pointer;
/* flex-direction: row; */
@media (max-width: 768px) {
flex-direction: column;
text-align: center;
align-items: center;
}
/* align-items: center; */
/* justify-content: center; */
/* border: 1px solid #e6e6e6; */
border-radius: 5px;
/* margin: 10px; */
`;


export const GamingVideoImage = styled.img`
width: 250px;
height: 400px;
`;

export const GamingVideoBottomContainer = styled.div`
display: flex;
flex-direction: row;
/* align-items: center; */
padding: 10px;
`;

export const GamingVideoProfileImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;
export const GamingVideoDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
/* align-items: center; */
/* padding-left: 10px; */
`;
export const GamingVideoTitle = styled.h3`
padding: 0px;
margin: 0px;
/* font-size: 12px; */
font-weight: bold;
`;
export const GamingVideoDescription = styled.p`
margin: 0px;
padding: 0px;
font-size: 12px;
margin:05px;
`;
export const GamingVideoPublishedAt = styled.p`
padding: 0px;
margin: 0px;
font-size: 12px;
margin: 5px;
`;
