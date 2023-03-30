import { observer } from "mobx-react";
import { useEffect } from "react";
import videoStore from "../../stores/VideoStore";
import TrendingVideoComponent from "../TrendingVideoComponent/TrendingVideoComponent";
import { TrendingVideosListContainer } from "./styledComponents";

interface TrendingVideosListProps {
}


const TrendingVideosList = observer((props: TrendingVideosListProps) => {
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
);
export default TrendingVideosList;