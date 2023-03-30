import { inject, observer } from "mobx-react";
import videoStore, { VideoStore } from "../../stores/VideoStore";
import { SelectedVideoBody, SelectedVideoContainer, SelectedVideoWithSideBar } from "./styledComponents";
import { NavigationStore } from "../../stores/NavigationStore";
import SelectedVideoPlayer from "../SelectedVideoPlayer/index";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import SelectedVideoPlayerOptions from "../SelectedVideoPlayerOptions";
interface SelectedVideoProps {
}
interface injectedProps extends SelectedVideoProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}

const SelectedVideo = inject(
    "videoStore",
    "navigationStore"
)(
    observer((props: SelectedVideoProps) => {
        const { videoStore } = props as injectedProps;
        const [selectedVideoisLiked, setSelectedVideoisLiked] = useState(false)
        const [selectedVideoisDisliked, setSelectedVideoisDisliked] = useState(false)
        const [selectedVideoisSaved, setSelectedVideoisSaved] = useState(false)


        const location = useLocation();
        const videoId = location.pathname.split("/")[2];
        useEffect(() => {
            videoStore.fetchSelectedVideoDetails(videoId);
        }, []);

        const toHandleLike = () => {
            videoStore.setLikedVideos();
            if (videoStore.likedVideosSet.has(videoId)) {
                setSelectedVideoisLiked(true)
            }
            else {
                setSelectedVideoisLiked(false)
            }
        }
        const toHandleDislike = () => {
            videoStore.setDislikedVideos();
            if (videoStore.dislikedVideosSet.has(videoId)) {
                setSelectedVideoisDisliked(true)
            }
            else {
                setSelectedVideoisDisliked(false)
            }
        }
        const toHandleSave = () => {
            videoStore.setSavedVideos();
            const hasId = videoStore.savedVideosList.some(obj => obj.id === videoId);

            if (hasId) {
                setSelectedVideoisSaved(true)
            }
            else {
                setSelectedVideoisSaved(false)
            }
        }
        return (

            <SelectedVideoContainer>
                <Header></Header>
                <SelectedVideoWithSideBar>
                    <SideBar />
                    <SelectedVideoBody>
                    <SelectedVideoPlayer />
                    <SelectedVideoPlayerOptions />
                    </SelectedVideoBody>
                        
                    
                </SelectedVideoWithSideBar>

            </SelectedVideoContainer>
        )
    }));

export default SelectedVideo;