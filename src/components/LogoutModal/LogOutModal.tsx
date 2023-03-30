import { Button, ButtonContainer, ModalContainer, ModalContent, ModalMessage, ModalTitle } from "./styledComponents";


interface LogoutModalProps {
    show: boolean;
    handleLogOut: () => void;
    onClose: () => void;
}

const LogoutModal = ({ show, onClose, handleLogOut }: LogoutModalProps) => {
    const handleLogout = () => {

        handleLogOut();
    }
    return (
        <ModalContainer show={show}>
            <ModalContent>
                <ModalTitle>Logout</ModalTitle>
                <ModalMessage>Are you sure you want to logout?</ModalMessage>
                <ButtonContainer>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleLogout}>Logout</Button>
                </ButtonContainer>
            </ModalContent>
        </ModalContainer>
    );


};

export default LogoutModal;