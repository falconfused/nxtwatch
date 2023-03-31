import styled from "styled-components";

interface SelectedVideoOptionContainerProps {
    isSelected: boolean;
}

export const SelectedVideoOptionContainer = styled.div<SelectedVideoOptionContainerProps>`
    display: flex;
    flex-direction: row;
    width:60px;
    align-items: center;
    color: ${props=> props.isSelected ? props.theme.optionActiveColor : props.theme.primaryTextColor};
    justify-content: space-around;
    margin-right: 10px;
    cursor: pointer;
    `;

export const SelectedVideoOptionText = styled.p`
    margin: 0px;
    /* padding: 0px; */
    font-weight: 500;
    font-size: 12px;
    margin-right: 10px;

    /* padding: 20px; */
    `;