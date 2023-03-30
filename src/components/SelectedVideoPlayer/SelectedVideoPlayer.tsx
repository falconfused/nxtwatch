import { SelectedVideoPlayerContainer } from "./styledComponents";
import ReactPlayer from "react-player";
import videoStore from "../../stores/VideoStore";
import { observer } from "mobx-react";
import SelectedVideoPlayerOptions from "../SelectedVideoPlayerOptions";
const SelectedVideoPlayer = observer(() => {

    return (
        <SelectedVideoPlayerContainer>
            <ReactPlayer
                url={videoStore.selectedVideoDetails.videoUrl}
                width="100%"
                controls={true}
                playing={true}
                height="600px"
                playbackRate={1.0}
            ></ReactPlayer>
          
        </SelectedVideoPlayerContainer >

    )
})
export default SelectedVideoPlayer;