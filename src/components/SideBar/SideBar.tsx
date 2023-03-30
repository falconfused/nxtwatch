import { observer } from "mobx-react";
import { SideBarContainer, SideBarMenuContainer } from "./styledComponents";
import { inject } from "mobx-react";
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import SideBarMenu from "../SideBarMenu/index";
import SideBarContactUs from "../SideBarContactUs";
interface SideBarProps {

}

interface injectedProps extends SideBarProps {
    themeStore: ThemeStore;

}



const SideBar = inject("themeStore")(observer((props: SideBarProps) => {
    const { themeStore } = props as injectedProps;

    return (
        <SideBarContainer>
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