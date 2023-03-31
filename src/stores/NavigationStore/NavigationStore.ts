import { action, observable } from 'mobx';

class NavigationStore {
    @observable
    public currentRoute: string = '';



    @observable bannerState: boolean = true;

    @action
    setBannerState = (state: boolean) => {
        this.bannerState = state;
    };

    @action
    public setCurrentRoute = (route: string) => {
        this.currentRoute = route;
    };
}

export { NavigationStore};
