import { observer } from "mobx-react";
import ReactPlayer from "react-player";
import {videoStore} from "../../stores";
import { SelectedVideoPlayerContainer } from "./styledComponents";
const SelectedVideoPlayer = observer(() => {

    return (
        <SelectedVideoPlayerContainer>
            <ReactPlayer
                url={videoStore.selectedVideoDetails.videoUrl}
                width="90%"
                controls={true}
                playing={true}
                height="90%"
                playbackRate={1.0}
            ></ReactPlayer>

        </SelectedVideoPlayerContainer >

    )
})
export default SelectedVideoPlayer;