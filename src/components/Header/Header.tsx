import { inject, observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
} from "@fortawesome/free-solid-svg-icons";

import { NXT_WATCH_LOGO_LIGHT, HEADER_PROFILE_IMAGE, NXT_WATCH_LOGO_DARK } from "../../constants/ImageUrl";
import { ThemeStore } from "../../stores/ThemeStore/ThemeStore";
import { Theme } from "../../constants/constants";
import { AuthStore } from "../../stores/AuthStore/AuthStore";
import ThemeButtonComponent from "../ThemeButtonComponent/ThemeButtonComponent";
import Modal from "../LogoutModal/index";
import { NxtWatchLogo } from "../LoginRoute/styledComponents";
import LogOut from "../LogOutButtton/LogOutButton";
import SideBarModal from "../SideBarModal";
import { HeaderContainer, HeaderOptions, HeaderOptionsMobile, ProfileImage } from "./styledComponents";


interface HeaderProps {
}
interface injectedProps extends HeaderProps {
    themeStore: ThemeStore;
    authStore: AuthStore;
}


const Header = inject("authStore", "themeStore")(observer((props: HeaderProps) => {

    const { themeStore } = props as injectedProps;
    const { authStore } = props as injectedProps;
    const theme = themeStore.theme;
    const [logoutModal, setLogoutModal] = useState(false);
    const [token, setToken] = useState(authStore.token);
    const [showSideBarInMobile, setShowSideBarInMobile] = useState(false);

    const toChangeSideBarShowStatus = () => {
        setShowSideBarInMobile(!showSideBarInMobile);
    }
    const navigate = useNavigate();


    useEffect(() => {

        if (token === undefined) {
            navigate("/");
        }
    }, [token]);

    const handleLogOut = () => {
        authStore.logout();
        setToken(authStore.token);
    }
    const updateLogoutModal = () => {
        setLogoutModal(!logoutModal);
    }
    const onChangeTheme = () => {
        themeStore.onChangeTheme();
    }
    return (
        <Fragment>
            <SideBarModal show={showSideBarInMobile} setSideBarState={setShowSideBarInMobile} />
            <HeaderContainer theme={theme}>
                <NxtWatchLogo src={theme === Theme.DARK ? NXT_WATCH_LOGO_DARK : NXT_WATCH_LOGO_LIGHT} alt="nxt watch logo" />
                <HeaderOptions>
                    <ThemeButtonComponent theme={theme} onChangeTheme={onChangeTheme}></ThemeButtonComponent>
                    <ProfileImage src={HEADER_PROFILE_IMAGE} alt="profile" />
                    <LogOut theme={theme} type={"desktop"} handleLogOut={updateLogoutModal}></LogOut>
                </HeaderOptions>

                <HeaderOptionsMobile>
                    <ThemeButtonComponent theme={theme} onChangeTheme={onChangeTheme}></ThemeButtonComponent>
                    <FontAwesomeIcon onClick={toChangeSideBarShowStatus} cursor="pointer" icon={faBars} size="lg" color={theme === Theme.LIGHT ? "#2021F" : "white"}></FontAwesomeIcon>
                    <LogOut theme={theme} type={"mobile"} handleLogOut={updateLogoutModal}></LogOut>
                </HeaderOptionsMobile>
            </HeaderContainer >
            <Modal show={logoutModal} onClose={() => setLogoutModal(false)} handleLogOut={handleLogOut} />
        </Fragment>

    )
}
)
)
export default Header;
