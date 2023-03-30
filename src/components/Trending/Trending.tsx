import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "../Home/styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { TRENDING } from "../../constants/constants";
import { TrendingContainer, TrendingVideoBody, TrendingVideoWithBanner } from "./styledComponents";
import TrendingVideosList from "../TrendingVideosList/TrendingVideosList";
import { VideoListBannerContainer } from "../VideoListBanner/styledComponents";
import VideoListBanner from "../VideoListBanner/VideoListBanner";

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

        <TrendingContainer>
            <Header ></Header>

            <TrendingVideoBody>
                <SideBar></SideBar>
                <TrendingVideoWithBanner>
                    <VideoListBanner title={TRENDING} />
                    <TrendingVideosList ></TrendingVideosList>
                </TrendingVideoWithBanner>



            </TrendingVideoBody>


        </TrendingContainer>
    );
}));
export default Trending;