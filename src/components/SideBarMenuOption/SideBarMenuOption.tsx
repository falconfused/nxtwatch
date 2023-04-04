import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarIcon, SideBarMenuOptionContainer, SideBarText } from "./styledComponents";
import {
    faHome
    , faFireFlameCurved,
    faGamepad
    ,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";

interface SideBarMenuOptionProps {
    handleOnClick: (route: string) => void;
    optionText: string;
    optionRoute: string;

}

const SideBarMenuOption = (props: SideBarMenuOptionProps) => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const changeRoute = () => () => {

        props.handleOnClick(props.optionRoute);

    }

    return (
        <SideBarMenuOptionContainer isActive={path} onClick={changeRoute()} optionRoute={props.optionRoute}  >
            <SideBarIcon>
                {props.optionText == "Home" &&
                    <FontAwesomeIcon icon={faHome}
                        color={props.optionRoute === path ? "red" : "none"}
                    />}
                {props.optionText == "Trending" &&
                    <FontAwesomeIcon icon={faFireFlameCurved}
                        color={props.optionRoute === path ? "red" : "none"}

                    />}
                {props.optionText == "Gaming" &&
                    <FontAwesomeIcon icon={faGamepad}
                        color={props.optionRoute === path ? "red" : "none"}

                    />}
                {props.optionText == "Saved" &&
                    <FontAwesomeIcon icon={faArrowDown}
                        color={props.optionRoute === path ? "red" : "none"}

                    />}
            </SideBarIcon>
            <SideBarText>
                {props.optionText}
            </SideBarText>

        </SideBarMenuOptionContainer>
    )
}
export default SideBarMenuOption;