import { NavigationStore } from "../../stores/NavigationStore/index";
import { inject, observer } from "mobx-react";
import SideBarMenuOption from "../SideBarMenuOption/index";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GAMING, GAMING_PAGE_PATH, HOME, HOME_PAGE_PATH, SAVED, SAVED_PAGE_PATH, TRENDING, TRENDING_PAGE_PATH } from "../../constants/constants";
import { SideBarMenuContainer } from "../SideBar/styledComponents";
interface SideBarMenuProps {

}
interface injectedProps extends SideBarMenuProps {
    navigationStore: NavigationStore;
}
const SideBarMenu = inject("navigationStore")(observer((props: SideBarMenuProps) => {

    const navigate = useNavigate();

    const { navigationStore } = props as injectedProps;
    useEffect(() => {
    }, [navigationStore.currentRoute]);


    const handleOnClick = (route: string) => {
        if (route === HOME) {
            navigationStore.setCurrentRoute(HOME);
            navigate(HOME_PAGE_PATH);
        }
        else if (route === TRENDING) {
            navigationStore.setCurrentRoute(TRENDING);
            navigate(TRENDING_PAGE_PATH);
        }
        else if (route === GAMING) {
            navigationStore.setCurrentRoute(GAMING);
            navigate(GAMING_PAGE_PATH);
        }
        else if (route === SAVED) {
            navigationStore.setCurrentRoute(SAVED);
            navigate(SAVED_PAGE_PATH);
        }

    }

    return (
        <SideBarMenuContainer>
            <SideBarMenuOption handleOnClick={handleOnClick} optionText="Home" optionRoute="home" />
            <SideBarMenuOption handleOnClick={handleOnClick} optionText="Trending" optionRoute="trending" />
            <SideBarMenuOption handleOnClick={handleOnClick} optionText="Gaming" optionRoute="gaming" />
            <SideBarMenuOption handleOnClick={handleOnClick} optionText="Saved" optionRoute="saved" />
        </SideBarMenuContainer>
    );
}));
export default SideBarMenu;