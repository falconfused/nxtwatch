import { inject, observer } from "mobx-react";
import { Fragment } from "react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import { HEADER_LIGHT_THEME, HEADER_DARK_THEME } from "../../constants/ImageUrl";
import { ThemeButton } from "./styledComponents";


interface ThemeButtonProps {
    theme: string;
    onChangeTheme: () => void;

}

interface injectedThemeProps extends ThemeButtonProps {
    videoStore: VideoStore;
}
const ThemeButtonComponent = inject("videoStore")(observer((props: ThemeButtonProps) => {

    const { videoStore } = props as injectedThemeProps;
    const theme = props.theme;
    const imgUrl = theme === "light" ? HEADER_LIGHT_THEME : HEADER_DARK_THEME;
    return (
        <Fragment>
            <ThemeButton src={imgUrl} onClick={props.onChangeTheme} alt="sdf " />

        </Fragment>
    );
}));
export default ThemeButtonComponent;