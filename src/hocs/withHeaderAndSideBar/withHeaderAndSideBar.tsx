
import { inject, observer } from 'mobx-react';
import { themeStore } from '../../stores';
import { ThemeStore } from '../../stores/ThemeStore';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { HomeContainer } from '../../components/Home/styledComponents';
import { WithHeaderAndSidebarContainer } from './styledComponents';


interface WithHeaderAndSidebarProps {
}
interface injectedProps extends WithHeaderAndSidebarProps {
    themeStore: ThemeStore;
}


const withHeaderAndSidebar = (WrappedComponent: React.FC) => {
    const WithHeaderAndSidebarComponent =
        inject("themeStore")(observer((props: WithHeaderAndSidebarProps) => {

            return (
                <HomeContainer>
                    <Header />
                    <WithHeaderAndSidebarContainer>
                        <SideBar />
                        <WrappedComponent />
                    </WithHeaderAndSidebarContainer>
                </HomeContainer>
            );
        }));

    return WithHeaderAndSidebarComponent;
};

export default withHeaderAndSidebar;
