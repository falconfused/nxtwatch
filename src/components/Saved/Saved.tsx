import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "../Home/styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { API_FAILURE, NO_SAVED_VIDEOS, SAVED, TRENDING } from "../../constants/constants";
import { SavedContainer, SavedVideoBody, SavedVideoWithBanner } from "./styledComponents";
import SavedVideosList from "../SavedVideosList/SavedVideosList";
import { VideoListBannerContainer } from "../VideoListBanner/styledComponents";
import VideoListBanner from "../VideoListBanner/VideoListBanner";
import FailureScreen from "../FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}


const Saved = inject("videoStore", 'navigationStore')(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    const { navigationStore } = props as injectedProps;
    useEffect(() => {

        navigationStore.setCurrentRoute(SAVED);
    }, []);

    return (

        <>
            <SavedVideoWithBanner>
                <VideoListBanner title={SAVED} />
                {videoStore.savedVideosList.length > 0 && <SavedVideosList ></SavedVideosList>}
                {
                    videoStore.savedVideosList.length === 0 &&
                    <FailureScreen
                        failureType={NO_SAVED_VIDEOS}
                        failureTitle="No Videos"
                        failureMessage="You have not saved any videos yet"

                    ></FailureScreen>
                }
            </SavedVideoWithBanner>

        </>


    );
}));
export default withHeaderAndSidebar(Saved);