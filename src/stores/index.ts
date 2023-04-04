import { VideoStore } from "./VideoStore/index";
import { ThemeStore } from "./ThemeStore";
import { BannerStore } from "./BannerStore";
import { AuthStore } from "./AuthStore/AuthStore";


const videoStore = new VideoStore();
const themeStore = new ThemeStore();
const bannerStore = new BannerStore();
const authStore = new AuthStore();
export { videoStore, themeStore, bannerStore, authStore };