
export interface ChannelType {
    name: string;
    profile_image_url: string;
    subscriber_count?: string;
}




export interface VideoInterface {
    id: string;
    title: string;
    video_url: string;
    channel: ChannelType;
    thumbnail_url: string;
    view_count: string;
    published_at: string;

}