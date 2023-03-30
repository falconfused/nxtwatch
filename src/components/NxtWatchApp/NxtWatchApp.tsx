import { observer } from 'mobx-react';
import { inject, Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginRoute from '../LoginRoute';
import authStore from '../../stores/AuthStore/AuthStore';
import videoStore from '../../stores/VideoStore/VideoStore';
import Home from '../Home/Home';
import navigationStore from '../../stores/NavigationStore';
import { ThemeProvider } from "styled-components";
import { ThemeStore } from '../../stores/ThemeStore/ThemeStore';
import { Theme } from '../../constants/constants';
import Trending from '../Trending/Trending';
import Saved from '../Saved/Saved';
import Gaming from '../Gaming/Gaming';

import SelectedVideo from '../SelectedVideo';
interface injectedProps {
    themeStore: ThemeStore;
}

interface checkAppProps {
}

interface injectedProps extends checkAppProps {
    themeStore: ThemeStore;
}
const NxtWatchApp = inject("themeStore")(observer((props: checkAppProps) => {
    const { themeStore } = props as injectedProps;

    return (
        < BrowserRouter >
            <Provider authStore={authStore} videoStore={videoStore} navigationStore={navigationStore}>
                <ThemeProvider theme={themeStore.theme === Theme.LIGHT ? themeStore.themeLight : themeStore.themeDark} >
                    <Routes>

                        <Route path='/' element={<LoginRoute />}/>
                        <Route path='/home' element={<Home />} />
                        <Route path='/trending' element={<Trending />} />
                        <Route path='/saved' element={<Saved />} />
                        <Route path='/gaming' element={<Gaming />} />
                        <Route path='/video/:videoId' element={<SelectedVideo />} />

                    </Routes>
                </ThemeProvider>
            </Provider>
        </BrowserRouter >
    );

}

)
);




export default NxtWatchApp;
