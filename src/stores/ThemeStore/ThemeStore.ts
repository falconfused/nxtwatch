import { action, observable } from 'mobx';

class ThemeStore {
    @observable theme = 'light';
    @action.bound
    onChangeTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
}

const themeStore = new ThemeStore();
export default themeStore;
export { ThemeStore };