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
  font-size: 18px;
  margin: 0 0 20px 0;
`;

export const ButtonContainer = styled.div`
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.primaryTextColor};
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: ${props => props.theme.backgroundColor};
  padding: 10px 20px;
  border: 1px solid ${props => props.theme.primaryTextColor};
  border-radius: 5px;
    color: ${props => props.theme.primaryTextColor};
  margin-left: 10px;
  cursor: pointer;
`;