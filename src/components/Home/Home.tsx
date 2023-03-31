import { useEffect } from "react";
import Header from "../Header/Header";
import { HomeBodyContainer, HomeContainer, HomeContainerWithBanner } from "./styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import HomeBanner from "../HomeBanner";
import HomeSearchBar from "../HomeSearchBar";
import HomeVideosList from "../HomeVideosList/index";
import { API_FAILURE, HOME, NO_RESULTS, Status } from "../../constants/constants";
import FailureScreen from "../FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}
const Home = inject
    ("videoStore", 'navigationStore')
    (observer((props: HomeProps) => {
        const { videoStore } = props as injectedProps;
        const { navigationStore } = props as injectedProps;
        useEffect(() => {
            videoStore.fetchHomeVideos();
            navigationStore.setCurrentRoute(HOME);
        }, []);
        return (

            <>
                    <HomeContainerWithBanner>
                        <HomeBanner></HomeBanner>
                        {videoStore.homeVideosStatus === Status.SUCCESS && <><HomeSearchBar></HomeSearchBar>
                            <HomeVideosList></HomeVideosList></>}
                        {videoStore.homeVideosStatus === Status.ERROR && <FailureScreen
                            failureType={API_FAILURE}
                            failureTitle="Oops! Something went wrong"
                            failureMessage="We are having some trouble to complete your request. Please try again."
                            onRetry={videoStore.fetchHomeVideos}
                        ></FailureScreen>}
                        {(videoStore.homeVideosStatus === Status.SUCCESS && videoStore.homeVideosList.length === 0) && <FailureScreen
                            failureType={NO_RESULTS}
                            failureTitle="No results found"
                            failureMessage="We could not find any results matching your search"
                            onRetry={videoStore.fetchHomeVideos}
                        ></FailureScreen>}

                    </HomeContainerWithBanner>
                
            </>
        );
    }));
export default withHeaderAndSidebar(Home); 