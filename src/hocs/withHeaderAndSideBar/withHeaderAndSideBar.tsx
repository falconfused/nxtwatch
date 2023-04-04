
import { inject, observer } from 'mobx-react';
import { ThemeStore } from '../../stores/ThemeStore';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { HomeContainer } from '../../routes/Home/styledComponents';
import { WithHeaderAndSidebarContainer, WithHeaderAndSidebarContainerOuter } from './styledComponents';


interface WithHeaderAndSidebarProps {
}
const withHeaderAndSidebar = (WrappedComponent: React.FC) => {
    const WithHeaderAndSidebarComponent =
        observer((props: WithHeaderAndSidebarProps) => {

            return (
                <WithHeaderAndSidebarContainerOuter>
                    <Header />
                    <WithHeaderAndSidebarContainer>
                        <SideBar />
                        <WrappedComponent />
                    </WithHeaderAndSidebarContainer>
                </WithHeaderAndSidebarContainerOuter>
            );
        });

    return WithHeaderAndSidebarComponent;
};

export default withHeaderAndSidebar;
