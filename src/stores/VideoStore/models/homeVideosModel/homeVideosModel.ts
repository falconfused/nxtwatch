
import { ChannelType, VideoInterface } from "../../types";
import ChannelTypeModel from "./ChannelTypeModel";

class VideosModel {
    id: string = "";
    title: string = "";
    channel?: ChannelTypeModel;
    videoUrl: string = "";
    thumbnailUrl: string = "";
    publishedAt: string = "";
    viewCount: string = "";
    constructor(videoObject: VideoInterface) {
        const { id, title, video_url, thumbnail_url, published_at, view_count, channel } = videoObject;
        this.id = id;
        this.channel = new ChannelTypeModel(channel);
        this.title = title;
        this.videoUrl = video_url;
        this.thumbnailUrl = thumbnail_url;
        this.publishedAt = published_at;
        this.viewCount = view_count;
    }
}
export default VideosModel;