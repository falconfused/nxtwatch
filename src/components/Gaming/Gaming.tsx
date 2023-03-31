import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { GAMING, Status } from "../../constants/constants";
import {  GamingVideoWithBanner } from "./styledComponents";
import VideoListBanner from "../VideoListBanner";
import GamingVideosList from "../GamingVideosList";
import FailureScreen from "../FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}


const Gaming = inject("videoStore", 'navigationStore')(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    const { navigationStore } = props as injectedProps;
    useEffect(() => {
        videoStore.fetchGamingVideos();
        navigationStore.setCurrentRoute(GAMING);
    }, []);

    return (

        <>
                <GamingVideoWithBanner>
                    <VideoListBanner title={GAMING} />
                    {
                        videoStore.gamingVideosStatus === Status.SUCCESS &&
                        <GamingVideosList ></GamingVideosList>}
                    {
                        videoStore.gamingVideosStatus === Status.ERROR &&
                        <FailureScreen
                            failureType="API_FAILURE"
                            failureTitle="Oops! Something went wrong"
                            failureMessage="We are having some trouble to complete your request. Please try again."
                            onRetry={videoStore.fetchGamingVideos}
                        />
                    }
                    
                </GamingVideoWithBanner>
        </>
    );
}));
export default withHeaderAndSidebar(Gaming);