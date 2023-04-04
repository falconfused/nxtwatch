import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { inject } from "mobx-react";
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import SideBarMenu from "../SideBarMenu/index";
import SideBarContactUs from "../SideBarContactUs";
import { SideBarContainer, SideBarMenuContainer } from "./styledComponents";
interface SideBarProps {
    show?: boolean;
}

interface injectedProps extends SideBarProps {
    themeStore: ThemeStore;
}



const SideBar = (observer((props: SideBarProps) => {




    return (

        <SideBarContainer show={props.show}>
            <SideBarMenuContainer >
                <SideBarMenu />
            </SideBarMenuContainer>

            <SideBarContactUs />
        </SideBarContainer>


    );
}
)
);
export default SideBar;