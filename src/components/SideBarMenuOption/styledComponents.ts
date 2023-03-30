import styled from "styled-components";


interface SideBarMenuOptionContainerProps {
    isActive: string;
    optionRoute: string;

}
export const SideBarMenuOptionContainer = styled.div<SideBarMenuOptionContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 0 16px;
   
    height: 48px;
    cursor: pointer;
    background-color: ${props =>
        props.isActive === props.optionRoute ? props.theme.activeColor : "none"};
`;

export const SideBarMenuOptionIcon = styled.div`
width: 24px;
height: 24px;
margin-right: 24px;
`;

export const SideBarText = styled.div`
font-size: 14px;
color: ${(props) => props.theme.primaryTextColor};

`;
export const SideBarIcon = styled.div`
width: 24px;
height: 24px;
color: ${props=>props.theme.primaryTextColor};
margin-right: 16px;
`;


