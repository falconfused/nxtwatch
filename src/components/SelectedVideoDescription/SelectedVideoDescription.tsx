import { useEffect } from "react";
import { videoStore } from "../../stores";
import { SelectedProfileImage, SelectedVideoDescriptionContainer, SelectedVideoDescriptionRightContainer, VideoDescription, VideoSubscribers, VideoTitle } from "./styledComponents";
import { observer } from "mobx-react";

const SelectedVideoDescription = observer(() => {
  
    const channelName = videoStore.selectedVideoDetails.channel && videoStore.selectedVideoDetails.channel.name;
    const subscribers = videoStore.selectedVideoDetails.channel && videoStore.selectedVideoDetails.channel.subscriberCount;
    const profileImage = videoStore.selectedVideoDetails.channel && videoStore.selectedVideoDetails.channel.profileImageUrl;
    const videoDescription = videoStore.selectedVideoDetails.description;
    console.log(videoStore.selectedVideoDetails.description);

    return (
        <SelectedVideoDescriptionContainer>

            <SelectedProfileImage src={profileImage} />

            <SelectedVideoDescriptionRightContainer>
                <VideoTitle>{channelName}</VideoTitle>
                <VideoSubscribers>{subscribers}</VideoSubscribers>
                <VideoDescription>{ videoDescription}</VideoDescription>
            </SelectedVideoDescriptionRightContainer>

        </SelectedVideoDescriptionContainer>
    );
});

export default SelectedVideoDescription;