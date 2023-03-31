import {videoStore} from "../../stores";
import { TrendingVideoContainer, TrendingVideoDescription, TrendingVideoDetailsContainer, TrendingVideoImage, TrendingVideoProfileImage, TrendingVideoPublishedAt, TrendingVideoRightContainer, TrendingVideosLink, TrendingVideoTitle } from "./styledComponents";

const TrendingVideoComponent = (props: any) => {

    const { video } = props;
    const onclickVideo = () => {
        videoStore.fetchSelectedVideoDetails(video.id);
    }



    return (
        <TrendingVideoContainer onClick={onclickVideo} >
            
            <TrendingVideosLink to={`/video/${video.id}`} >

                <TrendingVideoImage src={video.thumbnailUrl}></TrendingVideoImage>
                <TrendingVideoRightContainer>

                    <TrendingVideoDetailsContainer>
                        <TrendingVideoTitle>{video.title}</TrendingVideoTitle>
                        <TrendingVideoDescription>{video.channel.name}</TrendingVideoDescription>
                        <TrendingVideoPublishedAt>{video.viewCount} views || {videoStore.calculateTime(video.publishedAt)} ago</TrendingVideoPublishedAt>
                    </TrendingVideoDetailsContainer>
                </TrendingVideoRightContainer>
            

        </TrendingVideosLink>
        </TrendingVideoContainer>
    );
}
export default TrendingVideoComponent;