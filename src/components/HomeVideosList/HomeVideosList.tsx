import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore";
import HomeVideoComponent from "../HomeVideoComponent";
import { HomeVideosListContainer } from "./styledComponents";

interface HomeVideosListProps {

}
interface injectedProps extends HomeVideosListProps {
    videoStore: VideoStore;
}


const HomeVideosList = inject("videoStore")(observer((props: HomeVideosListProps) => {
    const { videoStore } = props as injectedProps;

    return (
        <HomeVideosListContainer>
            {
                videoStore.homeVideosList.map((video) =>

                    <HomeVideoComponent key={video.id} video={video} />
                )
            }
        </HomeVideosListContainer>
    );
}
));
export default HomeVideosList;