import Cookies from "js-cookie";
import { observable, action, computed } from "mobx";
import { Status } from "../../constants/constants";
import VideosModel from "./models/VideosModel/VideosModel";
class VideoStore {
    @observable
    homeVideosList = [] as Array<VideosModel>;
    @observable
    trendingVideosList = [] as Array<VideosModel>;
    @observable
    gamingVideosList = [] as Array<VideosModel>;
    @observable
    savedVideosList = [] as Array<VideosModel>;
    @observable
    likedVideosSet = new Set();
    @observable
    dislikedVideosSet = new Set();
    @observable
    selectedVideoDetails = {} as VideosModel;
    @observable
    homeVideosStatus = Status.INITIAL;
    @observable
    trendingVideosStatus = Status.INITIAL;
    @observable
    gamingVideosStatus = Status.INITIAL;
    @observable
    selectedVideoStatus = Status.INITIAL;
    @observable
    searchInput = "";
    @observable
    selectedVideoId = "";





    @action setSearchInput = (value: string) => {
        this.searchInput = value;
    }


    @action
    setLikedVideos = () => {
        if (this.likedVideosSet.has(this.selectedVideoDetails.id)) {
            this.likedVideosSet.delete(this.selectedVideoDetails.id);
            return;
        }
        else {
            this.likedVideosSet.add(this.selectedVideoDetails.id);
            if (this.dislikedVideosSet.has(this.selectedVideoDetails.id))
                this.dislikedVideosSet.delete(this.selectedVideoDetails.id);
        }

    }


    @action
    setDislikedVideos = () => {
        if (this.dislikedVideosSet.has(this.selectedVideoDetails.id)) {
            this.dislikedVideosSet.delete(this.selectedVideoDetails.id);
            return;
        }
        this.dislikedVideosSet.add(this.selectedVideoDetails.id);
        if (this.likedVideosSet.has(this.selectedVideoDetails.id))
            this.likedVideosSet.delete(this.selectedVideoDetails.id);
    }


    @action
    setSavedVideos = () => {
        if (this.savedVideosList.some(obj => obj.id === this.selectedVideoDetails.id)) {
            this.savedVideosList = this.savedVideosList.filter((obj) => obj.id !== this.selectedVideoDetails.id)
            return;
        }
        this.savedVideosList.push(this.selectedVideoDetails);
    }




    @action
    fetchHomeVideos = async () => {
        this.homeVideosStatus = Status.LOADING;
        const url = "https://apis.ccbp.in/videos/all";
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }
        };


        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (response.ok) {
                this.homeVideosStatus = Status.SUCCESS;
                if (this.searchInput.length > 0) {
                    let addedVideoList = data.videos.filter((eachVideo: any) => eachVideo.title.toLowerCase().includes(this.searchInput.toLowerCase()));
                    this.homeVideosList = [];
                    for (let i = 0; i < addedVideoList.length; i++) {
                        this.homeVideosList = [...this.homeVideosList, new VideosModel(addedVideoList[i])];
                    }
                }
                else {
                    this.homeVideosList = [];
                    for (let i = 0; i < data.total; i++) {
                        this.homeVideosList = [...this.homeVideosList, new VideosModel(data.videos[i])];
                    }

                }
            }
        } catch (error) {
            this.homeVideosStatus = Status.ERROR;

        }
        ;




    }

    @action
    fetchTrendingVideos = async () => {
        this.trendingVideosStatus = Status.LOADING;
        const url = "https://apis.ccbp.in/videos/trending";
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {

                this.trendingVideosStatus = Status.SUCCESS;
                this.trendingVideosList = [];
                for (let i = 0; i < data.videos.length; i++) {
                    this.trendingVideosList = [...this.trendingVideosList, new VideosModel(data.videos[i])];
                }
            }
        } catch (error) {
            this.trendingVideosStatus = Status.ERROR;

        }


    }
    @action
    fetchGamingVideos = async () => {
        this.gamingVideosStatus = Status.LOADING;
        const url = "https://apis.ccbp.in/videos/gaming";
        const options = {

            method: "GET",
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }

        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();

            if (response.ok) {
                this.gamingVideosStatus = Status.SUCCESS;
                this.gamingVideosList = [];
                for (let i = 0; i < data.videos.length; i++) {
                    this.gamingVideosList = [...this.gamingVideosList, new VideosModel(data.videos[i])];
                }
            }
        } catch (error) {
            this.gamingVideosStatus = Status.ERROR;
        }


    }
    @action
    fetchSelectedVideoDetails = async (id: string) => {
        this.selectedVideoStatus = Status.LOADING;
        const url = `https://apis.ccbp.in/videos/${id}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt_token')}`
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (response.ok) {
                this.selectedVideoId = data.video_details.id;
                this.selectedVideoStatus = Status.SUCCESS;
                this.selectedVideoDetails = new VideosModel(data.video_details);
            }
        } catch (error) {

            this.selectedVideoStatus = Status.ERROR;

        }


    }
    @action
    calculateTime(publishedAt: string) {
        const dateString = publishedAt;
        const date = new Date(dateString);
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - date.getTime();
        const millisecondsInYear = 31536000000;
        const millisecondsInMonth = 2592000000;
        const millisecondsInWeek = 604800000;
        const millisecondsInDay = 86400000;
        let finalTimeDifference;
        if (timeDiff >= millisecondsInYear) {
            const years = Math.floor(timeDiff / millisecondsInYear);
            finalTimeDifference = `${years} year${years > 1 ? 's' : ''}`;
        } else if (timeDiff >= millisecondsInMonth) {
            const months = Math.floor(timeDiff / millisecondsInMonth);
            finalTimeDifference = `${months} month${months > 1 ? 's' : ''}`;
        } else if (timeDiff >= millisecondsInWeek) {
            const weeks = Math.floor(timeDiff / millisecondsInWeek);
            finalTimeDifference = `${weeks} week${weeks > 1 ? 's' : ''}`;
        } else {
            const days = Math.floor(timeDiff / millisecondsInDay);
            finalTimeDifference = `${days} day${days > 1 ? 's' : ''}`;
        }

        return finalTimeDifference;
    }
    @action
    clearVideoStore = () => {
        this.homeVideosList = [] as VideosModel[];
        this.trendingVideosList = [] as VideosModel[];
        this.gamingVideosList = [] as VideosModel[];
        this.selectedVideoDetails = {} as VideosModel;
        this.selectedVideoId = "";
        this.searchInput = "";
        this.savedVideosList = [] as VideosModel[];
        this.likedVideosSet = new Set();
        this.dislikedVideosSet = new Set();
    }

}
export { VideoStore };