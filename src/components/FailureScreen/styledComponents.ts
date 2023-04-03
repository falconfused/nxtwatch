import styled from "styled-components";
export const FailureScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin: auto;
    height: 100%;
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.textColor};
    `;

export const FailureScreenImage = styled.img`
    width: 400px;
    height: 400px;
    @media (max-width: 576px) {
        width: 200px;
        height: 200px;
    }
    `;

export const FailureScreenHeading = styled.h3`
    font-size: 30px;
    font-weight: 500;
    margin: 5px;
    `;


export const FailureScreenMessage = styled.p`
    font-size: 20px;
    margin: 0px;
    font-weight: 500;
    `;
export const FailureScreenRetryButton = styled.button`
    display: flex;
    cursor: pointer;
    text-decoration: none;
    border-style: solid;
    border-radius: 8px;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4A47E0;
    width: 100px;
    height: 45px;
    border: none;
    padding: 12px;
    font-size: 20px;
    margin: 12px;
`;