import { useEffect } from "react";
import { observer } from "mobx-react";
import {videoStore} from "../../stores";
import SavedVideoComponent from "../SavedVideoComponent/index";
import { SavedVideosListContainer } from "./styledComponents";

interface SavedVideosListProps {
}


const SavedVideosList = observer((props: SavedVideosListProps) => {
    useEffect(() => {

    }, [videoStore.savedVideosList]);

    return (
        <SavedVideosListContainer>
            {
                videoStore.savedVideosList.map((video) =>

                    <SavedVideoComponent key={video.id} video={video}></SavedVideoComponent>
                )
            }
        </SavedVideosListContainer>
    );
}
);
export default SavedVideosList;