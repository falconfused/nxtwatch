import { VideoStore } from "./VideoStore/index";
import { ThemeStore } from "./ThemeStore";
import { NavigationStore } from "./NavigationStore";
import { AuthStore } from "./AuthStore/AuthStore";


const videoStore = new VideoStore();
const themeStore = new ThemeStore();
const navigationStore = new NavigationStore();
const authStore = new AuthStore();
export  { videoStore, themeStore, navigationStore, authStore };