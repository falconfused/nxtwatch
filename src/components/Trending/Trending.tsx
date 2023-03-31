import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "../Home/styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { API_FAILURE, Status, TRENDING } from "../../constants/constants";
import { TrendingContainer, TrendingVideoBody, TrendingVideoWithBanner } from "./styledComponents";
import TrendingVideosList from "../TrendingVideosList/TrendingVideosList";
import VideoListBanner from "../VideoListBanner/VideoListBanner";
import FailureScreen from "../FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}


const Trending = inject("videoStore", 'navigationStore')(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    const { navigationStore } = props as injectedProps;
    useEffect(() => {
        videoStore.fetchTrendingVideos();
        navigationStore.setCurrentRoute(TRENDING);
    }, []);

    return (

        <>
            <TrendingVideoWithBanner>
                <VideoListBanner title={TRENDING} />
                {videoStore.trendingVideosStatus === Status.SUCCESS &&
                    <TrendingVideosList></TrendingVideosList>}
                {
                    videoStore.trendingVideosStatus === Status.ERROR &&
                    <FailureScreen
                        failureType={API_FAILURE}
                        failureTitle="Oops! Something went wrong"
                        failureMessage="We are having some trouble to complete your request. Please try again."
                        onRetry={videoStore.fetchTrendingVideos}
                    ></FailureScreen>
                }
            </TrendingVideoWithBanner>

        </>





    );
}));
export default withHeaderAndSidebar(Trending);