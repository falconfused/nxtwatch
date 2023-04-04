import styled from "styled-components";
export const ModalContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 5px;
  padding: 20px;
`;

export const ModalTitle = styled.h2`
color: ${props => props.theme.primaryTextColor};
background-color: ${props => props.theme.backgroundColor};
  font-size: 24px;
  margin: 0 0 20px 0;
`;

export const ModalMessage = styled.p`
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.primaryTextColor};
  font-size: 16px;
  margin: 0 0 20px 0;
`;

export const ButtonContainer = styled.div`
padding: 20px;
padding-top: 0px;
padding-bottom: 0px;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.primaryTextColor};
  display: flex;
  justify-content: flex-end;
`;

interface ButtonProps {
  types?: string;
}

export const SubmitButton = styled.button<ButtonProps>`
    width: 50%;
    height: 40px;
    border-radius: 4px;
    /* background-color: ; */
    /* color: ; */
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    border:1px solid ${props => (props.types && props.types === "Close")? props.theme.primaryTextColor: "none"};
    background-color:${props => (props.types && props.types === "Close")? "transparent": "#352fe2"};
    color:${props => (props.types && props.types === "Close")? props.theme.primaryTextColor: "#ffffff"};
    margin-top: 20px;
    margin-bottom: 20px;
    margin: 10px;
`;