import { observer } from "mobx-react";
import { SideBarContainer, SideBarMenuContainer } from "./styledComponents";
import { inject } from "mobx-react";
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import SideBarMenu from "../SideBarMenu/index";
import SideBarContactUs from "../SideBarContactUs";
import { navigationStore } from "../../stores";
import { NavigationStore } from "../../stores/NavigationStore";
interface SideBarProps {
    show?: boolean;
}

interface injectedProps extends SideBarProps {
    themeStore: ThemeStore;
    navigationStore: NavigationStore;
}



const SideBar = inject("themeStore", "navigationStore")(observer((props: SideBarProps) => {
    const { themeStore } = props as injectedProps;

    const { navigationStore } = props as injectedProps;
    // console.log(navigationStore.sideBarStateinMobile);
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