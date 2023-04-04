import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import { API_FAILURE, Status, TRENDING } from "../../constants/constants";
import { TrendingVideoWithBanner } from "./styledComponents";
import TrendingVideosList from "../../components/TrendingVideosList/TrendingVideosList";
import VideoListBanner from "../../components/VideoListBanner/VideoListBanner";
import FailureScreen from "../../components/FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import Loader from "../../components/Loader";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
}


const Trending = inject("videoStore")(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    useEffect(() => {
        videoStore.fetchTrendingVideos();
    }, []);

    const toRenderTreandingVideos = () => {
        switch (videoStore.trendingVideosStatus) {
            case Status.SUCCESS:
                return <TrendingVideosList />
            case Status.ERROR:
                return <FailureScreen
                    failureType={API_FAILURE}
                    failureTitle="Oops! Something went wrong"
                    failureMessage="We are having some trouble to complete your request. Please try again."
                    onRetry={videoStore.fetchTrendingVideos}
                />
            case Status.LOADING:
                return <Loader />


        }
    }


    return (

        <>
            <TrendingVideoWithBanner>
                <VideoListBanner title={TRENDING} />
                {toRenderTreandingVideos()}
            </TrendingVideoWithBanner>

        </>





    );
}));
export default withHeaderAndSidebar(Trending);