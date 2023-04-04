import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import { DISLIKE, LIKE, SAVE } from "../../constants/constants";
import {videoStore} from "../../stores";
import SelectedVideoOption from "../SelectedVideoOption";
import { SelectedVideoPlayerOptionsBottomContainer, SelectedVideoPlayerOptionsContainer, SelectedVideoPlayerOptionsLeftContainer, SelectedVideoPlayerOptionsRightContainer } from "./styledComponents";

interface SelectedVideoPlayerOptionsProps {
    

}

const SelectedVideoPlayerOptions = observer((props: SelectedVideoPlayerOptionsProps) => {


    const [selectedVideoisLiked, setSelectedVideoisLiked] = useState(false)
    const [selectedVideoisDisliked, setSelectedVideoisDisliked] = useState(false)
    const [selectedVideoisSaved, setSelectedVideoisSaved] = useState(false)
    
    const location = useLocation();
    const videoId = location.pathname.split("/")[2];
    
    
    useEffect(() => {
        videoStore.fetchSelectedVideoDetails(videoId);
        if (videoStore.likedVideosSet.has(videoId)) {
            setSelectedVideoisLiked(true)
        }
        if (videoStore.dislikedVideosSet.has(videoId)) {
            setSelectedVideoisDisliked(true)
        }
        const hasId = videoStore.savedVideosList.some(obj => obj.id === videoId);
        if (hasId) {
            setSelectedVideoisSaved(true)
        }
    },[]);

    const toHandleLike = () => {
        videoStore.setLikedVideos();
        if (videoStore.likedVideosSet.has(videoId)) {
            setSelectedVideoisLiked(true)
            setSelectedVideoisDisliked(false)
        }
        else {
            setSelectedVideoisLiked(false)
        }
    }
    const toHandleDislike = () => {
        videoStore.setDislikedVideos();
        if (videoStore.dislikedVideosSet.has(videoId)) {
            setSelectedVideoisDisliked(true)
            setSelectedVideoisLiked(false)
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
        <SelectedVideoPlayerOptionsContainer>
            {videoStore.selectedVideoDetails.title}
            <SelectedVideoPlayerOptionsBottomContainer>
                <SelectedVideoPlayerOptionsLeftContainer>
                    {videoStore.selectedVideoDetails.viewCount} views || {videoStore.selectedVideoDetails.publishedAt && videoStore.calculateTime(videoStore.selectedVideoDetails.publishedAt)} ago
                </SelectedVideoPlayerOptionsLeftContainer>
                <SelectedVideoPlayerOptionsRightContainer >
                    <SelectedVideoOption name={LIKE} onClick={toHandleLike} isActive={selectedVideoisLiked} />
                    <SelectedVideoOption name={DISLIKE} onClick={toHandleDislike} isActive={selectedVideoisDisliked} />
                    <SelectedVideoOption name={SAVE} onClick={toHandleSave} isActive={selectedVideoisSaved} />


                </SelectedVideoPlayerOptionsRightContainer>
            </SelectedVideoPlayerOptionsBottomContainer>

        </SelectedVideoPlayerOptionsContainer>
    )
})
export default SelectedVideoPlayerOptions;
