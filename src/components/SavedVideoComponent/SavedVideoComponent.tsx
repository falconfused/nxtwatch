import {videoStore }from "../../stores";
import { SavedVideoContainer, SavedVideoDescription, SavedVideoDetailsContainer, SavedVideoImage, SavedVideoProfileImage, SavedVideoPublishedAt, SavedVideoRightContainer, SavedVideosLink, SavedVideoTitle } from "./styledComponents";

const SavedVideoComponent = (props: any) => {

    const { video } = props;
    const onclickVideo = () => {
        videoStore.fetchSelectedVideoDetails(video.id);
    }



    return (
        <SavedVideoContainer onClick={onclickVideo} >

            <SavedVideosLink to={`/video/${video.id}`} >

                <SavedVideoImage src={video.thumbnailUrl}></SavedVideoImage>
                <SavedVideoRightContainer>
                    <SavedVideoDetailsContainer>
                        <SavedVideoTitle>{video.title}</SavedVideoTitle>
                        <SavedVideoDescription>{video.channel.name}</SavedVideoDescription>
                        <SavedVideoPublishedAt>{video.viewCount} views || {videoStore.calculateTime(video.publishedAt)} ago</SavedVideoPublishedAt>
                    </SavedVideoDetailsContainer>
                </SavedVideoRightContainer>
            </SavedVideosLink>
        </SavedVideoContainer>
    );
}
export default SavedVideoComponent;