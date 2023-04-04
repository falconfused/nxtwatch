import { inject } from "mobx-react";
import { observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore";
import VideosModel from "../../stores/VideoStore/models/VideosModel/VideosModel";
import { HomeVideoBottomContainer, HomeVideoContainer, HomeVideoDescription, HomeVideoDetailsContainer, HomeVideoImage, HomeVideoProfileImage, HomeVideoPublishedAt, HomeVideosLink, HomeVideoTitle } from "./styledComponents";

interface HomeVideoComponentProps {
    video: VideosModel;
}
interface InjectedProps extends HomeVideoComponentProps {
    videoStore: VideoStore;
}

const HomeVideoComponent =
    inject("videoStore")(observer(
        (props: any) => {
            const { videoStore } = props as InjectedProps;
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
        }))
export default HomeVideoComponent;