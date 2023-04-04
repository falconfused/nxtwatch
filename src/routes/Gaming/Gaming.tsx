import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import { GAMING, Status } from "../../constants/constants";
import VideoListBanner from "../../components/VideoListBanner";
import GamingVideosList from "../../components/GamingVideosList";
import FailureScreen from "../../components/FailureScreen";
import Loader from "../../components/Loader";
import { GamingVideoWithBanner } from "./styledComponents";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
}


const Gaming = inject("videoStore")(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    useEffect(() => {
        videoStore.fetchGamingVideos();
    }, []);
    const toRenderGamingVideos = () => {
        switch (videoStore.gamingVideosStatus) {
            case Status.SUCCESS:
                return <GamingVideosList />
            case Status.ERROR:
                return <FailureScreen
                    failureType="API_FAILURE"
                    failureTitle="Oops! Something went wrong"
                    failureMessage="We are having some trouble to complete your request. Please try again."
                    onRetry={videoStore.fetchGamingVideos}
                />
            case Status.LOADING:
                return <Loader />
        }
    }

    return (

        <>
            <GamingVideoWithBanner>
                <VideoListBanner title={GAMING} />
                {
                    videoStore.gamingVideosStatus === Status.SUCCESS &&
                    <GamingVideosList ></GamingVideosList>}

                {toRenderGamingVideos()}

            </GamingVideoWithBanner>
        </>
    );
}));
export default withHeaderAndSidebar(Gaming);