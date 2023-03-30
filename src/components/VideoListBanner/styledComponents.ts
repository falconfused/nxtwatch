import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

export const VideoListBannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items  :center ;
    /* width: 100%; */
    background-color: ${props => props.theme.primaryColor};
    height: 150px;
    
    /* height: 100%; */
`;

export const VideoListBannerImageContainer = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;


    border-radius: 50%;
    margin: 10px;
    margin-left: 30px;
    background-color: ${props => props.theme.activeColor};
    `;

export const VideoListBannerImage = styled(FontAwesomeIcon)`
    
    height: 50%;
    color: red;
    `;

export const VideoListBannerTitle = styled.h1`
    font-size: 28px;
    font-weight: 500;
    color: ${props => props.theme.primaryTextColor};

`;