
import { inject, observer } from 'mobx-react';
import { ThemeStore } from '../../stores/ThemeStore';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { HomeContainer } from '../../components/Home/styledComponents';
import { WithHeaderAndSidebarContainer } from './styledComponents';


interface WithHeaderAndSidebarProps {
}
const withHeaderAndSidebar = (WrappedComponent: React.FC) => {
    const WithHeaderAndSidebarComponent =
        observer((props: WithHeaderAndSidebarProps) => {

            return (
                <HomeContainer>
                    <Header />
                    <WithHeaderAndSidebarContainer>
                        <SideBar />
                        <WrappedComponent />
                    </WithHeaderAndSidebarContainer>
                </HomeContainer>
            );
        });

    return WithHeaderAndSidebarComponent;
};

export default withHeaderAndSidebar;
