import {videoStore} from "../../stores";
import { HomeVideoBottomContainer, HomeVideoContainer, HomeVideoDescription, HomeVideoDetailsContainer, HomeVideoImage, HomeVideoProfileImage, HomeVideoPublishedAt, HomeVideosLink, HomeVideoTitle } from "./styledComponents";
import { Link } from "react-router-dom";
const HomeVideoComponent = (props: any) => {

    const { video } = props;
    const onclickVideo = () => {
        videoStore.fetchSelectedVideoDetails(video.id);
    }



    return (
        <HomeVideoContainer onClick={onclickVideo} >
            <HomeVideosLink to={`/video/${video.id}`} >
                <HomeVideoImage src={video.thumbnailUrl}></HomeVideoImage>
                <HomeVideoBottomContainer>
                    <HomeVideoProfileImage src={video.channel.profileImageUrl}></HomeVideoProfileImage>
                    <HomeVideoDetailsContainer>
                        <HomeVideoTitle>{video.title}</HomeVideoTitle>
                        <HomeVideoDescription>{video.channel.name}</HomeVideoDescription>
                        <HomeVideoPublishedAt>{video.viewCount} views || {videoStore.calculateTime(video.publishedAt)} ago</HomeVideoPublishedAt>
                    </HomeVideoDetailsContainer>
                </HomeVideoBottomContainer>
            </HomeVideosLink>
        </HomeVideoContainer>
    );
}
export default HomeVideoComponent;