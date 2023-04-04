export enum Status {
    INITIAL = 'INITIAL',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',

}
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const HOME = 'home';
export const TRENDING = 'trending';
export const SAVED = 'saved';
export const GAMING = 'gaming';


export const HOME_PAGE_PATH = "/home";
export const TRENDING_PAGE_PATH = "/trending";
export const SAVED_PAGE_PATH = "/saved";
export const GAMING_PAGE_PATH = "/gaming";
export const LOGIN_PAGE_PATH = "/";
export const VIDEO_PAGE_PATH = "/video/:videoId";

export const SAVE = 'save';
export const LIKE = 'like';
export const DISLIKE = 'dislike';


export const API_FAILURE = 'API_FAILURE';
export const NO_RESULTS = 'NO_RESULTS';
export const NO_SAVED_VIDEOS = 'NO_SAVED_VIDEOS';

export const NOT_FOUND = 'NOT_FOUND';