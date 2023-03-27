import { action, observable } from 'mobx';

class NavigationStore {
    @observable
    public currentRoute: string = '';

    @action
    public setCurrentRoute = (route: string) => {
        this.currentRoute = route;
    };
}
const navigationStore = new NavigationStore();
export default navigationStore;
export { NavigationStore };
