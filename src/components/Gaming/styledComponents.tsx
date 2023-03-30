import { Link } from "react-router-dom";
import styled from "styled-components"

export const GamingContainer = styled.div`
    
    height: 100vh;
    /* width: 100%; */
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColor};
    ` ;

export const GamingVideoBody = styled.div`
    display: flex;
    flex-direction: row;

    ` ;

export const GamingVideoWithBanner = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    ` ;

export const GamingVideosLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
color: ${props=>props.theme.primaryTextColor};
`; 