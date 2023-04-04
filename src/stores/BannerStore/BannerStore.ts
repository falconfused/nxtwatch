import { action, observable } from 'mobx';

class BannerStore {
    @observable bannerState: boolean = true;
    @action
    setBannerState = (state: boolean) => {
        this.bannerState = state;
    };

    @action
    clearBannerStore = () => {
        this.bannerState = true;
    }

}

export { BannerStore };
