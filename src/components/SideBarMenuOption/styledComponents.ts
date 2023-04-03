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
    font-weight: ${props=>props.isActive === props.optionRoute ? 800 : 400};
    background-color: ${props =>
        props.isActive === props.optionRoute ? props.theme.activeColor : "none"};


        @media (max-width: 576px) {

/* width: 100%; */

        }

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
color: ${props => props.theme.primaryTextColor};
margin-right: 16px;
`;


