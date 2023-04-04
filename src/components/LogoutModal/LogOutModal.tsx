import { ButtonContainer, ModalContainer, ModalContent, ModalMessage, ModalTitle, SubmitButton } from "./styledComponents";


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
                {/* <ModalTitle>Logout</ModalTitle> */}
                <ModalMessage>Are you sure you want to logout?</ModalMessage>
                <ButtonContainer>
                    <SubmitButton
                         types="Close"
                        onClick={onClose}>Cancel</SubmitButton>
                    <SubmitButton onClick={handleLogout}>Confirm</SubmitButton>
                </ButtonContainer>
            </ModalContent>
        </ModalContainer >
    );


};

export default LogoutModal;