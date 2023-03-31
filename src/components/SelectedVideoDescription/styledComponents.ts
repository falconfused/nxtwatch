import styled from "styled-components";
export const SelectedVideoDescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    width: 90%;
    height: 200px;
    border-top:2px solid ${props => props.theme.borderColor};
    text-align: start;
    margin: auto;
    align-items: center;
    /* height: 100%; */
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.textColor};
    `;


export const SelectedProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    `;

export const VideoTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 5px;
    `;
export const VideoSubscribers = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin: 5px;
    `;
export const VideoDescription = styled.p`

    font-size: 12px;
    margin: 5px;
    font-weight: 500;
    `;

export const SelectedVideoDescriptionRightContainer = styled.div`
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    `;



