import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore";
import SelectedVideoPlayer from "../../components/SelectedVideoPlayer";
import SelectedVideoPlayerOptions from "../../components/SelectedVideoPlayerOptions";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import SelectedVideoDescription from "../../components/SelectedVideoDescription";
import { SelectedVideoBody } from "./styledComponents";
interface SelectedVideoProps {
}
interface injectedProps extends SelectedVideoProps {
    videoStore: VideoStore;
}

const SelectedVideo = inject(
    "videoStore",
)(
    observer((props: SelectedVideoProps) => {
        return (
            <>
                <SelectedVideoBody>
                    <SelectedVideoPlayer />
                    <SelectedVideoPlayerOptions />
                    <SelectedVideoDescription />
                </SelectedVideoBody>
            </>

        )
    }));

export default withHeaderAndSidebar(SelectedVideo);