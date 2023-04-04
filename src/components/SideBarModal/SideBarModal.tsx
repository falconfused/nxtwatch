import SideBar from "../SideBar/SideBar";
import { SideBarModalContent, SideBarModalWrapper } from "./styledComponents"

interface SideBarModalProps {
    show: boolean;
    setSideBarState: (state: boolean) => void;
}

const SideBarModal = (props: SideBarModalProps) => {

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            props.setSideBarState(false);
        }
    };
    return (
        <SideBarModalWrapper show={props.show} onClick={closeModal} >
            <SideBarModalContent>{
                <SideBar show={props.show} />
            }</SideBarModalContent>
        </SideBarModalWrapper>

    );
}
export default SideBarModal;