import {videoStore }  from "../../stores";
import { GamingVideosLink } from "../Gaming/styledComponents";
import {
    GamingVideoBottomContainer,
    GamingVideoContainer,
    GamingVideoDetailsContainer,
    GamingVideoImage,
    GamingVideoPublishedAt,
    GamingVideoTitle
} from "./styledComponents";

const GamingVideoComponent = (props: any) => {

    const { video } = props;
    const onclickVideo = () => {
        videoStore.fetchSelectedVideoDetails(video.id);
    }



    return (
        <GamingVideoContainer onClick={onclickVideo} >

            <GamingVideosLink to={`/video/${video.id}`}>
                <GamingVideoImage src={video.thumbnailUrl}></GamingVideoImage>
                <GamingVideoBottomContainer>

                    <GamingVideoDetailsContainer>
                        <GamingVideoTitle>{video.title}</GamingVideoTitle>
                        {/* <GamingVideoDescription>{video.channel.name}</GamingVideoDescription> */}
                        <GamingVideoPublishedAt>{video.viewCount} Watching WorldWide</GamingVideoPublishedAt>
                    </GamingVideoDetailsContainer>
                </GamingVideoBottomContainer>
            </GamingVideosLink>
        </GamingVideoContainer>
    );
}
export default GamingVideoComponent;