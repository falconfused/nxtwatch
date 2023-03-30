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
import { HOME } from "../../constants/constants";
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
            videoStore.searchInput = "";
            videoStore.fetchHomeVideos();
            navigationStore.setCurrentRoute(HOME);
        }, []);
        return (

            <HomeContainer>
                <Header ></Header>
                <HomeBodyContainer>
                    <SideBar></SideBar>
                    <HomeContainerWithBanner>
                        <HomeBanner></HomeBanner>
                        <HomeSearchBar></HomeSearchBar>
                        <HomeVideosList></HomeVideosList>
                    </HomeContainerWithBanner>
                </HomeBodyContainer>
            </HomeContainer>
        );
    }));
export default Home; 