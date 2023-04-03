import styled from "styled-components";
// import themeStore from "../../stores/ThemeStore";

interface SideBarContainerProps {
    show?: boolean;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
    display: flex;
    flex-direction: column; 
    width: 300px;
    height: 89.8vh;
    background-color: ${props => props.theme.primaryColor};
    /* @media (max-width: 768px) {
        display: none;
    } */
    @media (max-width: 768px) {
    display: ${props => props.show ? "flex" : "none"};
    height: auto;
    width: 100%;
   
    
    align-items: center;
    margin: auto;
    /* margin:20px ; */
    /* position: absolute; */
    }
`;

export const SideBarMenuContainer = styled.div`
height: 100%;
width: 100%;
background-color: ${props => props.theme.backgroundColor};
    


`;