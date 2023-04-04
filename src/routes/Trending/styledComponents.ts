import styled from "styled-components"

export const TrendingContainer = styled.div`
    
    height: 100vh;
    /* width: 100%; */
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryTextColor};
    ` ;

export const TrendingVideoBody = styled.div`
    display: flex;
    flex-direction: row;

    ` ;

export const TrendingVideoWithBanner = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    ` ;
