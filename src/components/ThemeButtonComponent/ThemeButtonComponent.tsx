import { inject, observer } from "mobx-react";
import { Fragment } from "react";
import { HEADER_LIGHT_THEME, HEADER_DARK_THEME } from "../../constants/ImageUrl";
import { ThemeButton } from "./styledComponents";


interface ThemeButtonComponentProps {
    theme: string;
    onChangeTheme: () => void;
}
const ThemeButtonComponent = (observer((props: ThemeButtonComponentProps) => {

    const theme = props.theme;
    const imgUrl = theme === "light" ? HEADER_LIGHT_THEME : HEADER_DARK_THEME;
    return (
        <Fragment>
            <ThemeButton src={imgUrl} onClick={props.onChangeTheme} alt="sdf " />

        </Fragment>
    );
}));
export default ThemeButtonComponent;