import { SideBarIcon, SideBarMenuOptionContainer, SideBarText } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome
    , faFireFlameCurved,
    faGamepad
    ,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import navigationStore from "../../stores/NavigationStore";

interface SideBarMenuOptionProps {
    handleOnClick: (route: string) => void;
    optionText: string;
    optionRoute: string;

}

const SideBarMenuOption = (props: SideBarMenuOptionProps) => {

    const changeRoute = () => () => {

        props.handleOnClick(props.optionRoute);

    }

    return (
        <SideBarMenuOptionContainer isActive={navigationStore.currentRoute} onClick={changeRoute()} optionRoute={props.optionRoute}  >
            <SideBarIcon>
                {props.optionText == "Home" &&
                    <FontAwesomeIcon icon={faHome}
                        color={props.optionRoute === navigationStore.currentRoute ? "red" : "none"}
                    />}
                {props.optionText == "Trending" &&
                    <FontAwesomeIcon icon={faFireFlameCurved}
                        color={props.optionRoute === navigationStore.currentRoute ? "red" : "none"}

                    />}
                {props.optionText == "Gaming" &&
                    <FontAwesomeIcon icon={faGamepad}
                        color={props.optionRoute === navigationStore.currentRoute ? "red" : "none"}

                    />}
                {props.optionText == "Saved" &&
                    <FontAwesomeIcon icon={faArrowDown}
                        color={props.optionRoute === navigationStore.currentRoute ? "red" : "none"}

                    />}
            </SideBarIcon>
            <SideBarText>
                {props.optionText}
            </SideBarText>

        </SideBarMenuOptionContainer>
    )
}
export default SideBarMenuOption;