import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "./styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
}


const Home = inject("videoStore")(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    useEffect(() => {
        videoStore.fetchHomeVideos();
    }, []);

    return (

        <HomeContainer>
            <Header ></Header>
        </HomeContainer>
    );
}));
export default Home;