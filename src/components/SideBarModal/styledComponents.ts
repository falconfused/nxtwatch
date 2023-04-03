import styled from 'styled-components';

interface SideBarModalProps {
  show: boolean;
}

export const SideBarModalWrapper = styled.div<SideBarModalProps>`
  position: fixed;
  padding: 0px;
  margin: 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  @media (max-width: 768px)
{
display: ${props => (props.show ? 'flex' : 'none')};
  }
  /* display: ${props => (props.show ? 'flex' : 'none')}; */
  justify-content: center;
  align-items: flex-start;
`;

export const SideBarModalContent = styled.div`
  width: 100%;
  /* max-width: 600px; */
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: top 0.3s ease-out;
`;

