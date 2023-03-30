import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { HomeContainer } from "../Home/styledComponents";
import { inject, observer } from "mobx-react";
import { VideoStore } from "../../stores/VideoStore/VideoStore";
import SideBar from "../SideBar";
import { NavigationStore } from "../../stores/NavigationStore/index";
import { SAVED } from "../../constants/constants";

interface HomeProps {
}
interface injectedProps extends HomeProps {
    videoStore: VideoStore;
    navigationStore: NavigationStore;
}


const Saved = inject("videoStore", 'navigationStore')(observer((props: HomeProps) => {
    const { videoStore } = props as injectedProps;
    const { navigationStore } = props as injectedProps;
    useEffect(() => {
        // videoStore.();
        navigationStore.setCurrentRoute(SAVED);
    }, []);

    return (

        <HomeContainer>
            <Header ></Header>
            <SideBar></SideBar>
        </HomeContainer>
    );
}));
export default Saved;