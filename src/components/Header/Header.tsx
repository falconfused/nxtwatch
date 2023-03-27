import { inject, observer } from "mobx-react";
import { ThemeStore } from "../../stores/ThemeStore/ThemeStore";
import { AuthStore } from "../../stores/AuthStore/AuthStore";
import { Fragment, useEffect, useState } from "react";
import ThemeButtonComponent from "../ThemeButtonComponent/ThemeButtonComponent";
import { NxtWatchLogo } from "../LoginRoute/styledComponents";
import { NXT_WATCH_LOGO_LIGHT, HEADER_PROFILE_IMAGE, NXT_WATCH_LOGO_DARK } from "../../constants/ImageUrl";
import { HeaderContainer, HeaderOptions, HeaderOptionsMobile, ProfileImage } from "./styledComponents";
import LogOut from "../LogOutButtton/LogOutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

import { Theme } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
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
    console.log(themeStore.theme)
    const [token, setToken] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        console.log(token)
        if (token == undefined) {
            navigate('/');
        }
    }, [token]);


    const handleLogOut = () => {
        authStore.logout();
    }
    const onChangeTheme = () => {
        themeStore.onChangeTheme();
    }
    return (
        <HeaderContainer theme={theme}>
            <NxtWatchLogo src={theme === Theme.DARK ? NXT_WATCH_LOGO_DARK : NXT_WATCH_LOGO_LIGHT} alt="nxt watch logo" />
            <HeaderOptions>
                <ThemeButtonComponent theme={theme} onChangeTheme={onChangeTheme}></ThemeButtonComponent>
                <ProfileImage src={HEADER_PROFILE_IMAGE} alt="profile" />
                <LogOut theme={theme} type={"desktop"} handleLogOut={handleLogOut}></LogOut>
            </HeaderOptions>
            <HeaderOptionsMobile>
                <ThemeButtonComponent theme={theme} onChangeTheme={onChangeTheme}></ThemeButtonComponent>
                <FontAwesomeIcon icon={faBars} size="lg" color={theme === Theme.LIGHT ? "#2021F" : "white"}></FontAwesomeIcon>
                <LogOut theme={theme} type={"mobile"} handleLogOut={handleLogOut}></LogOut>


            </HeaderOptionsMobile>
        </HeaderContainer >
    )
}
)
)
export default Header;
