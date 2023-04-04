import { observer, inject } from "mobx-react";
import { GamingVideosLink } from "../../routes/Gaming/styledComponents";
import { VideoStore } from "../../stores/VideoStore";
import VideosModel from "../../stores/VideoStore/models/VideosModel/VideosModel";
import {
    GamingVideoBottomContainer,
    GamingVideoContainer,
    GamingVideoDetailsContainer,
    GamingVideoImage,
    GamingVideoPublishedAt,
    GamingVideoTitle
} from "./styledComponents";

interface GamingVideoComponentProps {
    video: VideosModel;
}
interface InjectedProps extends GamingVideoComponentProps {
    videoStore: VideoStore;
}

const GamingVideoComponent = inject("videoStore")(observer((props: any) => {

    const { video } = props;
    const { videoStore } = props as InjectedProps;
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
}))
export default GamingVideoComponent;