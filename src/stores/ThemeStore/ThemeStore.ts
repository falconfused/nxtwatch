import { action, observable } from 'mobx';
import { Theme } from '../../constants/constants';
class ThemeStore {
    @observable theme: Theme = Theme.LIGHT;
    @observable themeLight = {
        backgroundColor: "white",
        borderColor: "black",
        activeColor: "#F3F6F9",
        bodyColor: "#F1F1F1",
        primaryColor: "#F9F8F5",
        primaryTextColor: "black",
        primaryBorderColor: "black",
        optionActiveColor: "blue",
        searchIconColor: "#F3F2F1"

    }
    @observable themeDark = {
        backgroundColor: "#201F1C",
        color: "white",
        activeColor: "#373432",
        bodyColor: "#0E0D0A",
        primaryColor: "#171613",
        borderColor: "white",
        boxShadow: "0px 0px 0px 0px",
        secondaryColor: "#f5f5f5",
        primaryTextColor: "white",
        secondaryTextColor: "black",
        primaryBorderColor: "white",
        optionActiveColor: "blue",
        searchIconColor: "#383736",



    }
    @action.bound
    onChangeTheme() {
        this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    }
}


export { ThemeStore };