import { useEffect } from "react";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import { NO_SAVED_VIDEOS, SAVED } from "../../constants/constants";
import SavedVideosList from "../../components/SavedVideosList/SavedVideosList";
import VideoListBanner from "../../components/VideoListBanner";
import FailureScreen from "../../components/FailureScreen";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import { SavedVideoWithBanner } from "./styledComponents";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
}


const Saved = inject("videoStore")(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    useEffect(() => {

    }, []);

    const toRenderSavedVideos = () => {
        switch (videoStore.savedVideosList.length) {

            case 0:
                return <FailureScreen
                    failureType={NO_SAVED_VIDEOS}
                    failureTitle="No Videos"
                    failureMessage="You have not saved any videos yet"

                />
            default:
                return <SavedVideosList />
        }
    }
    return (

        <>
            <SavedVideoWithBanner>
                <VideoListBanner title={SAVED} />
                {toRenderSavedVideos()}
            </SavedVideoWithBanner>

        </>


    );
}));
export default withHeaderAndSidebar(Saved);