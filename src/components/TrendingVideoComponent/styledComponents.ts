import { Link } from "react-router-dom";
import styled from "styled-components";

export const TrendingVideoContainer = styled.div`
display: flex;
flex-direction: row;
/* width: 80%; */
/* margin: auto; */

height: 250px;
max-width: 700px;
margin: 20px;
margin-top: 10px;
margin-bottom: 0px;
cursor: pointer;
/* flex-direction: row; */
@media (max-width: 768px) {
flex-direction: column;
text-align: center;
align-items: center;
}

border-radius: 5px;

`;


export const TrendingVideoImage = styled.img`
width: 300px;
height: 200px;
`;

export const TrendingVideoRightContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const TrendingVideoProfileImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;
export const TrendingVideoDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
/* align-items: center; */
padding-left: 10px;
`;
export const TrendingVideoTitle = styled.h3`
padding: 0px;
margin: 5px;
/* font-size: 12px; */
font-weight: bold;
`;
export const TrendingVideoDescription = styled.p`
margin: 0px;
padding: 0px;
font-size: 12px;
margin: 5px;
`;
export const TrendingVideoPublishedAt = styled.p`
padding: 0px;
margin: 0px;
font-size: 12px;
margin: 5px;
`;

export const TrendingVideosLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: row;
color: ${props=>props.theme.primaryTextColor};
`; 