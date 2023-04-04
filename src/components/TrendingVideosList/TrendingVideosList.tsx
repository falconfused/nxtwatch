import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import { VideoStore } from "../../stores/VideoStore";
import TrendingVideoComponent from "../TrendingVideoComponent/TrendingVideoComponent";
import { TrendingVideosListContainer } from "./styledComponents";

interface TrendingVideosListProps {
}

interface InjectedProps extends TrendingVideosListProps {
    videoStore: VideoStore;
}
const TrendingVideosList =

    inject("videoStore")(
        observer((props: TrendingVideosListProps) => {
            const { videoStore } = props as InjectedProps;
            useEffect(() => {

            }, [videoStore.trendingVideosList]);

            return (
                <TrendingVideosListContainer>
                    {
                        videoStore.trendingVideosList.map((video) =>

                            <TrendingVideoComponent key={video.id} video={video}></TrendingVideoComponent>
                        )
                    }
                </TrendingVideosListContainer>
            );
        }
        ));
export default TrendingVideosList;