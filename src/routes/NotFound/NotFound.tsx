import FailureScreen from "../../components/FailureScreen"
import withHeaderAndSidebar from "../../hocs/withHeaderAndSideBar/withHeaderAndSideBar";
import { NotFoundContainer } from "./styledComponents";

const NotFound = () => {
    return (
        <NotFoundContainer >
            <FailureScreen
                failureMessage="We are sorry, the page you requested could not be found."
                failureTitle="Page Not Found"
                failureType="404"

            />
        </NotFoundContainer>
    )
}
export default withHeaderAndSidebar(NotFound);