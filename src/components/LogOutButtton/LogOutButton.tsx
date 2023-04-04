import { Fragment } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Theme } from "../../constants/constants";
import { LogOutButton } from "./styledComponents";
interface LogOutProps {
    theme: string
    type: string;
    handleLogOut: () => void;
}
const LogOut = (props: LogOutProps) => {

    return (
        <Fragment>
            {props.type === "desktop" && < LogOutButton theme={props.theme} onClick={props.handleLogOut}> Log Out</LogOutButton >}

            {props.type === "mobile" && <div onClick={props.handleLogOut}>
                < FontAwesomeIcon style={{ cursor: "pointer" }} color={props.theme === Theme.LIGHT ? "#2021F" : "white"} size="lg" icon={faArrowRightFromBracket} ></FontAwesomeIcon>
            </div>}

        </Fragment>
    )
}

export default LogOut;