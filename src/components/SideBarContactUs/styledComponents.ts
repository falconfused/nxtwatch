import styled from "styled-components";


export const SideBarContactUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.primaryTextColor};

    @media (max-width: 768px) {
        display: none;
    }
`;
export const SideBarContactUsTitle = styled.h2`
    font-size: 1.5rem;
    width: 80%;
    margin: auto;
    font-weight: 600;
    margin-bottom: 1rem;
`;
export const SideBarContactUsText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
`;


export const SideBarContactUsIcon = styled.img`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
    margin-right: 16px;
`;
export const SideBarContactUsIconContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    
    justify-content: start;
    width: 80%;
    margin-bottom: 1rem;
`;
