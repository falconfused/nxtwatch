import { inject, observer } from "mobx-react";
import { videoStore } from "../../stores";
import { VideoStore } from "../../stores/VideoStore";
import { SelectedVideoBody, SelectedVideoContainer, SelectedVideoWithSideBar } from "./styledComponents";
import { NavigationStore } from "../../stores/NavigationStore";
import SelectedVideoPlayer from "../SelectedVideoPlayer/index";
import Header from "../Header";
import SideBar from "../SideBar";
import SelectedVideoPlayerOptions from "../SelectedVideoPlayerOptions";
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import SelectedVideoDescription from "../SelectedVideoDescription";
interface SelectedVideoProps {
}
interface injectedProps extends SelectedVideoProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}

const SelectedVideo = inject(
    "videoStore",
    "navigationStore"
)(
    observer((props: SelectedVideoProps) => {
        return (
            <>
                <SelectedVideoBody>
                    <SelectedVideoPlayer />
                    <SelectedVideoPlayerOptions/>
                    
                    <SelectedVideoDescription />


                </SelectedVideoBody>
            </>

        )
    }));

export default withHeaderAndSidebar(SelectedVideo);