import { useEffect } from "react";
import { observer } from "mobx-react";
import { videoStore } from "../../stores";
import GamingVideoComponent from "../GamingVideoComponent";
import { GamingVideosListContainer } from "./styledComponents";

interface GamingVideosListProps {
}


const GamingVideosList = observer((props: GamingVideosListProps) => {
    useEffect(() => {

    }, [videoStore.gamingVideosList]);

    return (
        <GamingVideosListContainer>
            {
                videoStore.gamingVideosList.map((video) =>

                    <GamingVideoComponent key={video.id} video={video} />
                )
            }
        </GamingVideosListContainer>
    );
}
);
export default GamingVideosList;