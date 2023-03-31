import styled from "styled-components";
// import themeStore from "../../stores/ThemeStore";

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 300px;
    height: 89.8vh;
    background-color: ${props => props.theme.primaryColor};
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SideBarMenuContainer = styled.div`

height: 100%;
background-color: ${props => props.theme.backgroundColor};
    


`;