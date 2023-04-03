import styled from 'styled-components';
import { Theme } from '../../constants/constants';
export const HeaderOptions = styled.div`

@media (max-width: 768px) {
        display: none;
    }
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    justify-content: space-between;
    /* margin: 16px; */
    margin-right:10px ;
`;
export const HeaderOptionsMobile = styled.div`
    display: flex;
    width: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin: 16px; */
    @media (min-width: 768px) {
        display: none;
    }
`;


export const ProfileImage = styled.img`
    cursor: pointer;
    /* width: 40px; */
    height: 40px;
    border-radius: 50%;
    
`;

export const HeaderContainer = styled.div`
height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    background-color: ${props=>props.theme===Theme.LIGHT ? "white" : "#201F1C"};
 

    top: 0;
    left: 0;                
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;



// Modal LogOut
