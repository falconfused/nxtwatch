import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeVideoContainer = styled.div`
display: flex;
width: 300px;
height: 300px;
cursor: pointer;
flex-direction: column;
align-items: center;
border-radius: 5px;
margin: 10px;
margin-left: 0px;
`;


export const HomeVideoImage = styled.img`
width: 300px;
height: 200px;
`;

export const HomeVideoBottomContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
`;

export const HomeVideoProfileImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;
export const HomeVideoDetailsContainer = styled.div`
display: flex;

flex-direction: column;
justify-content: start;
/* align-items: center; */
padding-left: 10px;
`;
export const HomeVideoTitle = styled.p`
padding: 0px;
margin: 0px;
font-size: 12px;
font-weight: bold;
`;
export const HomeVideoDescription = styled.p`
margin: 0px;
padding: 0px;
font-size: 12px;
`;
export const HomeVideoPublishedAt = styled.p`
padding: 0px;
margin: 0px;
font-size: 12px;
`;

export const HomeVideosLink = styled(Link)`
text-decoration: none;
color: ${props=> props.theme.primaryTextColor};
`;