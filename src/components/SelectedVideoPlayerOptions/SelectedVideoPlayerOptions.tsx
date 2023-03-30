import { DISLIKE, LIKE, SAVE } from "../../constants/constants";
import videoStore from "../../stores/VideoStore";
import SelectedVideoOption from "../SelectedVideoOption";
import { SelectedVideoPlayerOptionsBottomContainer, SelectedVideoPlayerOptionsContainer, SelectedVideoPlayerOptionsLeftContainer, SelectedVideoPlayerOptionsRightContainer } from "./styledComponents";
import { observer } from "mobx-react";


const SelectedVideoPlayerOptions = observer(() => {
    return (
        <SelectedVideoPlayerOptionsContainer>
            {videoStore.selectedVideoDetails.title}

            <SelectedVideoPlayerOptionsBottomContainer>
                <SelectedVideoPlayerOptionsLeftContainer>
                    {videoStore.selectedVideoDetails.viewCount} views || {videoStore.selectedVideoDetails.publishedAt && videoStore.calculateTime(videoStore.selectedVideoDetails.publishedAt)} ago
                </SelectedVideoPlayerOptionsLeftContainer>
                <SelectedVideoPlayerOptionsRightContainer>
                    <SelectedVideoOption name={LIKE} />
                    <SelectedVideoOption name={DISLIKE} />
                    <SelectedVideoOption name={SAVE} />


                </SelectedVideoPlayerOptionsRightContainer>
            </SelectedVideoPlayerOptionsBottomContainer>

        </SelectedVideoPlayerOptionsContainer>
    )
})
export default SelectedVideoPlayerOptions;
