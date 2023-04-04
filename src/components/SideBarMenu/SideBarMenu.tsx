import {  observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import SideBarMenuOption from "../SideBarMenuOption/index";
import { SideBarMenuContainer } from "../SideBar/styledComponents";
import { GAMING, GAMING_PAGE_PATH, HOME, HOME_PAGE_PATH, SAVED, SAVED_PAGE_PATH, TRENDING, TRENDING_PAGE_PATH } from "../../constants/constants";

const SideBarMenu = (observer(() => {

    const navigate = useNavigate();


    


    const handleOnClick = (route: string) => {
        if (route === HOME) {
            navigate(HOME_PAGE_PATH);
        }
        else if (route === TRENDING) {
            navigate(TRENDING_PAGE_PATH);
        }
        else if (route === GAMING) {
            navigate(GAMING_PAGE_PATH);
        }
        else if (route === SAVED) {
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