import { faBaby, faFireFlameCurved, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { GAMING, SAVED, TRENDING } from "../../constants/constants";
import { VideoListBannerContainer, VideoListBannerImage, VideoListBannerImageContainer, VideoListBannerTitle } from "./styledComponents";
interface VideoListBannerProps {
    title: string;
}

const VideoListBanner = (props: VideoListBannerProps) => {
    const { title } = props;
    const BannerTitle= title.charAt(0).toUpperCase() + title.slice(1);
    let icon: any = undefined;
    if (title === TRENDING) {
        icon = faFireFlameCurved;
    }
    else if (title === GAMING) {
        icon = faGamepad;
    }
    else if (title === SAVED) {
        icon = faFireFlameCurved;
    }
    return (
        <VideoListBannerContainer>
            <VideoListBannerImageContainer>
            <VideoListBannerImage icon={icon} />
                </VideoListBannerImageContainer>
            
            <VideoListBannerTitle >
                {BannerTitle}
            </VideoListBannerTitle>
        </VideoListBannerContainer>
    )

}
export default VideoListBanner;