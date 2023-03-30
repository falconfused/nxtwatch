import { action, observable } from 'mobx';
import { Theme } from '../../constants/constants';
class ThemeStore {
    @observable theme: Theme = Theme.LIGHT;
    @observable themeLight = {
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        activeColor: "#F3F6F9",
        bodyColor: "#F1F1F1",
        boxShadow: "0px 0px 0px 0px",
        primaryColor: "#F9F8F5",
        secondaryColor: "#353431",
        primaryTextColor: "black",
        secondaryTextColor: "white",
        primaryBorderColor: "black",
        optionActiveColor: "blue",

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


    }
    @action.bound
    onChangeTheme() {
        this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    }
}

const themeStore = new ThemeStore();
export default themeStore;
export { ThemeStore };