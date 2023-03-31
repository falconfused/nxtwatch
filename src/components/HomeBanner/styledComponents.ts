import styled from "styled-components";
import { HOME_BANNER_IMAGE } from "../../constants/ImageUrl";


export const HomeBannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    background-color: white;

    width: 100%;
    color: black;
    /* height:  1800px;   */
    @media (max-width: 576px) {
        display: flex;
        flex-direction: row;
        justify-content: start;

        margin: auto;
    }
    margin-bottom: 0px;
    `;


export const HomeBannerRightContainer = styled.div`
    display: flex;
    background-image: url( 
    ${HOME_BANNER_IMAGE});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center  ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
        @media (max-width: 576px) {
        display: none;
        }
    `;

export const HomeBannerLeftContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 20px;

    background: none;
    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        
        width:100%;}

    
    `;

export const HomeBannerHeading = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    background-color: transparent;
    `;
export const HomeBannerDescription = styled.p`
    font-size: 1.5rem;
    background-color: transparent;
    font-weight: 400;
    `;

export const Button = styled.button`
  font-size: 18px;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
  background-color: white;
  width: 130px;
  height: 40px;
  border: 1px solid black;
  
    color: black;
  margin-left: 10px;
  cursor: pointer;
`;

// HomeBannerContainer, HomeBannerContent, HomeBannerDescription,  HomeBannerHeading,