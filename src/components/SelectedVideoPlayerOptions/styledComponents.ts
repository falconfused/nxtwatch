import styled from "styled-components";
export const SelectedVideoPlayerOptionsContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    /* height: 500px; */
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    color: ${props => props.theme.primaryTextColor};
    margin: auto;
    margin-top: 0px;
    
`;

export const SelectedVideoPlayerOptionsLeftContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 20%;
    
    font-size: 16px;
    font-weight: 500;
    /* justify-content: center; */
    color: ${props => props.theme.primaryTextColor};
    align-items: center;
    `;

export const SelectedVideoPlayerOptionsRightContainer = styled.div`
        display: flex;
        flex-direction: row;
        width: 20%;
        justify-content: end;
        /* min-width: 600px; */
        color: ${props => props.theme.primaryTextColor};
        
        `;
export const SelectedVideoPlayerOptionsBottomContainer = styled.div`
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        `;