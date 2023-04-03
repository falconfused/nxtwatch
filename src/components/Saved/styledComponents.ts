import styled from "styled-components"

export const SavedContainer = styled.div`
    
    height: 100vh;
    
    ` ;

export const SavedVideoBody = styled.div`
    display: flex;
    flex-direction: row;
    /* height: 100%; */
    

    ` ;

export const SavedVideoWithBanner = styled.div`
    display: flex;
    color: ${props => props.theme.primaryTextColor };
    width: 100%;
    height: 100%;
    flex-direction: column;
    ` ;
