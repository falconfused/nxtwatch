import { observer } from 'mobx-react';
import { inject, Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authStore } from '../../stores';
import { videoStore } from '../../stores';
import { bannerStore } from '../../stores';
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import { Theme } from '../../constants/constants';
import Home from '../../routes/Home';
import Trending from '../../routes/Trending/Trending';
import Saved from '../../routes/Saved';
import Gaming from '../../routes/Gaming';
import SelectedVideo from '../../routes/SelectedVideo';
import NotFound from '../../routes/NotFound';
import LoginRoute from '../LoginRoute';
import { ThemeProvider } from "styled-components";
import * as allStore from '../../stores';

interface injectedProps {
    themeStore: ThemeStore;
}

interface NxtWatchAppProps {
}

interface injectedProps extends NxtWatchAppProps {
    themeStore: ThemeStore;
}
const NxtWatchApp = inject("themeStore")(observer((props: NxtWatchAppProps) => {
    const { themeStore } = props as injectedProps;

    return (
        < BrowserRouter >
            <Provider authStore={authStore} videoStore={videoStore} bannerStore={bannerStore}>
                <ThemeProvider theme={themeStore.theme === Theme.LIGHT ? themeStore.themeLight : themeStore.themeDark} >
                    <Routes>

                        <Route path='/' element={<LoginRoute />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/trending' element={<Trending />} />
                        <Route path='/saved' element={<Saved />} />
                        <Route path='/gaming' element={<Gaming />} />
                        <Route path='/video/:videoId' element={<SelectedVideo />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </ThemeProvider>
            </Provider>
        </BrowserRouter >
    );

}

)
);




export default NxtWatchApp;
