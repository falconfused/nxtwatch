import { action, observable } from 'mobx';

class NavigationStore {
    @observable
    public currentRoute: string = '';

    // @observable
    //  sideBarStateinMobile: boolean = false;

    @observable bannerState: boolean = true;


    // @action
    // setSideBarState = (state: boolean) => {
    //     this.sideBarStateinMobile = state;
    // };


    @action
    setBannerState = (state: boolean) => {
        this.bannerState = state;
    };

    @action
    public setCurrentRoute = (route: string) => {
        this.currentRoute = route;
    };
}

export { NavigationStore };
