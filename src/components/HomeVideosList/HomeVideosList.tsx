import { observer } from "mobx-react";
import { useEffect } from "react";
import videoStore from "../../stores/VideoStore";
import HomeVideoComponent from "../HomeVideoComponent";
import { HomeVideosListContainer } from "./styledComponents";

interface HomeVideosListProps {
}


const HomeVideosList = observer((props: HomeVideosListProps) => {
    useEffect(() => {

    }, [videoStore.homeVideosList]);

    return (
        <HomeVideosListContainer>
            {
                videoStore.homeVideosList.map((video) =>

                    <HomeVideoComponent key={video.id} video={video}></HomeVideoComponent>
                )
            }
        </HomeVideosListContainer>
    );
}
);
export default HomeVideosList;