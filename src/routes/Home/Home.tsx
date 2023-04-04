import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import HomeBanner from "../../components/HomeBanner";
import HomeVideosList from "../../components/HomeVideosList";
import { API_FAILURE, HOME, NO_RESULTS, Status } from "../../constants/constants";
import FailureScreen from "../../components/FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { HomeContainerWithBanner } from "./styledComponents";
interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
}
const Home = inject
    ('videoStore')
    (observer((props: HomeProps) => {
        const { videoStore } = props as injectedProps;
        useEffect(() => {
            videoStore.fetchHomeVideos();
            videoStore.searchInput = "";
        }, []);

        const toRenderHome = () => {
            switch (videoStore.homeVideosStatus) {
                case Status.SUCCESS:
                    if (videoStore.homeVideosList.length > 0) return <HomeVideosList />
                    else
                        return <FailureScreen
                            failureType={NO_RESULTS}
                            failureTitle="No results found"
                            failureMessage="We could not find any results matching your search"
                            onRetry={videoStore.fetchHomeVideos}
                        />

                case Status.ERROR:
                    return <FailureScreen
                        failureType={API_FAILURE}
                        failureTitle="Oops! Something went wrong"
                        failureMessage="We are having some trouble to complete your request. Please try again."
                        onRetry={videoStore.fetchHomeVideos}
                    />
                case Status.LOADING:
                    return <Loader />
                default:
                    return <div>default</div>
            }
        }


        return (

            <>
                <HomeContainerWithBanner>
                    <HomeBanner />
                    <SearchBar
                        onClickSearch={videoStore.fetchHomeVideos}
                    />
                    {toRenderHome()}

                </HomeContainerWithBanner>

            </>
        );
    }));
export default withHeaderAndSidebar(Home); 