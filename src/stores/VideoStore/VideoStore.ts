import Cookies from "js-cookie";
import { observable, action, computed } from "mobx";
import { Status } from "../../constants/constants";
import VideosModel from "./models/homeVideosModel/VideosModel";
class VideoStore {
    @observable
    homeVideosList = [] as Array<VideosModel>;
    @observable
    trendingVideosList = [] as Array<VideosModel>;
    @observable
    gamingVideosList = [] as Array<VideosModel>;
    @observable
    savedVideosList: Array<String> = [];
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
        console.log("this.likedVideosSet")
        if (this.likedVideosSet.has(this.selectedVideoId)) {
            this.likedVideosSet.delete(this.selectedVideoId);
            return;
        }
        this.likedVideosSet.add(this.selectedVideoId);
        if (this.dislikedVideosSet.has(this.selectedVideoId))
            this.dislikedVideosSet.delete(this.selectedVideoId);
        console.log("1", this.likedVideosSet)
    }


    @action
    setDislikedVideos = () => {
        console.log(this.dislikedVideosSet)
        if (this.dislikedVideosSet.has(this.selectedVideoId)) {
            this.dislikedVideosSet.delete(this.selectedVideoId);
            return;
        }
        this.dislikedVideosSet.add(this.selectedVideoId);
        if (this.likedVideosSet.has(this.selectedVideoId))
            this.likedVideosSet.delete(this.selectedVideoId);
    }


    @action
    setSavedVideos = () => {
        console.log(this.savedVideosList)
        if (this.savedVideosList.includes(this.selectedVideoDetails.id)) {
            this.savedVideosList = this.savedVideosList.filter((eachVideoId) => eachVideoId !== this.selectedVideoDetails.id)
            return;
        }
        this.savedVideosList.push(this.selectedVideoDetails.id);
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
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)
        if (response.ok) {
            this.homeVideosStatus = Status.SUCCESS;
            if (this.searchInput.length > 0) {
                let addedVideoList = data.videos.filter((eachVideo: any) => eachVideo.title.toLowerCase().includes(this.searchInput.toLowerCase()));
                for (let i = 0; i < addedVideoList.length; i++) {
                    this.homeVideosList = [...this.homeVideosList, new VideosModel(addedVideoList[i])];
                }
            }
            else {

                for (let i = 0; i < data.total; i++) {
                    this.homeVideosList = [...this.homeVideosList, new VideosModel(data.videos[i])];
                }
                console.log(this.homeVideosList)

            }
        }
        else {
            this.homeVideosStatus = Status.ERROR;
        }

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
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)

        if (response.ok) {

            this.trendingVideosStatus = Status.SUCCESS;
            for (let i = 0; i < data.videos.length; i++) {
                this.trendingVideosList = [...this.trendingVideosList, new VideosModel(data.videos[i])];
            }
        }
        else {
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
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data)

        if (response.ok) {
            this.gamingVideosStatus = Status.SUCCESS;
            for (let i = 0; i < data.videos.length; i++) {
                this.gamingVideosList = [...this.gamingVideosList, new VideosModel(data.videos[i])];
            }
        }
        else {
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
        const response = await fetch(url, options);

        const data = await response.json();
        console.log(data.video_details, "video details")


        if (response.ok) {
            this.selectedVideoId = data.video_details.id;
            this.selectedVideoStatus = Status.SUCCESS;
            this.selectedVideoDetails = data.video_details;

        }
        else {
            this.selectedVideoStatus = Status.ERROR;
        }

    }

    @computed
    get savedVideosLists() {
        console.log(this.savedVideosList)
        // return "hey";
        const filteredData = this.homeVideosList.filter(item => this.savedVideosList.includes(item.id));
        console.log(filteredData)
        return filteredData;
    }


    @computed
    get calculateTime() {
        const dateString = this.selectedVideoDetails.publishedAt;
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

}
const videoStore = new VideoStore();
export default videoStore;
export { VideoStore };