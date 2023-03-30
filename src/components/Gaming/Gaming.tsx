import { useEffect } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "../Home/styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { GAMING } from "../../constants/constants";
import { GamingContainer, GamingVideoBody, GamingVideoWithBanner } from "./styledComponents";
import VideoListBanner from "../VideoListBanner";
import GamingVideosList from "../GamingVideosList";

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

        <GamingContainer>
            <Header ></Header>

            <GamingVideoBody>
                <SideBar></SideBar>
                <GamingVideoWithBanner>
                    <VideoListBanner  title={GAMING} />
                    <GamingVideosList ></GamingVideosList>
                </GamingVideoWithBanner>



            </GamingVideoBody>


        </GamingContainer>
    );
}));
export default Gaming;